import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';
import { getHasCard } from '../modules/card/selectors';
import { getAddresses, getRoute } from '../modules/route/selectors';
import { getCard } from '../modules/card/actions';
import { loadAddressList, сreateRoute } from '../modules/route/actions';
import { Link } from 'react-router-dom';
import { Paper, Grid, TextField, MenuItem, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    map: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        // zIndex: '10'
    },
    paper: {
        position: 'absolute',
        top: 0,
        left: '20px',
        width: '384px',
        padding: '44px 60px',
        margin: '48px 0',
        backgroundColor: '#fff',
        zIndex: '100'
    },
    form: {
        width: '100%'
    },
    gridForm : {
        height: '188px'
    },
    gridContainer: {
        height: '222px'
    },
    textfield: {
        marginBottom: '43px'
    },
    typography: {
        marginBottom: '30px'
    },
    disabledButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.12)'
    },
    button : {
        backgroundColor: '#ffc617'
    },
    link: {
        textDecoration: 'none'
    }
});

class Map extends Component {
    map = null;
    mapContainer = React.createRef();
    mapObject = React.createRef();

    state = {
        address1: '',
        address2: ''
    }

    componentDidMount() {
        mapboxgl.accessToken =
            'pk.eyJ1IjoibGl6YS1hbmFuZXZhIiwiYSI6ImNrY2Y1ZjFmNTBldTYyc3BiOW1la2s4dGoifQ.kBHDsYxJEau6-rijQnZPRg';
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [30.316229, 59.938732],
            zoom: 12
        });

        this.mapObject.current = this.map;

        const { getCard } = this.props;
        getCard();
        const { loadAddressList } = this.props;
        loadAddressList();
    }

    handleChange = (event) => {
        const {
            target: { name, value }
        } = event;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { сreateRoute } = this.props;

        сreateRoute(this.state);
    }

    drawRoute = (map, coordinates) => {
        map.flyTo({
            center: coordinates[0],
            zoom: 15
        });
       
        map.addLayer({
            id: "route",
            type: "line",
            source: {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates
                    }
                }
            },
            layout: {
                "line-join": "round",
                "line-cap": "round"
            },
            paint: {
                "line-color": "#ffc617",
                "line-width": 8
            }
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        const { hasCard, addresses, route } = this.props;
        const { address1, address2 } = this.state;
        const { map, paper, form, gridForm, gridContainer, textfield, typography, disabledButton, button, link } = this.props.classes;
        
        if (this.map !== null) {
            if (this.mapObject.current.getLayer('route')) {
                
                this.mapObject.current
                    .removeLayer('route')
                    .removeSource('route');
            }
    
            if (route.length) {
                this.drawRoute(this.mapObject.current, route);
            }
        }
        return (
            <div className='wrapper'>
                <div className={map} ref={this.mapContainer} />
                <Paper elevation={1} className={paper}>
                    { hasCard ? (
                        <form onSubmit={this.handleSubmit} className={form}>
                            <Grid container className={gridForm}>
                                <Grid item xs={12}>
                                    <TextField
                                        name='address1'
                                        value={address1}
                                        onChange={this.handleChange}
                                        placeholder='Откуда'
                                        className={textfield}
                                        fullWidth
                                        select
                                        // inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        {addresses
                                            .filter(address => address !== address2)
                                            .map((address, index) => (
                                                <MenuItem key={index} value={address}>
                                                    {address}
                                                </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name='address2'
                                        value={address2}
                                        onChange={this.handleChange}
                                        placeholder='Куда'
                                        className={textfield}
                                        fullWidth
                                        select
                                    >
                                        {addresses
                                            .filter(address => address !== address1)
                                            .map((address, index) => (
                                                <MenuItem key={index} value={address}>
                                                    {address}
                                                </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type='submit'
                                        disabled={!address1 || !address2}
                                        // classes={{ root: button, disabled: disabledButton }}
                                        classes={{ disabled: disabledButton }}
                                        fullWidth
                                        // className={button}
                                    >
                                        Вызвать такси
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    ) : (
                        <Grid container className={gridContainer}>
                            <Grid item xs={12}>
                                <Typography variant='h4' className={typography}>
                                    Заполните платежные данные
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='body1' className={typography}>
                                    Укажите информацию о банковской карте, чтобы сделать заказ.
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Link to='/profile' className={link}>
                                    <Button type='button' fullWidth className={button}>
                                        Перейти в профиль
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    )}
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Map);

export const MapWithConnect = connect(
    (state) => ({ hasCard: getHasCard(state), addresses: getAddresses(state), route: getRoute(state) }),
    { getCard, loadAddressList, сreateRoute }
)(withStyles(styles)(Map));

import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    map: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
});

class Map extends Component {
    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken =
            'pk.eyJ1IjoibGl6YS1hbmFuZXZhIiwiYSI6ImNrY2Y1ZjFmNTBldTYyc3BiOW1la2s4dGoifQ.kBHDsYxJEau6-rijQnZPRg';
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [37.62, 55.75],
            zoom: 12
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        const { map } = this.props.classes;
        
        return (
            <div className='wrapper'>
                <div className={map} ref={this.mapContainer} />
            </div>
        );
    }
}

export default withStyles(styles)(Map);

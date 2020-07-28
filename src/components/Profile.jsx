import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveCard } from '../modules/card/actions';
import { Grid, Paper, Typography, Card, Box, TextField, Button } from '@material-ui/core';
import { MCIcon } from 'loft-taxi-mui-theme';
import { DatePicker } from '@material-ui/pickers';
import { withStyles } from '@material-ui/core';

const styles = (theme) => ({
    profile: {
        display: 'flex'
    },
    grid: {
        width: '752px',
        height: '553px',
        display: 'flex'
    },
    paper: {
        height: '369px',
        backgroundColor: '#fff',
        padding: '44px 60px',
        margin: 'auto 0'
    },
    subtitle: {
        marginBottom: '40px'
    },
    card: {
        width: '236px',
        height: '157px',
        padding: '16px 32px',
        position: 'relative'
    },
    box: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    button: {
        backgroundColor: '#ffc617',
        padding: '6px 16px',
        marginTop: '41px',
        marginLeft: '8px'
    }
});

class Profile extends Component {
    state = {
        cardNumber: '',
        validThru: new Date(),
        cardholderName: '',
        cvc: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { saveCard } = this.props;
        
        saveCard(this.state);
    }

    handleChange = (event) => {
        const {
            target: { name, value }
        } = event;
        this.setState({ [name]: value });
    }

    handleDate = (date) => {
        this.setState({ validThru: date });
    }

    render() {
        const { cardNumber, validThru, cardholderName, cvc } = this.state;
        const {
            profile,
            grid,
            paper,
            subtitle,
            card,
            box,
            button
        } = this.props.classes;

        return (
            <div className='wrapper'>
                <section className={profile}>
                    <Grid container justify='center'>
                        <Grid item className={grid}>
                            <Paper className={paper}>
                                <Typography variant='h4' align='center'>
                                    Профиль
                                </Typography>
                                <Typography
                                    variant='body1'
                                    align='center'
                                    color='textSecondary'
                                    className={subtitle}
                                >
                                    Способ оплаты
                                </Typography>
                                <form onSubmit={this.handleSubmit}>
                                    <Grid container>
                                        <Grid item>
                                            <Grid container justify='space-between' spacing={4}>
                                                <Grid item>
                                                    <Card elevation={3} className={card}>
                                                        <MCIcon />
                                                        <Box className={box}>
                                                            <TextField
                                                                required
                                                                label='Номер карты'
                                                                placeholder='0000 0000 0000 0000'
                                                                type='number'
                                                                name='cardNumber'
                                                                value={cardNumber}
                                                                onChange={this.handleChange}
                                                                // helperText='Это обязательное поле'
                                                            />
                                                            <DatePicker
                                                                required
                                                                label='Срок действия'
                                                                name='validThru'
                                                                value={validThru}
                                                                onChange={this.handleDate}
                                                                format='MM/yy'
                                                                views={['year', 'month']}
                                                                openTo='year'
                                                                disablePast
                                                                clearable
                                                                cancelLabel={<span>Cancel</span>}
                                                                okLabel={<span>OK</span>}
                                                                // helperText='Это обязательное поле'
                                                            />
                                                        </Box>
                                                    </Card>
                                                </Grid>
                                                <Grid item>
                                                    <Card elevation={3} className={card}>
                                                        <Box className={box}>
                                                            <TextField
                                                                required
                                                                label='Имя владельца'
                                                                placeholder='USER NAME'
                                                                type='string'
                                                                name='cardholderName'
                                                                value={cardholderName}
                                                                onChange={this.handleChange}
                                                                // helperText='Это обязательное поле'
                                                            />
                                                            <TextField
                                                                required
                                                                label='CVC'
                                                                placeholder='CVC'
                                                                type='number'
                                                                name='cvc'
                                                                value={cvc}
                                                                onChange={this.handleChange}
                                                                // helperText='Это обязательное поле'
                                                            />
                                                        </Box>
                                                    </Card>
                                                </Grid>
                                            </Grid>
                                            <Grid align='center'>
                                                <Button type='submit' className={button}>
                                                    Сохранить
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default withStyles(styles)(Profile);

export const ProfileWithConnect = connect(
    null,
    { saveCard }
)
(withStyles(styles)(Profile));

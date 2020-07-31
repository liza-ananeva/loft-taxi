import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIsLoggedIn } from '../modules/auth/selectors';
import { signup } from '../modules/auth/actions';
import { Redirect, Link } from 'react-router-dom';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import { withStyles } from '@material-ui/core';

const styles = (theme) => ({
    signupSection: {
        display: 'flex'
    },
    grid: {
        width: '269.25px'
    },
    paper: {
        width: '380px',
        height: '437px',
        padding: '44px 60px'
    },
    gridForm: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    title: {
        marginBottom: '30px'
    },
    subtitle: {
        marginBottom: '10px'
    },
    link: {
        color: '#1473e6',
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    textfield: {
        marginBottom: '30px'
    },
    button: {
        padding: '6px 16px',
        backgroundColor: '#ffc617'
    }
});

class Signup extends Component {
    state = {
        email: '',
        name: '',
        surname: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { signup } = this.props;
        
        signup(this.state);
    }

    handleChange = (event) => {
        const {
            target: { name, value }
        } = event;
        this.setState({ [name]: value });
    }

    render() {
        const { isLoggedIn } = this.props;
        const { email, name, surname, password } = this.state;
        const {
            signupSection,
            grid,
            paper,
            gridForm,
            title,
            subtitle,
            link,
            textfield,
            button
        } = this.props.classes;

        return isLoggedIn ? (
            <Redirect to='/map' />
        ) : (
            <div className='wrapper'>
                <section className={signupSection}>
                    <Grid container alignItems='center' justify='center'>
                        <Grid item xs={3} className={grid}>
                            <Logo />
                        </Grid>
                        <Grid item xs={3} className={grid}>
                            <Paper elevation={1} className={paper}>
                                <form onSubmit={this.handleSubmit}>
                                    <Grid container spacing={2} className={gridForm}>
                                        <Grid item>
                                            <Typography variant='h4' className={title}>
                                                Регистрация
                                            </Typography>
                                            <Typography variant='body1' className={subtitle}>
                                                Уже зарегистрированы?{' '}
                                                <Link to='/login' className={link}>
                                                    Войти
                                                </Link>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                label='Адрес электронной почты'
                                                type='email'
                                                name='email'
                                                value={email}
                                                onChange={this.handleChange}
                                                fullWidth
                                                className={textfield}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                required
                                                label='Имя'
                                                type='string'
                                                name='name'
                                                value={name}
                                                onChange={this.handleChange}
                                                fullWidth
                                                className={textfield}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                required
                                                label='Фамилия'
                                                type='string'
                                                name='surname'
                                                value={surname}
                                                onChange={this.handleChange}
                                                fullWidth
                                                className={textfield}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                label='Пароль'
                                                type='password'
                                                name='password'
                                                value={password}
                                                onChange={this.handleChange}
                                                fullWidth
                                                className={textfield}
                                            />
                                        </Grid>
                                        <Grid item style={{display: 'flex'}} justify='flex-end' xs={12}>
                                            <Button type='submit' className={button}>
                                                Войти
                                            </Button>
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

export default withStyles(styles)(Signup);

export const SignupWithConnect = connect(
    (state) => ({ isLoggedIn: getIsLoggedIn(state) }),
    { signup }
)(withStyles(styles)(Signup));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIsLoggedIn } from '../modules/auth/selectors';
import { login } from '../modules/auth/actions';
import { Redirect, Link } from 'react-router-dom';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import { withStyles } from '@material-ui/core';

const styles = (theme) => ({
    loginSection: {
        display: 'flex'
    },
    grid: {
        width: '269.25px'
    },
    paper: {
        width: '380px',
        height: '295px',
        padding: '44px 60px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
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
        backgroundColor: '#ffc617',
        marginLeft: 'auto'
    }
});

class Login extends Component {
    state = {
        email: '',
        password: '',
        touchedEmail: false,
        touchedPassword: false
    };

    authenticate = (event) => {
        event.preventDefault();
        const { login } = this.props;
        
        login(this.state);
    };

    handleChange = (event) => {
        const {
            target: { name, value }
        } = event;
        this.setState({ [name]: value });
    };

    handleBlur = (event) => {
        const {
          target: { name }
        } = event;

        name === 'email'
            ? this.setState({ touchedEmail: true })
            : this.setState({ touchedPassword: true });
    };

    render() {
        const { isLoggedIn } = this.props;
        const { email, password, touchedEmail, touchedPassword } = this.state;
        const {
            loginSection,
            grid,
            paper,
            form,
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
                <section className={loginSection}>
                    <Grid container alignItems='center' justify='center'>
                        <Grid item xs={3} className={grid}>
                            <Logo />
                        </Grid>
                        <Grid item xs={3} className={grid}>
                            <Paper className={paper} elevation={1}>
                                <form
                                    className={form}
                                    onSubmit={this.authenticate}
                                >
                                    <Typography className={title} variant='h4'>
                                        Войти
                                    </Typography>
                                    <Typography
                                        className={subtitle}
                                        variant='body1'
                                    >
                                        Новый пользователь?{' '}
                                        <Link to='/signup' className={link}>Зарегистрируйтесь</Link>
                                    </Typography>
                                    <TextField
                                        required
                                        label='Имя пользователя'
                                        type='email'
                                        name='email'
                                        value={email}
                                        onChange={this.handleChange}
                                        onBlur={this.handleBlur}
                                        error={!email && touchedEmail}
                                        helperText={!email && touchedEmail && 'Неверный логин'}
                                        className={textfield}
                                    />
                                    <TextField
                                        required
                                        label='Пароль'
                                        type='password'
                                        name='password'
                                        value={password}
                                        onChange={this.handleChange}
                                        onBlur={this.handleBlur}
                                        error={!password && touchedPassword}
                                        helperText={!password && touchedPassword && 'Неправильный пароль'}
                                        className={textfield}
                                    />
                                    <Button type='submit' className={button}>
                                        Войти
                                    </Button>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default withStyles(styles)(Login);

export const LoginWithConnect = connect(
    (state) => ({ isLoggedIn: getIsLoggedIn(state) }),
    { login }
)(withStyles(styles)(Login));

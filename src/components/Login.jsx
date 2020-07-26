import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../modules/auth/actions';
import { getIsLoggedIn, getUser } from '../modules/auth/selectors';
import { Grid, Paper, Typography, Link, TextField, Button } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    login: {
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
    textfield: {
        marginBottom: '30px'
    },
    button: {
        padding: '6px 16px',
        backgroundColor: '#ffc617',
        marginLeft: 'auto'
    }
});

class Login extends PureComponent {
    // state = {
    //     email: '',
    //     password: ''
    // }

    authenticate = (event) => {
        event.preventDefault();
        
        // const { email, password } = this.props;
        const { user } = this.props;
        const { login } = this.props;
        
        // login({email, password});
        login(user);
    }

    handleChange = (event) => {
        // this.setState({ [event.target.name]: event.target.value });
        const { user } = this.props;
        user[event.target.name] = event.target.value;
    }

    render() {
        const { isLoggedIn } = this.props;
        const { user } = this.props;
        const { login, grid, paper, form, title, subtitle, textfield, button } = this.props.classes;
        
        return isLoggedIn ? (
            <Redirect to='/map' />
        ) : (
            <div className='wrapper'>
                <section className={login}>
                    <Grid container alignItems='center' justify='center'>
                        <Grid item xs={3} className={grid}>
                            <Logo />
                        </Grid>
                        <Grid item xs={3} className={grid}>
                            <Paper className={paper} elevation={1}>
                                <form className={form} onSubmit={this.authenticate}>
                                    <Typography className={title} variant='h4'>
                                        Войти
                                    </Typography>
                                    <Typography className={subtitle} variant='body1'>
                                        Новый пользователь?{' '}
                                        <Link>Зарегистрируйтесь</Link>
                                    </Typography>
                                    <TextField
                                        required
                                        label='Имя пользователя'
                                        type='email'
                                        name='email'
                                        value={user.email}
                                        onChange={this.handleChange}
                                        className={textfield}
                                    />
                                    <TextField
                                        required
                                        label='Пароль'
                                        type='password'
                                        name='password'
                                        value={user.password}
                                        onChange={this.handleChange}
                                        className={textfield}
                                    />
                                    <Button type='submit' className={button}>Войти</Button>
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

const mapAuthStateToProps = (state) => ({
    isLoggedIn: getIsLoggedIn(state),
    user: getUser(state)
});

export const LoginWithConnect = connect(
    mapAuthStateToProps,
    { login }
)(withStyles(styles)(Login));

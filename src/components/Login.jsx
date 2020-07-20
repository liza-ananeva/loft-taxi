import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../actions';
import { Typography, Link, TextField, Button } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import { styled } from '@material-ui/core/styles';

class Login extends PureComponent {
    state = {
        email: '',
        password: ''
    }

    authenticate = (event) => {
        event.preventDefault();
        
        const { email, password } = this.state;
        const { authenticate } = this.props;
        console.log('authenticate', email, password);
        authenticate(email, password);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className='wrapper'>
                <section className='section login'>
                    <div className='login__leftside'>
                        <Logo />
                    </div>
                    <div className='login__rightside'>
                        <form
                            className='form form--login'
                            onSubmit={this.authenticate}
                        >
                            <StyledTypographyTitle variant='h4'>
                                Войти
                            </StyledTypographyTitle>
                            <StyledTypography>
                                Новый пользователь?{' '}
                                <Link>Зарегистрируйтесь</Link>
                            </StyledTypography>
                            <StyledTextField
                                required
                                label='Имя пользователя'
                                type='email'
                                name='email'
                                value={email}
                                onChange={this.handleChange}
                            />
                            <StyledTextField
                                required
                                label='Пароль'
                                type='password'
                                name='password'
                                value={password}
                                onChange={this.handleChange}
                            />
                            <StyledButton type='submit'>Войти</StyledButton>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export const LoginWithAuth = connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn}),
    { authenticate }
)(Login);

const StyledTypographyTitle = styled(Typography)({
    marginBottom: '30px'
});

const StyledTypography = styled(Typography)({
    marginBottom: '10px'
});

const StyledTextField = styled(TextField)({
    marginBottom: '30px'
});

const StyledButton = styled(Button)({
    padding: '6px 16px',
    backgroundColor: '#ffc617',
    marginLeft: 'auto'
});

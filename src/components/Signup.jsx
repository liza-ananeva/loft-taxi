import React, { PureComponent } from 'react';

class Signup extends PureComponent {
    state = {
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.navigateTo('map');
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { email, firstName, lastName, password } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Адрес электронной почты
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Имя
                    <input
                        type='text'
                        name='firstName'
                        value={firstName}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Фамилия
                    <input
                        type='text'
                        name='lastName'
                        value={lastName}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Пароль
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                    />
                </label>
                <button type='submit'>Войти</button>
            </form>
        );
    }
}

export default Signup;
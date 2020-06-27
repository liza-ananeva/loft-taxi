import React from 'react';

class Login extends React.Component {
    state = {
        email: '',
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
        const { email, password } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Имя пользователя
                    <input
                        type='email'
                        name='email'
                        value={email}
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

export default Login;

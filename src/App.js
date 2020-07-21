import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HeaderWithConnect } from './components/Header';
import { LoginWithConnect } from './components/Login';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
// import Signup from './components/Signup';
import { Map } from './components/Map';
import { Profile } from './components/Profile';

class App extends PureComponent {
    static propTypes = {
        isLoggedIn: PropTypes.bool
    }

    render() {
        const { isLoggedIn } = this.props;

        return (
            <>
                {isLoggedIn && <HeaderWithConnect />}
                <main>
                    <Switch>
                        <Route exact path='/' component={LoginWithConnect} />
                        <PrivateRoute path='/map' component={Map} />
                        <PrivateRoute path='/profile' component={Profile} />
                    </Switch>
                </main>
            </>
        );
    }
}

export default connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn})
)
(App);

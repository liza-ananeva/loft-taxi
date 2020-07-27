import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getIsLoggedIn } from './modules/auth/selectors';
import PropTypes from 'prop-types';
import { HeaderWithConnect } from './components/Header';
import { LoginWithConnect } from './components/Login';
import Signup from './components/Signup';
import Map from './components/Map';
import { ProfileWithConnect } from './components/Profile';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

class App extends PureComponent {
    static propTypes = {
        isLoggedIn: PropTypes.bool,
    };

    render() {
        const { isLoggedIn } = this.props;

        return (
            <>
                {isLoggedIn && <HeaderWithConnect />}
                <main>
                    <Switch>
                        <Route
                            exact
                            path='/login'
                            component={LoginWithConnect}
                        />
                        <Route exact path='/signup' component={Signup} />
                        <PrivateRoute path='/map' component={Map} />
                        <PrivateRoute
                            path='/profile'
                            component={ProfileWithConnect}
                        />
                    </Switch>
                    <Redirect from='/' to='/login' />
                </main>
            </>
        );
    }
}

export default connect((state) => ({
    isLoggedIn: getIsLoggedIn(state),
}))(App);

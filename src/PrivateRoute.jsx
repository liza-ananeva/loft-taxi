import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsLoggedIn } from './modules/auth/selectors';

export default connect((state) => ({
    isLoggedIn: getIsLoggedIn(state)
}))(({ component: Component, isLoggedIn, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isLoggedIn ? <Component {...props} /> : <Redirect to='/login' />
        }
    />
));

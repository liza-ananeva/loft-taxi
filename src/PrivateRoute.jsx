import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsLoggedIn } from './modules/auth/selectors';

// export const PrivateRoute = connect((state) => ({
//     isLoggedIn: state.auth.isLoggedIn,
// }))(({ component: Component, isLoggedIn, ...rest }) => (
//     <Route
//         {...rest}
//         render={(props) =>
//             isLoggedIn ? <Component {...props} /> : <Redirect to='/login' />
//         }
//     />
// ));

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

// const mapStateToProps = (state) => ({
//     isLoggedIn: getIsLoggedIn(state),
//     user: getUser(state),
//     isLoading: getIsLoading(state),
//     error: getError(state)
// });
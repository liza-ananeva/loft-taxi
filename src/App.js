import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { HeaderWithConnect } from './components/Header';
import { LoginWithConnect } from './components/Login';
import Signup from './components/Signup';
import { Map } from './components/Map';
import { Profile } from './components/Profile';

class App extends PureComponent {
    // state = {
    //     currentPage: 'login'
    // }

    // pages = {
    //     login: (props) => <LoginWithAuth {...props} />,
    //     signup: (props) => <Signup {...props} />,
    //     map: (props) => <Map {...props} />,
    //     profile: (props) => <Profile {...props} />
    // }

    // navigateTo = (page) => {
    //     const { isLoggedIn } = this.props;
        
    //     this.setState({ currentPage: isLoggedIn ? page : 'login' });
    // }

    // componentDidUpdate(prevProps) {
    //     console.log('componentDidUpdate');
    //     const { currentPage } = this.state;

    //     if (currentPage === 'login' && !prevProps.isLoggedIn) {
    //         this.setState({ currentPage: 'map' });
    //     }
    // }

    render() {
        // const { currentPage } = this.state;
        // const { isLoggedIn } = this.props;

        // console.log('currentPage: ', currentPage);
        // console.log('isLoggedIn: ', isLoggedIn);

        return (
            <>
                {/* {this.props.isLoggedIn && <HeaderWithConnect />} */}
                <main>
                    {/* {this.pages[currentPage]({ navigate: this.navigateTo })} */}
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

App.propTypes = {
    isLoggedIn: PropTypes.bool,
}

export default connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn})
)
(App);

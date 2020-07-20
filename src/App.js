import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { HeaderWithAuth } from './components/Header';
import { LoginWithAuth } from './components/Login';
import Signup from './components/Signup';
import { Map } from './components/Map';
import { Profile } from './components/Profile';

class App extends PureComponent {
    state = {
        currentPage: 'login'
    }

    pages = {
        login: (props) => <LoginWithAuth {...props} />,
        signup: (props) => <Signup {...props} />,
        map: (props) => <Map {...props} />,
        profile: (props) => <Profile {...props} />
    }

    navigateTo = (page) => {
        const { isLoggedIn } = this.props;
        
        this.setState({ currentPage: isLoggedIn ? page : 'login' });
    }

    componentDidUpdate(prevProps) {
        console.log('componentDidUpdate');
        const { currentPage } = this.state;

        if (currentPage === 'login' && !prevProps.isLoggedIn) {
            this.setState({ currentPage: 'map' });
        }
    }

    render() {
        const { currentPage } = this.state;
        const { isLoggedIn } = this.props;

        console.log('currentPage: ', currentPage);
        console.log('isLoggedIn: ', isLoggedIn);

        return (
            <>
                {isLoggedIn && <HeaderWithAuth navigateTo={this.navigateTo} />}
                <main>
                    {this.pages[currentPage]({ navigate: this.navigateTo })}
                </main>
            </>
        );
    }
}

export default connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn})
)
(App);

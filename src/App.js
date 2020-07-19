import React, { PureComponent } from 'react';
import { withAuth } from './AuthContext';
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
        const { currentPage } = this.state;

        if (currentPage === 'login' && !prevProps.isLoggedIn) {
            this.setState({ currentPage: 'map' });
        }
    }

    render() {
        const { currentPage } = this.state;
        const { isLoggedIn } = this.props;

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

export default withAuth(App);

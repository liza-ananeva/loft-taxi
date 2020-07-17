import React, { PureComponent } from 'react';
import { withAuth } from './AuthContext'
import { HeaderWithAuth } from './components/Header';
import { LoginWithAuth } from './components/Login';
import Signup from './components/Signup';
import { Map } from './components/Map';
import { Profile } from './components/Profile';

class App extends PureComponent {
    state = {
        currentPage: 'login',
        isShowHeader: false
    }

    pages = {
        login: (props) => <LoginWithAuth {...props}/>,
        signup: (props) => <Signup {...props}/>,
        map: (props) => <Map {...props}/>,
        profile: (props) => <Profile {...props}/>
    }

    navigateTo = (page) => {
        this.props.isLoggedIn
        ? this.setState({ currentPage: page })
        : this.setState({ currentPage: 'login' });
    }

    toggleHeader = () => {
        this.props.isLoggedIn
        ? this.setState({ isShowHeader: true })
        : this.setState({ isShowHeader: false });
    }

    componentDidMount() {
        this.toggleHeader();
    }

    componentDidUpdate() {
        this.toggleHeader();
    }

    render() {
        const { currentPage, isShowHeader } = this.state;

        return (
            <>
                {isShowHeader && (<HeaderWithAuth show={isShowHeader} navigateTo={this.navigateTo}/>)}
                <main>
                    {this.pages[currentPage]({navigate: this.navigateTo})}
                </main>
            </>
        );
    }
}

export default withAuth(App);
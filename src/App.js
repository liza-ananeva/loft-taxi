import React from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Map from './components/Map';
import Profile from './components/Profile';

class App extends React.Component {
    state = { currentPage: 'login' }

    navigateTo = (page) => {
        this.setState({ currentPage: page });
    }

    pages = {
        login: <Login navigateTo={this.navigateTo} />,
        signup: <Signup navigateTo={this.navigateTo} />,
        map: <Map />,
        profile: <Profile />
    }

    render() {
        const { currentPage } = this.state;
        const navItems = Object.keys(this.pages);

        return (
            <>
                <Header navItems={navItems} navigateTo={this.navigateTo} />
                <main>
                    <section>{this.pages[currentPage]}</section>
                </main>
            </>
        );
    }
}

export default App;

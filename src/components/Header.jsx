import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { logout } from '../modules/auth/actions';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    header: {
        flex: '0 1 69.39px'
    },
    appBar: {
        height: '69.39px',
        backgroundColor: '#fff'
    },
    toolbar: {
        height: '100%',
        justifyContent: 'space-between'
    }
});

class Header extends PureComponent {
    unauthenticate = (event) => {
        event.preventDefault();
        
        const { logout } = this.props;
        
        logout();
    }

    render() {
        const { header, appBar, toolbar } = this.props.classes;

        return (
            <div className={header}>
                <AppBar className={appBar}>
                    <Toolbar className={toolbar}>
                        <Logo />
                        <div>
                            <Link to='/map' className='link'>
                                <Button>
                                    Карта
                                </Button>
                            </Link>
                            <Link to='/profile' className='link'>
                                <Button>
                                    Профиль
                                </Button>
                            </Link>
                            <Button onClick={this.unauthenticate}>
                                Выйти
                            </Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Header);

export const HeaderWithConnect = connect(
    null,
    { logout }
)
(withStyles(styles)(Header));

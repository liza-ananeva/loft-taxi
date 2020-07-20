import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions';
import { Link } from 'react-router-dom';
import { Toolbar, Button } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import { styled } from '@material-ui/core/styles';

class Header extends PureComponent {
    static propTypes = {
        navigateTo: PropTypes.func
    }

    unauthenticate = (event) => {
        event.preventDefault();
        
        const { logout } = this.props;
        
        logout();
    }

    render() {
        const { navigateTo } = this.props;

        return (
            <StyledToolbar>
                <Logo />
                <div>
                    {/* <Link to='/map'>Карта</Link>
                    <Link to='/profile'>Профиль</Link> */}
                    <Button size='medium' onClick={() => navigateTo('map')}>
                        Карта
                    </Button>
                    <Button size='medium' onClick={() => navigateTo('profile')}>
                        Профиль
                    </Button>
                    <Button size='medium' onClick={this.unauthenticate}>
                        Выйти
                    </Button>
                </div>
            </StyledToolbar>
        );
    }
}

export const HeaderWithConnect = connect(
    null,
    { logout }
)
(Header);

const StyledToolbar = styled(Toolbar)({
    height: '70px',
    justifyContent: 'space-between'
});

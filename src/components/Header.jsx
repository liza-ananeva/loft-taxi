import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withAuth } from '../AuthContext';
import { Toolbar, Button } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import { styled } from '@material-ui/core/styles';

class Header extends PureComponent {
    static propTypes = {
        show: PropTypes.bool,
        navigateTo: PropTypes.func
    }

    unauthenticate = (event) => {
        event.preventDefault();
        this.props.logout();
        this.props.navigateTo('login');
    }

    render() {
        const { show, navigateTo } = this.props;

        return show
        ? (
            <StyledToolbar>
                <Logo/>
                <div>
                    <Button size='medium' onClick={() => navigateTo('map')}>Карта</Button>
                    <Button size='medium' onClick={() => navigateTo('profile')}>Профиль</Button>
                    <Button size='medium' onClick={this.unauthenticate}>Выйти</Button>
                </div>
            </StyledToolbar>
        )
        : null;
    }
}

export const HeaderWithAuth = withAuth(Header);

const StyledToolbar = styled(Toolbar)({
    height: '69.39px',
    justifyContent: 'space-between'
});
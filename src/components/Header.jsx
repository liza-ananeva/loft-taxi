import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions';
import { Link } from 'react-router-dom';
import { Toolbar, Button } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import { styled } from '@material-ui/core/styles';

class Header extends PureComponent {
    unauthenticate = (event) => {
        event.preventDefault();
        
        const { logout } = this.props;
        
        logout();
    }

    render() {
        return (
            <StyledToolbar>
                <Logo />
                <div>
                    <Link to='/map' className='link'>
                        <Button size='medium'>
                            Карта
                        </Button>
                    </Link>
                    <Link to='/profile' className='link'>
                        <Button size='medium'>
                            Профиль
                        </Button>
                    </Link>
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

import React from 'react';

class Header extends React.Component {
    render() {
        const { navItems, navigateTo } = this.props;

        return (
            <header>
                <nav>
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <button onClick={() => navigateTo(item)}>{item}</button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;

import React, { useState, useContext } from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (email, password) => {
        if (email !== 'test@test.com' || password !== '123123') {
            return;
        }

        setIsLoggedIn(true);
    }

    const logout = () => {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{ login, logout, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}

export const withAuth = (WrappedComponent) => {
    return (props) => {
        const value = useContext(AuthContext);
        return <WrappedComponent {...value} {...props} />;
    }
}

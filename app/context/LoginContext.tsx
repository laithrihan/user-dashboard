"use client";
import React, { createContext, useState, useContext, } from 'react';
import { LoginContextProps, LoginProviderProps } from '../types';

//this context is responsiple to change the navbar links by the login state

const LoginContext = createContext<LoginContextProps | undefined>(undefined);
export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = (): LoginContextProps => {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error("useLogin must be used within a LoginProvider");
    }
    return context;
};

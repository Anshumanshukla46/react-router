import { createContext, useContext, useState } from "react";

// createContext function is used to create a context object that can be shared between components. Context provides a way to pass data through the component tree without having to pass props down manually at every level.

// The createContext function returns an object with two properties: Provider and Consumer. The Provider component is used to wrap the components that need to access the context data. The Consumer component is used to access the context data within the wrapped component.

const AuthContext = createContext(null);

export const AuthPorvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = (user) => {
        setUser(user)
    }

    return (
        <AuthContext.Provider
            value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
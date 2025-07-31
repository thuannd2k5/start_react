import { createContext, useState } from 'react';

export const AuthContext = createContext({
    id: "",
    userId: "",
    title: ""
});

export const AuthWrapper = (props) => {
    const [user, setUser] = useState({
        id: "",
        userId: "",
        title: ""
    })
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}
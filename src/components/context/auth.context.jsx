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
    const [isAppLoading, setIsAppLoading] = useState(false);
    return (
        <AuthContext.Provider value={{ user, setUser, isAppLoading, setIsAppLoading }}>
            {props.children}
        </AuthContext.Provider>
    )
}
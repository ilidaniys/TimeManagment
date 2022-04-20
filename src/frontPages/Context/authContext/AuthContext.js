import React, {createContext, useContext, useEffect, useState} from 'react';


const AuthProvider = createContext()


export const useAuth = () => {
    return useContext(AuthProvider)
}


const AuthContext = ({children}) => {

    const [auth, setAuth] = useState(false)

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('TOKEN')
            console.log(token.length)
            if (token.length >= 17) {
            setAuth(true)
            }
        }
        checkAuth()
    }, [])


    function authHandler(status) {
        setAuth(status)
    }

    


    return (
        <AuthProvider.Provider
            value={{auth, authHandler}}
        >
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;
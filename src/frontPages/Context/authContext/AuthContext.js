import React, {createContext, useContext, useEffect, useState} from 'react';


const AuthProvider = createContext()


export const useAuth = () => {
    return useContext(AuthProvider)
}


const AuthContext = ({children}) => {

    const [auth, setAuth] = useState(false)
    const [adminStatus, setAdminStatus] = useState()

    useEffect(() => {
        const checkAuth = () => {
            let token = localStorage.getItem('TOKEN')
            if (!token) token = 0
            console.log(token.length)
            if (token.length >= 17 && token) {
            setAuth(true)
            }
        }
        checkAuth()
    }, [])


    function authHandler(status) {
        setAuth(status)
    }
    function adminStatusHandler(status){
        setAdminStatus(status)
    }


    


    return (
        <AuthProvider.Provider
            value={{auth, authHandler, adminStatus, adminStatusHandler}}
        >
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;
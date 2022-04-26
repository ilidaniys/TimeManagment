import React, {createContext, useContext, useEffect, useState} from 'react';


const AuthProvider = createContext()


export const useAuth = () => {
    return useContext(AuthProvider)
}


const AuthContext = ({children}) => {

    const [auth, setAuth] = useState(false)
    const [adminStatus, setAdminStatus] = useState(false)

    useEffect(() => {
        const checkAuth = () => {
            let token = localStorage.getItem('TOKEN')
            if (!token) token = 0
            if (token.length >= 21 && token) {
                setAuth(true)
            }
        }
        checkAuth()
    }, [auth])


    function authHandler(status) {
        setAuth(status)
    }

    function adminStatusHandler(status) {
        // console.log('hendler status', status)
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
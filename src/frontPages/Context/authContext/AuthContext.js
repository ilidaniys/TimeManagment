import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from "axios";

const AuthProvider = createContext()


export const useAuth = () => {
    return useContext(AuthProvider)
}


const AuthContext = ({children}) => {

    const [auth, setAuth] = useState(false)

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('token')
            console.log(token)
            if (token) {
            setAuth(true)
            }
        }
        //     axios
        //         .get('http://localhost:5000')
        //         .then( res => {
        //             setAuth(res)
        //         })
        //         .catch()
        // }
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
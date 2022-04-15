import React, {createContext, useContext, useState} from 'react';

const AuthProvider = createContext()


export const useAuth = () => {
    return useContext(AuthProvider)
}



const AuthContext = ({children}) => {

    const [auth, setAuth] = useState(true)

    function authhandler (status) {
        setAuth(status)
    }


    return (
        <AuthProvider.Provider
            value={{auth, authhandler}}
        >
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;
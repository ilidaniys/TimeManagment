import React, {createContext, useContext, useState} from 'react';

const AuthProvider = createContext()


export const useAuth = () => {
    return useContext(AuthProvider)
}



const AuthContext = ({children}) => {

    const [auth, setAuth] = useState(false)

    return (
        <AuthProvider.Provider
            value={auth}
        >
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;
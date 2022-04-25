import React, {createContext, useContext} from 'react';


const ProfileProvider = createContext()

export const useProfile = () => {
    return useContext(ProfileProvider)
}

const ProfileContext = ({children}) => {



    return (
        <ProfileProvider.Provider value={}>
            {children}
        </ProfileProvider.Provider>
    );
};

export default ProfileContext;
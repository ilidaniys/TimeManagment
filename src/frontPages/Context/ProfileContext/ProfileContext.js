import React, {createContext, useContext, useState} from 'react';
import {useParams} from "react-router-dom";
import {authFetch} from "../authContext/createAuthProvider";
import {SecondToDate} from "../../component/CounterLogic/CounterFunction";


const ProfileProvider = createContext()

export const useProfile = () => {
    return useContext(ProfileProvider)
}

const ProfileContext = ({children}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [spendTime, setSpendTime] = useState(0)
    const [sessions, setSessions] = useState('')


    const user = async (url) => {

        await authFetch(url, {
            method: 'GET',
        }, 'get')
            .then(res => {
                // console.log('profile data', res.data)
                setName(res.data.name)
                setEmail(res.data.email)
                setSpendTime(SecondToDate(res.data.allTime))
                setSessions(res.data.sessions)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <ProfileProvider.Provider value={{
            name,
            email,
            spendTime,
            sessions,
            user
        }}>
            {children}
        </ProfileProvider.Provider>
    );
};

export default ProfileContext;
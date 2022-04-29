import React, {createContext, useContext, useState} from 'react';
import {SecondToDate} from "../../component/CounterLogic/CounterFunction";
import moment from "moment";
import SessionCard from "../../component/Session/SessionCard";
import {authFetch} from "../../../utility/authFetch";


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
    const renderCards = () => {
        // console.log('sessions', sessions)
        if (sessions) {
            return sessions.session.map(({startTime, endTime}, index) => {
                const startDateTime = new moment(startTime)
                const startDate = startDateTime.format('MMMM Do YYYY, h:mm:ss a')
                if (endTime !== "0") {
                    const endDateTime = new moment(endTime)
                    const endDate = endDateTime.format('MMMM Do YYYY, h:mm:ss a')
                    const counter = endDateTime - startDateTime
                    const time = SecondToDate(counter)
                    return (
                        <SessionCard
                            key={index}
                            startDate={startDate}
                            endDate={endDate}
                            time={time}
                        />)
                } else {
                    const endDate = 'Not finished yet'
                    const time = 'End session pls...'
                    return (
                        <SessionCard
                            key={index}
                            startDate={startDate}
                            endDate={endDate}
                            time={time}
                        />)
                }
            })
        }
        return null
    }

    return (
        <ProfileProvider.Provider value={{
            name,
            email,
            spendTime,
            sessions,
            user,
            renderCards
        }}>
            {children}
        </ProfileProvider.Provider>
    );
};

export default ProfileContext;
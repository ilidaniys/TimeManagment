import React, {createContext, useContext, useEffect, useState} from 'react';
import moment from "moment";
import {SecondToDate} from "../../component/CounterLogic/CounterFunction";
import axios from "axios";
import {authFetch, login} from "../authContext/createAuthProvider";


const CounterProvider = createContext()

export const useCounter = () => {
    return useContext(CounterProvider)
}

const CounterContext = ({children}) => {

    const [startCounter, setStartCounter] = useState('')
    const [currentCounter, setCurrentCounter] = useState('00:00:00')
    const [endCounter, setEndCounter] = useState('')

    const startCounterHandler = async () => {
        const startData = moment().toDate()
        console.log('start', startData)
        await authFetch('http://localhost:5000/api/startTime', {
            method: 'POST',
        }, 'post', {startData})
            .then(r => console.log(r))
            .catch(e => console.log(e))
        setStartCounter(startData)
    }
    const endCounterHandler = async () => {
        const endData = moment().toDate()
        await authFetch('http://localhost:5000/api/endTime', {
            method: 'POST',
        }, 'post', {endData})
            .then(r => console.log(r))
            .catch(e => console.log(e))
        console.log('end', endData)
        setStartCounter('')
        setEndCounter(endData)
    }


    useEffect(() => {

        const interval = setInterval(() => {
            if (startCounter === '') {
                clearInterval(interval)
                return
            }
            const data = moment().toDate()
            const counter = data - startCounter
            const time = SecondToDate(counter)

            console.log(time)
            console.log(counter)
            setCurrentCounter(time)
        }, 1000)

        return () => clearInterval(interval)
    }, [setCurrentCounter, startCounter])


    return (
        <CounterProvider.Provider value={{
            currentCounter,
            startCounter,
            startCounterHandler,
            endCounterHandler
        }}>
            {children}
        </CounterProvider.Provider>
    );
};

export default CounterContext;
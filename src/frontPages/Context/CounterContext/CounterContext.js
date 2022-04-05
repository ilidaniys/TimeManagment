import React, {createContext, useContext, useEffect, useState} from 'react';
import moment from "moment";
import {SecondToDate} from "../../component/CounterLogic/CounterFunction";


const CounterProvider = createContext()

export const useCounter = () => {
    return useContext(CounterProvider)
}

const CounterContext = ({children}) => {

    const [startCounter, setStartCounter] = useState('')
    const [currentCounter, setCurrentCounter] = useState('00:00:00')
    const [endCounter, setEndCounter] = useState('')

    const startCounterHandler = () => {
        const startData = moment().toDate()
        console.log('start', startData)
        setStartCounter(startData)
    }
    const endCounterHandler = () => {
        const endData = moment().toDate()
        setStartCounter('')
        console.log('end', endData)
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
            currentCounter: currentCounter,
            startCounter: startCounter,
            startCounterHandler,
            endCounterHandler
        }}>
            {children}
        </CounterProvider.Provider>
    );
};

export default CounterContext;
import React, {createContext, useEffect, useState} from 'react';
import styled from 'styled-components'
import MainButton from "../component/MainButton";
// import DataCounter from "../component/DataCounter";
import moment from "moment";
import {SecondToDate} from "../component/CounterLogic/CounterFunction";

// const date = new Date(counter).toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
// const date2 = new Date(counter).getDate() - 1

const HomeWrapper = styled.main`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`
const HomeConteiner = styled.div`
  display: grid;
  box-sizing: border-box;
  z-index: 1;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 5rem 0;
  width: 100%;
  //max-height: 20rem;
  border: .1rem solid #B9BCD0;
  padding: 2rem;
  

  > p {
    grid-row: 1;
    grid-column: 1/ span 2;
    text-align: center;
    font-size: 8rem;
  }
`

export const StartDateContext = createContext()

const Home = () => {

    const [startCounter, setStartCounter] = useState('')
    const [currentCounter, setCurrentCounter] = useState('00:00:00')
    const [endCounter, setEndCounter] = useState('')

    const startCounterHandler = () => {
        const startData = moment().toDate()
        console.log('start', startData)
        setStartCounter(startData)
    }
    const endCounterhandler = () => {
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



    const [buttonStatus, setButtonStatus] = useState(true);
    const buttonChanger = () => setButtonStatus(!buttonStatus)

    return (
        <HomeWrapper>
            <HomeConteiner>
                <p>Your time: {`${currentCounter}`}</p>

                {(startCounter === '')
                    ? <MainButton
                        className={'start'}
                        buttonHandler={buttonChanger}
                        Counterscript={startCounterHandler}>
                        Start</MainButton>
                    : <MainButton
                        className={'stop'}
                        buttonHandler={buttonChanger}
                        Counterscript={endCounterhandler}
                    >
                        End</MainButton>
                }
            </HomeConteiner>
        </HomeWrapper>
    );
};

export default Home;
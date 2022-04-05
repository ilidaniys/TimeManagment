import React, {createContext, useEffect, useState} from 'react';
import styled from 'styled-components'
import MainButton from "../component/MainButton";
import DataCounter from "../component/DataCounter";
import moment from "moment";

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
  z-index: 1;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  margin-top: 10rem;
  width: 100%;
  max-height: 20rem;
  border: .1rem solid #B9BCD0;

  > p {
    //width: 20%;
    gridRow: 1;
    gridColumn: 1/ span 2;
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


            let sec_num = parseInt(counter, 10); // don't forget the second param
            let hours = Math.floor(sec_num / 3600000);
            let minutes = Math.floor((sec_num - (hours * 3600000)) / 60000);
            let seconds = (sec_num - (hours * 3600000) - (minutes * 60000)).toString().slice(0, -3);

            if (hours < 10) {
                hours = "0" + hours;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            const time = (`${hours}:${minutes}:${seconds}`).toString();

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
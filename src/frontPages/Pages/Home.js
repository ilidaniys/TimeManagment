import React from 'react';
import styled from 'styled-components'
import MainButton from "../component/MainButton";
import {useCounter} from "../Context/CounterContext/CounterContext";

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
    user-select: none;
  }
`


const Home = () => {
    const counter = useCounter()


    return (
        <HomeWrapper>
            <HomeConteiner>
                <p>Your time: {`${counter.currentCounter}`}</p>

                {(counter.startCounter === '')
                    ? <MainButton
                        className={'start'}
                        Counterscript={counter.startCounterHandler}
                    >
                        Start</MainButton>
                    : <MainButton
                        className={'stop'}
                        Counterscript={counter.endCounterHandler}
                    >
                        End</MainButton>
                }
            </HomeConteiner>
        </HomeWrapper>
    );
};

export default Home;
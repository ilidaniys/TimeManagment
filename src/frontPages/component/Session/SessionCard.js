import React from 'react';
import styled from "styled-components";
import {SecondToDate} from "../CounterLogic/CounterFunction";
import moment from "moment";
import { useSelector} from "react-redux";

const SessionCardWrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  //max-width: 40rem;
  width: 100%;
  height: auto;
  padding: 1rem;
  gap: .5rem;
  background: var(--gray-0);
  border-radius: .24rem;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-items: start;

  > h1 {
    box-sizing: border-box;
    font-size: 1.5rem;
  }

  > p {
    color: var(--gray-8);
    font-size: 1.3rem;
  }
`


const SessionCard = () => {
    const sessions = useSelector(state => state.profileReducer.sessions)

    const renderCards = () => {
        console.log('sessions', sessions)
        if (sessions) {
            return sessions?.session?.map(({startTime, endTime}, index) => {
                const startDateTime = new moment(startTime)
                const startDate = startDateTime.format('MMMM Do YYYY, h:mm:ss a')
                if (endTime !== "0") {
                    const endDateTime = new moment(endTime)
                    const endDate = endDateTime.format('MMMM Do YYYY, h:mm:ss a')
                    const counter = endDateTime - startDateTime
                    const time = SecondToDate(counter)
                    return (
                        <SessionCardWrapper>
                            <h1>Start of work:</h1>
                            <p>{startDate}</p>
                            <h1>End of work:</h1>
                            <p>{endDate}</p>
                            <h1> Duration of session:</h1>
                            <p> {time}</p>
                        </SessionCardWrapper>)
                } else {
                    const endDate = 'Not finished yet'
                    const time = 'End session pls...'
                    return (
                        <SessionCardWrapper>
                            <h1>Start of work:</h1>
                            <p>{startDate}</p>
                            <h1>End of work:</h1>
                            <p>{endDate}</p>
                            <h1> Duration of session:</h1>
                            <p> {time}</p>
                        </SessionCardWrapper>)
                }
            })
        }
        return null
    }

    return (
        <>
            {renderCards()}
        </>
    );
};

export default SessionCard;
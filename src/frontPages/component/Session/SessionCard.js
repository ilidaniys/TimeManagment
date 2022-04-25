import React from 'react';
import styled from "styled-components";


const SessionCardWrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  max-width: 50rem;
  width: auto;
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
    font-size: 1.5rem;
  }
`


const SessionCard = ({startDate, endDate, time}) => {
    return (
        <SessionCardWrapper>
            <h1>Start of work:</h1>
            <p>{startDate}</p>
            <h1 >End of work:</h1>
            <p>{endDate}</p>
            <h1 > Duration of session:</h1>
            <p> {time}</p>
        </SessionCardWrapper>
    );
};

export default SessionCard;
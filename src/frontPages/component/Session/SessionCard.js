import React from 'react';
import styled from "styled-components";
import moment from "moment";

const SessionCardWrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 35rem;
  height: auto;
  border: .2rem solid #463F3A;
  box-shadow: .2rem .2rem 1rem .1rem #463F3A;
  > h1 {
    box-sizing: border-box;
    font-size: 1.5rem;
    border-bottom: .1rem solid #463F3A;
  }
  > p {
    margin-top: auto;
    font-size: 1.5rem;
    border-bottom: .1rem solid #463F3A;
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
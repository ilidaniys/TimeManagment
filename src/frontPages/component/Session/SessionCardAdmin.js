import React from 'react';
import styled from "styled-components";
import moment from "moment";

const SessionCardWrapper = styled.div`

  width: 20rem;
  height: auto;
  border: .1rem solid #463F3A;
  
  > h1 {
    
  }
`


const params = {
    userName: 'Test',
    userEmail: 'test@mail.com',
    allTime: '30:20:10'
}

const SessionCardAdmin = () => {
    return (
        <SessionCardWrapper>
            <h1> {params.userName} </h1>
            <h2>{params.userEmail}</h2>
            <h3>{params.allTime}</h3>
        </SessionCardWrapper>
    );
};

export default SessionCardAdmin;
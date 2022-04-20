import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {authFetch} from "../../Context/authContext/createAuthProvider";

const UserCardWrapper = styled.div`
  box-sizing: border-box;
  width: 35rem;
  height: auto;
  padding: 1rem;
  background: #eeede5;
  border-radius: .24rem;
  cursor: pointer;
  user-select: none;
  
  > a {
    text-decoration: none;
    color: #463F3A;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    > h1 {
      box-sizing: border-box;
      font-size: 1.5rem;
    }

    > p {
      margin-top: auto;
      font-size: 1.5rem;
    }
  }
`


const UserCard = ({userName, userEmail, time, session, id}) => {
    const userProfileId = () => {
        authFetch(`http://localhost:5000/api/adminList/profile${id}`, {
            method: 'GET'
        }, 'get')
            .then(res => console.log(res.data))
            .catch(e => console.log(e))
    }

    return (
        <UserCardWrapper>
            <NavLink to={`/profile/${id}`} onClick={() => userProfileId()}>
                <h1>User Name:</h1>
                <p>{userName}</p>
                <h1>User email:</h1>
                <p>{userEmail}</p>
                <h1> Duration of session:</h1>
                <p> {time}</p>
                <h1> Quantity of session:</h1>
                <p>{session}</p>
            </NavLink>
        </UserCardWrapper>
    );
};

export default UserCard;

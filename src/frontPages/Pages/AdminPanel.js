import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import UserCard from "../component/Session/UserCard";
import {authFetch} from "../Context/authContext/createAuthProvider";
import {SecondToDate} from "../component/CounterLogic/CounterFunction";


const AdminPanelWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  margin: 1rem 4rem;


  >p{
    color: var(--gray-0);
    font-size: 2.2rem;
    font-weight: 600;
  }
  > div {
    //margin-left: 2rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
  }
`

const AdminPanel = () => {

    const [usersList, setUsersList] = useState('')

    useEffect(() => {
      const userList = async () => {
         await authFetch('http://localhost:5000/api/adminList', {
              method: 'GET'
          }, 'get')
              .then(res => {
                  console.log(res.data)
                  setUsersList(res.data)
              })
              .catch(e => console.log(e))
      }
        userList()
    }, [])

    const renderUser = () => {
        if (usersList){
            return usersList.map(({name, email, allTime, sessions, _id}, index) => {
                const quantitySession = sessions.session.length
                const spendTime = SecondToDate(allTime)
                return (
                    <UserCard
                        key={index}
                        id={_id}
                        userName={name}
                        userEmail={email}
                        time={spendTime}
                        session={quantitySession}
                    />
                )
            })
        }
        return null
    }


    return (
        <AdminPanelWrapper>
            <p>All users:</p>
            <div>{renderUser()}</div>
        </AdminPanelWrapper>
    );
};

export default AdminPanel;
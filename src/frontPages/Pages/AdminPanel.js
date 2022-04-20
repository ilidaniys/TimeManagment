import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import UserCard from "../component/Session/UserCard";
import {authFetch} from "../Context/authContext/createAuthProvider";
import {SecondToDate} from "../component/CounterLogic/CounterFunction";


const AdminPanelWrapper = styled.div`
  width: 100%;

  padding: 1rem 0;
  margin: 1rem 0;
  font-size: 2.2rem;
  font-weight: 600;

  > div {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
  }
`

const userDate = [
    {
        id: 1,
        userName: 'Test',
        userEmail: 'test@mail.com',
        allTime: '30:20:10',
        session: [
            {
                startDate: 10,
                endDate: 5,
            },
            {
                startDate: 200000,
                endDate: 1000,
            },
        ]
    },
    {
        id: 2,
        userName: 'Test',
        userEmail: 'test@mail.com',
        allTime: '30:20:10',
        session: [
            {
                startDate: 10,
                endDate: 5,
            },
            {
                startDate: 200000,
                endDate: 1000,
            },
        ]
    },
    {
        id: 3,
        userName: 'Test',
        userEmail: 'test@mail.com',
        allTime: '30:20:10',
        session: [
            {
                startDate: 10,
                endDate: 5,
            },
            {
                startDate: 200000,
                endDate: 1000,
            },
        ]
    },
]


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
            All users:
            <div>{renderUser()}</div>
        </AdminPanelWrapper>
    );
};

export default AdminPanel;
import React from 'react';
import styled from "styled-components";
import UserCard from "../component/Session/UserCard";


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

    const renderUser = () => {
        return userDate.map(({userName, userEmail, allTime, session, id}, index) => {
            const quantitySession = session.length
            return (
                <UserCard
                    key={index}
                    id={id}
                    userName={userName}
                    userEmail={userEmail}
                    time={allTime}
                    session={quantitySession}
                />
            )
        })
    }


    return (
        <AdminPanelWrapper>
            All users:
            <div>{renderUser()}</div>
        </AdminPanelWrapper>
    );
};

export default AdminPanel;
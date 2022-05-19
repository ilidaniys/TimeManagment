import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import UserCard from "../component/Session/UserCard";
import {SecondToDate} from "../component/CounterLogic/CounterFunction";
import {useParams} from "react-router";
import {authFetch} from "../../utility/authFetch";
import {URLI} from "../../App";


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
    const { id } = useParams()
    console.log('id', id)
    useEffect(() => {
      const userList = async () => {
         await authFetch(`${URLI}/api/adminList`, {
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
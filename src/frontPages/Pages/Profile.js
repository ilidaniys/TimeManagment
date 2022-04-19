import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import SessionCard from "../component/Session/SessionCard";
import moment from "moment";
import {SecondToDate} from "../component/CounterLogic/CounterFunction";
import axios from "axios";
import {authFetch} from "../Context/authContext/createAuthProvider";


const ProfileWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
  margin-bottom: 3rem;
  font-weight: 600;
  font-size: 2.3rem;
  color: #463F3A;

  > .wrapperCard {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

`
const ProfileInfo = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  font-weight: 600;
  font-size: 2.3rem;
  color: #463F3A;

  > div {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr 1fr;


    > h1 {
      display: flex;
      gap: 1rem;
      font-weight: 500;
      font-size: 2rem;
    }

    > h2 {
      display: flex;
      gap: 1rem;
      font-weight: 500;
      font-size: 2rem;

    }
  }

  > h3 {
    font-weight: 500;
    font-size: 2rem;
  }
`

const Red = styled.p`
  color: #d81159
`

const params = {
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
        {
            startDate: 10,
            endDate: 5,
        },
        {
            startDate: 200000,
            endDate: 1000,
        },
        {
            startDate: 10,
            endDate: 5,
        },
        {
            startDate: 200000,
            endDate: 1000,
        },
        {
            startDate: 10,
            endDate: 5,
        },
        {
            startDate: 200000,
            endDate: 1000,
        },

    ]
}


const Profile = () => {

    const [name, setName]= useState('')
    const [email, setEmail] = useState('')
    const [spendTime, setSpendTime] = useState('')
    const [sessions, setSessions] = useState('')



    useEffect(() => {
        const user = async () => {
           await authFetch('http://localhost:5000/api/profile', {
               method: 'GET',
           }, 'get')
                .then(res => {
                    console.log('profile data', res.data)
                    setName(res.data.name)
                    setEmail(res.data.email)
                    setSpendTime(res.data.allTime)
                    console.log(res.data.sessions)
                    setSessions(res.data.sessions)
                    console.log(sessions)
                })
                .catch ((e) => {
                console.log(e)
            })
        }
        user()
    }, [])


    const renderCards = () => {
        return params.session.map(({startDate, endDate}, index) => {
            const counter = startDate - endDate
            const time = SecondToDate(counter)

            return (
                <SessionCard
                    key={index}
                    startDate={startDate}
                    endDate={endDate}
                    time={time}
                />
            )
        })
    }

    return (
        <ProfileWrapper>
            <ProfileInfo>
                Your contact info:
                <div>
                    <h1>Name:</h1>
                    <Red>{name}</Red>
                    <h2>Email: </h2>
                    <Red>{email}</Red>
                </div>
                <h3>All your spend time for work: <Red>{spendTime}</Red></h3>
            </ProfileInfo>
            Your session:
            <div className={'wrapperCard'}>
                {renderCards()}
            </div>
        </ProfileWrapper>
    );
};

export default Profile;
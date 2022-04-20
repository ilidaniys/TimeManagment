import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import SessionCard from "../component/Session/SessionCard";
import moment from "moment";
import {SecondToDate} from "../component/CounterLogic/CounterFunction";
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

const Profile = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [spendTime, setSpendTime] = useState(0)
    const [sessions, setSessions] = useState('')


    useEffect(() => {
        const user = async () => {
            await authFetch('http://localhost:5000/api/profile', {
                method: 'GET',
            }, 'get')
                .then(res => {
                    // console.log('profile data', res.data)
                    setName(res.data.name)
                    setEmail(res.data.email)
                    setSpendTime(SecondToDate(res.data.allTime))
                    setSessions(res.data.sessions)
                })
                .catch((e) => {
                    console.log(e)
                })
        }

        user()

    }, [])


    const renderCards = () => {
        if (sessions) {
            console.log('sessions', sessions)
            // sessions.session.parse
            return sessions.session.map(({startTime, endTime}, index) => {
                const startDateTime = new moment(startTime)
                const endDateTime = new moment(endTime)
                const startDate = startDateTime.format('MMMM Do YYYY, h:mm:ss a')
                const endDate = endDateTime.format('MMMM Do YYYY, h:mm:ss a')

                const counter = endDateTime - startDateTime

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
        return null
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
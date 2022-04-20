import React, {useEffect, useMemo, useState} from 'react';
import styled from "styled-components";
import SessionCard from "../component/Session/SessionCard";
import moment from "moment";
import {SecondToDate} from "../component/CounterLogic/CounterFunction";
import {authFetch} from "../Context/authContext/createAuthProvider";
import {useParams} from "react-router";


const ProfileWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem;
  padding-bottom: 2rem;
  font-weight: 600;
  font-size: 2.3rem;
  color: var(--gray-0);

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
  color: var(--gray-0);

  > div {
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-template-rows: 1fr 1fr 1fr;

    
    
    > p{
      font-weight: 600;
      font-size: 2.3rem;
    }
  }
  
`

const Profile = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [spendTime, setSpendTime] = useState(0)
    const [sessions, setSessions] = useState('')
    const { id } = useParams()

    useEffect(() => {
        const user = async () => {
            let url = `http://localhost:5000/api/profile`
            console.log('url', url)
            if (id && id !== ''){
                url += `/${id}`
            }
            await authFetch(url, {
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
    }, [id])


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
                Contact info
                <div>
                    <p>Name:</p>
                    <p>{name}</p>
                    <p>Email: </p>
                    <p>{email}</p>
                    <p>All your spend time for work:</p>
                    <p>{spendTime}</p>
                </div>

            </ProfileInfo>
            Your session:
            <div className={'wrapperCard'}>
                {renderCards()}
            </div>
        </ProfileWrapper>
    );
};

export default Profile;
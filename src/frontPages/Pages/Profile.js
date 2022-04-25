import React, {useEffect, useMemo, useState} from 'react';
import styled from "styled-components";
import SessionCard from "../component/Session/SessionCard";
import moment from "moment";
import {SecondToDate} from "../component/CounterLogic/CounterFunction";
import {useProfile} from "../Context/ProfileContext/ProfileContext";
import {useParams} from "react-router-dom";


const ProfileWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 3rem 2rem;
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
  justify-content: space-between;
  
`

const ProfileContactInfo = styled.div`

  display: flex;
  gap: 1rem;
  flex-direction: column;
  font-weight: 600;
  font-size: 2rem;
  color: var(--gray-0);

  > div {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    column-gap: 1rem;


    > p {
      font-weight: 600;
      font-size: 2rem;
    }
  }
`
const ProfileGraph = styled.div`
  box-sizing: border-box;
  border: .1rem solid var(--red-8);
  //width: 50%;
  height: auto;
`




const Profile = () => {

    const ProfileContext = useProfile()
    const {id} = useParams()

    useEffect(() => {
        console.log('id', id)
        let url = `http://localhost:5000/api/profile`
        if (id && id !== '') {
            url += `/${id}`
            console.log('url+id', url)
        }
        ProfileContext.user(url)
    }, [ProfileContext.id])


    const renderCards = () => {
        if (ProfileContext.sessions) {
            return ProfileContext.sessions.session.map(({startTime, endTime}, index) => {
                const startDateTime = new moment(startTime)
                const startDate = startDateTime.format('MMMM Do YYYY, h:mm:ss a')
                if (endTime !== "0") {
                    const endDateTime = new moment(endTime)
                    const endDate = endDateTime.format('MMMM Do YYYY, h:mm:ss a')
                    const counter = endDateTime - startDateTime
                    const time = SecondToDate(counter)
                    return (
                        <SessionCard
                            key={index}
                            startDate={startDate}
                            endDate={endDate}
                            time={time}
                        />)
                } else {
                    const endDate = 'Not finished yet'
                    const time = 'End session pls...'
                    return (
                        <SessionCard
                            key={index}
                            startDate={startDate}
                            endDate={endDate}
                            time={time}
                        />)
                }
            })
        }
        return null
    }


    return (
        <ProfileWrapper>
            <ProfileInfo>
                <ProfileContactInfo>
                    Contact info
                    <div>
                        <p>Name:</p>
                        <p>{ProfileContext.name}</p>
                        <p>Email: </p>
                        <p>{ProfileContext.email}</p>
                        <p>All your spend time for work:</p>
                        <p>{ProfileContext.spendTime}</p>
                    </div>
                </ProfileContactInfo>
                <ProfileGraph>
                    {/*{renderGraph()}*/}
                </ProfileGraph>
            </ProfileInfo>
            Your session:
            <div className={'wrapperCard'}>
                {renderCards()}
            </div>
        </ProfileWrapper>
    );
};

export default Profile;
import React, {useEffect} from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {RenderGraph} from "../component/GraphLogic/Graph";

import {SecondToDate} from "../component/CounterLogic/CounterFunction";
import SessionCard from "../component/Session/SessionCard";
import {useDispatch, useSelector} from "react-redux";
import { getUrlSessionCreator, startGetUserCreator} from "../store/profileReducer/ProfileReducer";
import {URLI} from "../../App";


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
  width: 100%;
  gap: 2rem;
  position: relative;

`
const ProfileContactInfo = styled.div`
  width: 50%;
  position: relative;
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
  width: 50%;
  position: relative;
`

const Profile = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const name = useSelector(state => state.profileReducer.name)
    const email = useSelector(state => state.profileReducer.email)
    const URL = useSelector(state => state.profileReducer.url)
    const spendTime = useSelector(state => state.profileReducer.spendTime)

    useEffect(() => {
        let url = `${URLI}/api/profile`
        console.log('url profile',url)
        if (id && id !== '') {
            url += `/${id}`
            console.log('url+id', url)
        }
        dispatch(getUrlSessionCreator(url))

    }, [dispatch, id])

    useEffect(() =>{
        dispatch(startGetUserCreator())
    }, [URL, dispatch])

    return (
        <ProfileWrapper>
            <ProfileInfo>
                <ProfileContactInfo>
                    Contact info
                    <div>
                        <p>Name:</p>
                        <p>{name}</p>
                        <p>Email: </p>
                        <p>{email}</p>
                        <p>All your spend time for work:</p>
                        <p>{SecondToDate(spendTime) }</p>
                    </div>
                </ProfileContactInfo>
                <ProfileGraph>
                    <RenderGraph/>
                </ProfileGraph>
            </ProfileInfo>
            Your session:
            <div className={'wrapperCard'}>
                <SessionCard/>
            </div>
        </ProfileWrapper>
    );
};

export default Profile;
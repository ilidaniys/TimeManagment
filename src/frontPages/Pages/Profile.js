import React, {useEffect} from 'react';
import styled from "styled-components";
import {useProfile} from "../Context/ProfileContext/ProfileContext";
import {useParams} from "react-router-dom";
import {RenderGraph} from "../component/GraphLogic/Graph";


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
  width: 40%;
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
  border: .1rem solid var(--red-8);
  width: 60%;
  position: relative;
  //height: auto;
`




const Profile = () => {

    const profileContext = useProfile()
    const {id} = useParams()

    useEffect(() => {
        console.log('session list', profileContext.sessions.session)
        console.log('id', id)
        let url = `http://localhost:5000/api/profile`
        if (id && id !== '') {
            url += `/${id}`
            console.log('url+id', url)
        }
        profileContext.user(url)
    }, [id])

    return (
        <ProfileWrapper>
            <ProfileInfo>
                <ProfileContactInfo>
                    Contact info
                    <div>
                        <p>Name:</p>
                        <p>{profileContext.name}</p>
                        <p>Email: </p>
                        <p>{profileContext.email}</p>
                        <p>All your spend time for work:</p>
                        <p>{profileContext.spendTime}</p>
                    </div>
                </ProfileContactInfo>
                <ProfileGraph>
                    <RenderGraph/>
                </ProfileGraph>
            </ProfileInfo>
            Your session:
            <div className={'wrapperCard'}>
                {profileContext.renderCards()}
            </div>
        </ProfileWrapper>
    );
};

export default Profile;
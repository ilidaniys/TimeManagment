import React from 'react';
import styled from "styled-components";
import SessionCard from "../component/Session/SessionCard";
import moment from "moment";


const ProfileWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > .wrapperCard {
    width: 100%;
    display: flex;
    flex-direction: column;
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
            startDate: moment([2021, 0, 1, 0, 4, 1]).toDate(),
            endDate: moment([2021, 0, 1, 0, 3, 2]).toDate(),
        }
    ]
}

const Profile = () => {
    return (
        <ProfileWrapper>
            <ProfileInfo>
                Your contact info:
                <div>
                    <h1>Name:</h1>
                    <Red>{params.userName}</Red>
                    <h2>Email: </h2>
                    <Red>{params.userEmail}</Red>
                </div>
                <h3>All your spend time for work: <Red>{params.allTime}</Red></h3>
            </ProfileInfo>
            <div className={'wrapperCard'}>
                {}
                <SessionCard />
            </div>
        </ProfileWrapper>
    );
};

export default Profile;
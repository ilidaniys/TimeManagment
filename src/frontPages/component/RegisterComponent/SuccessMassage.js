import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";


const SuccessWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  //align-content: center;

  > div {
    padding: 1rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--gray-8);
  }

  > button {
    text-transform: capitalize;
    width: auto;
    box-sizing: border-box;
    padding: 1rem 2rem;
    margin: 1rem 2rem;
    font-size: 2rem;
    font-weight: 600;
    border-radius: 1rem;
    cursor: pointer !important;
    color: var(--gray-8);
    //border: .2rem solid #adeee3;
    background: var(--green-5);
    
    > a{
      text-decoration: none;
      color: inherit;
    }
    
    :hover {
      filter: brightness(0.8);
    }
  }
`

const SuccessMassage = () => {
    return (
        <SuccessWrapper>
            <div>You successfuly registered on website
            </div>
            <button>
                <NavLink to={'/'} >
                    back to main page
                </NavLink>
            </button>
        </SuccessWrapper>
    );
};

export default SuccessMassage;
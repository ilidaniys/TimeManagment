import React from 'react';
import styled from 'styled-components'
import {NavLink} from "react-router-dom";


const LinkWrapper = styled.div`
  align-self: center;
  font-size: 1.4rem;
  color: #463F3A;
  font-weight: var(--font-weight-7);
  > p {
    font-size: 1.3rem;
    font-weight: 800;
  }
  > a {
    //text-decoration: none;
    color: #d81159;
  }
  
  > a:hover{
    color: var(--stop-button-color-60);
    text-decoration: none;
  }
`

const LinkSingup = ({tittle, text, path}) => {
    return (
        <LinkWrapper>
            <p>{tittle}</p>
            <NavLink to={path}>{text}</NavLink>
        </LinkWrapper>
    );
};

export default LinkSingup;
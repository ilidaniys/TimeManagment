import React from 'react';
import styled from 'styled-components'
import {NavLink} from "react-router-dom";


const LinkWrapper = styled.div`
  align-self: center;
  font-size: 1.2rem;
  color: #463F3A;
  font-weight: 600;
  > p {
    
  }
  > a {
    //text-decoration: none;
    color: #d81159;
  }
  
  > a:hover{
    color: var(--stop-button-color-60);
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
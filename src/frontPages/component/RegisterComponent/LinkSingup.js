import React from 'react';
import styled from 'styled-components'


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
    
  }
`

const LinkSingup = () => {
    return (
        <LinkWrapper>
            <p>Already registered?</p>
            <a href="/">Sign In!</a>
        </LinkWrapper>
    );
};

export default LinkSingup;
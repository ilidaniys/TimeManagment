import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  text-align: center;
  padding: 1rem;
  border: none;
  background: none;
  font-size: 1.5rem;
  color: var(--gray-0);
  
  > a {
    text-decoration: none;
    color: inherit;
  }

  > a:hover {
    cursor: pointer;
    color: var(--red-8);
  }
  
  :hover{
    cursor: pointer;
    color: var(--red-8);
  }
`


const MenuButton = (props) => {
    return (
        <Button onClick={props.onclick}>
            {props.children}
        </Button>
    );
};

export default MenuButton;
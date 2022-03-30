import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  text-align: center;
  padding: 1rem;
  border: none;
  background: none;
  font-size: 1.5rem;
  color: var(--button-color);
  cursor: pointer;

  :hover {
   text-decoration: underline; 
  }
`


const MenuButton = (props) => {
    return (
        <Button>
            {props.children}
        </Button>
    );
};

export default MenuButton;
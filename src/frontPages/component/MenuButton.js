import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  text-align: center;
  padding: 1rem;
  border: none;
  background: none;
  font-size: 1.5rem;
  color: var(--button-color);
  
  > a {
    text-decoration: none;
    color: inherit;
  }

  > a:hover {
    cursor: pointer;
    color: var(--stop-button-color);
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
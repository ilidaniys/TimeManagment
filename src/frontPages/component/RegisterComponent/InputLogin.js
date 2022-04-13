import React, {useRef} from 'react';
import styled from 'styled-components'
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const InputWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-top: 1rem;
  width: 80%;
  height: 3rem;
  border-radius: .125rem;

  .Input {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 1rem;
    border: .1rem solid var(--stop-button-color);
    outline: none;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: .125rem;

    ::placeholder {
      color: var(--stop-button-color-60);
    }

    :focus {
      border: .15rem solid var(--stop-button-color);
    }

    :focus::placeholder {
      color: var(--stop-button-color);
    }
  }

  .Text {
    font-size: 1.2rem;
    font-weight: 600;
    left: 1.2rem;
    top: .6rem;
    position: absolute;
    color: #d81159;
    pointer-events: none;
    transition: transform .1s cubic-bezier(.9, 0, .1, 1);

    > .hide {
      display: none;
    }
  }

  .Input:focus ~ .Text {
    transform: translate(-1.2rem, -2.5rem)
  }

  .Input:not(:placeholder-shown) ~ .Text {
    transform: translate(-1.2rem, -2.5rem)
  }

  .instructions {
    display: block;
    font-size: .8rem;
    color: #d81159;

    > .icon {
      margin: 0 .3rem 0 0;
    }
  }

  .offScreen {
    display: none;
  }
`

const InputLogin = ({
                        type,
                        useRef,
                        autoComplete,
                        required,
                        setState,
                        ariaInvalid,
                        ariaDesribedby,
                        onFocus,
                        children
                    }) => {
    return (
        <InputWrapper>

            <input
                type={type}
                className={'Input'}
                placeholder={' '}
                ref={useRef}
                autoComplete={autoComplete}
                required={{required}}
                onChange={(event) => setState(event.target.value)}
                aria-invalid={ariaInvalid}
                aria-describedby={ariaDesribedby}
                onFocus={() => onFocus()}
            />
            <div className={'Text'}>
                {children}
            </div>
        </InputWrapper>
    );
};

export default InputLogin;
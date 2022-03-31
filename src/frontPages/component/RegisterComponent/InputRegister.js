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

    > .valid {
      margin-left: .3rem;
      color: green;
    }

    > .invalid{
      margin-left: .3rem;
    }
    
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
    //margin-top: -2rem;
    //height: 5rem;
    font-size: .8rem;
    //background: rgba( 0, 0, 0, 0.4);
    color: #d81159;
  }

  .offScreen {
    display: none;
  }
`

const InputRegister = ({
                           children,
                           useRef,
                           autoComplete,
                           required,
                           setState,
                           ariaInvalid,
                           ariaDesribedby,
                           onFocus,
                           focus,
                           state,
                           validState
                       }) => {
    return (
        <InputWrapper>

            <input
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
            <p id={ariaDesribedby} className={focus && state && !validState ? 'instructions' : 'offScreen'}>
                <FontAwesomeIcon icon={faInfoCircle}/>
                4 to 24 symbols <br/>
                Only letters!
            </p>
            <div className={'Text'}>
                {children}
                <span className={validState ? 'valid' : 'hide'}><FontAwesomeIcon icon={faCheck}/></span>
                <span className={validState || !state ? 'hide' : 'invalid'}><FontAwesomeIcon icon={faTimes}/></span>
            </div>

        </InputWrapper>
    );
};

export default InputRegister;
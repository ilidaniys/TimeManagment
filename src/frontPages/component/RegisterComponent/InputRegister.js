import React from 'react';
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
    cursor: text;

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

    > .invalid {
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
    margin-top: .1rem;
    //margin-left: .1rem;
    display: block;
    font-size: 1rem;
    color: var(--red-8);
    line-height: var(--font-lineheight-0);
    > .icon{
      font-size: 1rem;
      width: 1rem;
      margin: .2rem .3rem 0 0;
    }
  }

  .offScreen {
    display: none;
  }
`

const InputRegister = ({
                           type,
                           children,
                           useRef,
                           required,
                           setState,
                           ariaInvalid,
                           ariaDesribedby,
                           onFocus,
                           focus,
                           state,
                           additionalState,
                           validState,
                           minnumber,
                           text,
                       }) => {
    return (
        <InputWrapper>

            <input
                type={type}
                className={'Input'}
                placeholder={' '}
                ref={useRef}
                autoComplete={'off'}
                required={{required}}
                onChange={(event) => setState(event.target.value)}
                aria-invalid={ariaInvalid}
                aria-describedby={ariaDesribedby}
                onFocus={() => onFocus()}
            />
            <p
                id={ariaDesribedby}
                className={(focus && (state !== undefined ? state : true) && !validState) ? 'instructions' : 'offScreen'}
                >
                <FontAwesomeIcon icon={faInfoCircle} className={'icon'}/>
                {`${minnumber} and ${text}`}

            </p>
            <div className={'Text'}>
                {children}
                <span className={validState && (additionalState !== undefined ? additionalState : true) ? 'valid' : 'hide'}>
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className={validState || !additionalState ? 'hide' : 'invalid'}>
                    <FontAwesomeIcon icon={faTimes}/>
                </span>
            </div>

        </InputWrapper>
    );
};

export default InputRegister;
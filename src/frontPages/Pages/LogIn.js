import React, {useEffect, useState} from 'react';
import InputRegister from "../component/RegisterComponent/InputRegister";
import LinkSingup from "../component/RegisterComponent/LinkSingup";
import SubmitRegister from "../component/RegisterComponent/SubmitRegister";
import {
    RegisnterWrapper,
    RegisterConteiner,
    SubmitBlock
} from "../component/RegisterComponent/RegisterWrapper/Register Wrapper";
import {userRegex, passwordRegex, emailRegex} from './Register'


const LogIn = () => {


    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    useEffect(() => {
        const result = userRegex.test(user)
        setValidName(result)
    }, [user])

    useEffect(() => {
        const result = emailRegex.test(email)
        setValidEmail(result)
    }, [email])

    useEffect(() => {
        const result = passwordRegex.test(pwd)
        setValidPwd(result)
    }, [email])


    return (
        <RegisnterWrapper height={'25rem'}>
            <RegisterConteiner>
                <InputRegister
                    type={'text'}
                    autoComplete={'off'}
                    required={'true'}
                    setState={setUser}
                    ariaInvalid={validName ? 'false' : 'true'}
                    ariaDesribedby={'uidnote'}
                    onFocus={() => setUserFocus(true)}
                    focus={userFocus}
                    state={user}
                    additionalState={user}
                    validState={validName}
                    minnumber={'4 to 24 symbols'}
                    text={'Only letters'}
                >
                    User Name
                </InputRegister>
                <InputRegister
                    type={'text'}
                    autoComplete={'off'}
                    required={'true'}
                    setState={setEmail}
                    ariaInvalid={validEmail ? 'false' : 'true'}
                    ariaDesribedby={'eidnote'}
                    onFocus={() => setEmailFocus(true)}
                    focus={emailFocus}
                    state={email}
                    validState={validEmail}
                    minnumber={''}
                    text={'only email requare!'}
                    additionalState={email}
                >
                    Email
                </InputRegister>
                <InputRegister
                    type={'password'}
                    autoComplete={'off'}
                    required={'true'}
                    setState={setPwd}
                    ariaInvalid={validPwd ? 'false' : 'true'}
                    ariaDesribedby={'pidnote'}
                    onFocus={() => setPwdFocus(true)}
                    focus={pwdFocus}
                    state={pwd}
                    additionalState={pwd}
                    validState={validPwd}
                    minnumber={'8 to 24 symbols'}
                    text={'You should use at least one Capital letter, one symbols and one numbers'}
                >
                    Password
                </InputRegister>
                <SubmitBlock>
                    <LinkSingup
                        tittle={'Not yet registered??'}
                        text={'Register!'}
                    />
                    <SubmitRegister/>
                </SubmitBlock>
            </RegisterConteiner>
        </RegisnterWrapper>
    );
};

export default LogIn;
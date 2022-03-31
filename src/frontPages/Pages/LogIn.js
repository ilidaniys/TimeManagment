import React from 'react';
import {RegisnterWrapper, RegisterConteiner, SubmitBlock} from "./Register";
import InputRegister from "../component/RegisterComponent/InputRegister";
import LinkSingup from "../component/RegisterComponent/LinkSingup";
import SubmitRegister from "../component/RegisterComponent/SubmitRegister";

const LogIn = () => {
    return (
        <RegisnterWrapper height={'25rem'}>
            <RegisterConteiner>
                <InputRegister>
                    User Name
                </InputRegister>
                <InputRegister>
                    Email
                </InputRegister>
                <InputRegister>
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
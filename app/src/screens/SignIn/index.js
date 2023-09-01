import React from "react";
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles'

import SignInput from "../../components/SignInput";

import GymLogo from '../../assets/gym.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'

export default () => {
    return (
        <Container>
            <GymLogo width="100%" height="160"/>
            
            <InputArea>
                <SignInput IconSvg={EmailIcon}/>
                <SignInput IconSvg={LockIcon}/>
                

                <CustomButton>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>

            </InputArea>

            <SignMessageButton>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
};
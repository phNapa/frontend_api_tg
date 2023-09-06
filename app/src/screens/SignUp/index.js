import React, { useState } from "react";
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
import PersonIcon from '../../assets/person.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [passwordField2, setPasswordField2] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    
    const handleComparePasswords = () => {
        try {
            if (passwordField === passwordField2) {
              setError('');
              setShowError(false);
            } else {
              setError('As senhas não coincidem. Tente novamente.');
              setShowError(true);
            }
          } catch (error) {
            console.error('Ocorreu um erro:', error);
          }
    };

    const handleSignClick = () => {
        
    };

    const handlePress = () => {
        handleComparePasswords();
        handleSignClick();
      };

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    };

    return (
        <Container>
            <GymLogo width="100%" height="160"/>
            
            <InputArea>

                <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Confirme sua senha"
                    value={passwordField2}
                    onChangeText={t=>setPasswordField2(t)}
                    password={true}
                />
                

                <CustomButton onPress={handlePress}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                    
                </CustomButton>
                {showError && <Text style={{ color: 'red' }}>{error}</Text>}
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
};
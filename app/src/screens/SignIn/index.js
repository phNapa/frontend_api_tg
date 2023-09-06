import React, { useState, useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../../contexts/UserContext";
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles'

import Api from '../../Api';

import SignInput from "../../components/SignInput";

import GymLogo from '../../assets/gym.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'

export default () => {
    const { dispatch: userDispatch} = useContext(UserContext);
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);

    const handleSignClick = async () => {
        try {
            if(emailField != '' && passwordField != ''){
                let json = await Api.signIn(emailField,passwordField);
                console.log(json);
                if(json.error){
                    setError("Email e/ou senha incorreta!");
                    setShowError(true);
                } else{
                    await AsyncStorage.setItem('token',json);
                    
                    navigation.reset({
                        routes:[{name:'MainTab'}]
                    });

                }
            } else{
                setError("Preencha todos os campos!");
                setShowError(true);
            }
        } catch (error) {
        console.error('Ocorreu um erro:', error);
        }
    };

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
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
                

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
                {showError && <Text style={{ color: 'red' }}>{error}</Text>}
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
};
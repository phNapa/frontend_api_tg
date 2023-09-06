import React, { useState } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
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

import Api from '../../Api';

import SignInput from "../../components/SignInput";

import GymLogo from '../../assets/gym.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [passwordField2, setPasswordField2] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    
    const [isProfessor, setIsProfessor] = useState(false);

    const toggleProfessor = () => {
        setIsProfessor(!isProfessor);
    };

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

    const handleSignClick = async () => {
        if(emailField != '' && passwordField != ''){
            let res = await Api.signUp(emailField, passwordField);
            
            if(res.insertIdCredentials){
                alert("Conta criada com sucesso, para finalizar preencha alguns detalhes!");
                if(isProfessor == true){
                    navigation.reset({
                        routes: [{name: 'CreateProfessor'}]
                    });
                } else{
                    navigation.reset({
                        routes: [{name: 'CreateAluno'}]
                    });
                }
                
            } else if (res.error){
                setError("Email ou senha invalida!");
                setShowError(true);
            }
        } else {
            setError("Preencha todos os campos!");
            setShowError(true);
        }
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

                <Text style={{ color: '#FF8C78', fontSize: 18}}>Você é professor?</Text>
                    <TouchableOpacity onPress={toggleProfessor}>
                        <View style={{
                            flexDirection: 'row', 
                            alignItems: 'center' }}>
                        <View
                            style={{
                            width: 30,
                            height: 30,
                            borderWidth: 1,
                            borderRadius:5,
                            borderColor: '#FF8C78',
                            marginTop: 10,
                            marginRight: 10,
                            marginBottom: 25,
                            backgroundColor: isProfessor ? '#FF8C78' : '#FFEFEC',
                            }}
                        />
                        <Text style={{ color: '#FF8C78', marginBottom: 25, fontSize: 18, marginTop: 10 }}>{isProfessor ? 'Sim' : 'Não'}</Text>
                        </View>
                    </TouchableOpacity>

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
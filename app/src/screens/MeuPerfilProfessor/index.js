import React from 'react';
import { Text } from 'react-native';
import { ButtonTitle, Buttons, Container } from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
    const navigation = useNavigation();
    
    
    const handleLogoutClick = async () => {
        await AsyncStorage.setItem('token', "invalid");
        navigation.reset({
            
            routes: [{name: 'SignIn'}]
        });
    }

    return(
        <Container>
                <Text>Meu Perfil Professor</Text>
                <Buttons onPress={handleLogoutClick}>
                    <ButtonTitle>Sair</ButtonTitle>
                </Buttons>
        </Container>
    );
};
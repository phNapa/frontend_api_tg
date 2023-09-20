import React from 'react';
import { Text, Button } from 'react-native';
import { Container } from './styles';
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
                <Text>Profile</Text>
                <Button title="Sair" onPress={handleLogoutClick}/>
        </Container>
    );
};
import React from 'react';
import { Text, Button } from 'react-native';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
    const navigation = useNavigation();
    return(
        <Container>
                <Text>Acompanhamento</Text>
        </Container>
    );
};
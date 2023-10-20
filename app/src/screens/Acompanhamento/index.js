import React from 'react';
import { Text, Button } from 'react-native';
import { Container } from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { alunoID } = route.params;
    return(
        <Container>
                <Text>Acompanhamento</Text>
                <Text>{alunoID}</Text>
        </Container>
    );
};
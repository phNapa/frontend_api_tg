import React ,{ useEffect } from "react";
import { Container, LoadingIcon } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

import GymLogo from '../../assets/gym.svg'

export default () => {

    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token){
                // navigation.reset({
                //     routes:[{name:'MainTab'}]
                // });
                navigation.navigate('SignIn');
            } else{
                navigation.navigate('SignIn');
            }
        }

        checkToken();
    }, []);

    return (
        <Container>
            <GymLogo width="100%" height="160"/>
            <LoadingIcon size="large" color="#000000"/>
        </Container>
    );
};
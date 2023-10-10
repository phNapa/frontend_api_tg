import React from 'react';
import { Text, Button, TouchableOpacity, Linking } from 'react-native';
import { ButtonTitle, Buttons, Container, Middle } from './styles';
import { useNavigation } from '@react-navigation/native';
import WhatsAppIcon from '../../assets/whatsapp-svg';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
    const navigation = useNavigation();
    const contato = "19996530557";
    
    const handleLogoutClick = async () => {
        await AsyncStorage.setItem('token', "invalid");
        navigation.reset({
            
            routes: [{name: 'SignIn'}]
        });
    }

    const handleAcompanhamentoClick = async () => {
        navigation.navigate('Acompanhamento', {});
    }

    const handleWhatsAppClick = async () => {
        if (contato.length != 11) {
            alert('Número invalido');
        return;
      }
      let url =
        'whatsapp://send?text=' + "oi" + '&phone=55' + contato;
      Linking.openURL(url)
        .then((data) => {
          console.log('WhatsApp Opened');
        })
        .catch(() => {
          alert('WhatsApp não está instalado!');
        });
    }

    return(
        <Container>
                <Text>Meu Perfil Professor</Text>
                <TouchableOpacity onPress={handleWhatsAppClick} >
                    <Middle>
                        <WhatsAppIcon width="30" height="30"/>
                    </Middle>
                </TouchableOpacity>
                <Buttons onPress={handleAcompanhamentoClick}>
                    <ButtonTitle>Acompanhamento</ButtonTitle>
                </Buttons>
                <Buttons onPress={handleLogoutClick}>
                    <ButtonTitle>Sair</ButtonTitle>
                </Buttons>
        </Container>
    );
};
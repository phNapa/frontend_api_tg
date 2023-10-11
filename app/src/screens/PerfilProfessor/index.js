import React, { useState } from 'react';
import { Text, Button, Linking, TouchableOpacity } from 'react-native';
import { Container, Area, Area2, HeaderTitle, ReqInput, Middle } from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import WhatsAppIcon from '../../assets/whatsapp-svg';
import { useRoute } from '@react-navigation/native';
import Api from '../../Api';
import Modal from 'react-native-modal';

export default () => {
    const route = useRoute();
    const { name, notaMedia, contato, cidade, especialidade, experiencia, certificacoes, dispoHorario, professorID, descricao } = route.params;
    const [isModalVisible, setModalVisible] = useState(false);
    const [textoRequisicao, setTextoRequisicao] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(true);

    
    const handleRequisição = async () => {
        const alunoID = await AsyncStorage.getItem('alunoID');
        let res = await Api.createRequisicao(alunoID, professorID, textoRequisicao);

        if(res.insertId){
            alert("Requisição enviada com sucesso!");
            
        } else {
            setError("Algo deu errado!");
            setShowError(true);
        }
        setModalVisible(false);
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
        })
        .catch(() => {
          alert('WhatsApp não está instalado!');
        });
    }

    return (
        <Container>
            <Text>Perfil Professor</Text>
            <TouchableOpacity onPress={handleWhatsAppClick} >
                    <Middle>
                        <WhatsAppIcon width="30" height="30"/>
                    </Middle>
            </TouchableOpacity>
            <Button color="#007BFF" title="Requisição" onPress={() => setModalVisible(true)} />

            <Modal color="#F9F9F9" width="90%" isVisible={isModalVisible}>
                <Area>
                    <HeaderTitle>Descreva a sua necessidade:</HeaderTitle>
                    <Area2>
                        <ReqInput
                            placeholder="Digite sua requisição"
                            onChangeText={(text) => setTextoRequisicao(text)}
                            multiline={true}
                        />
                    </Area2>
                    
                    <Button color="#007BFF" title="Finalizar e Enviar" onPress={handleRequisição} />
                    {showError && <Text style={{ color: 'red' }}>{error}</Text>}
                    <Button color="#007BFF" title="Cancelar" onPress={() => setModalVisible(false)} />
                    <Text/>
                </Area>
            </Modal>
        </Container>
    );
};
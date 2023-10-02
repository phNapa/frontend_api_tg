import React, { useState } from 'react';
import { Text, Button, View, TextInput, StyleSheet } from 'react-native';
import { Container, Area, Area2, HeaderTitle, ReqInput } from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";
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

    return (
        <Container>
            <Text>Perfil Professor</Text>
            <Button color="#FF8C78" title="Requisição" onPress={() => setModalVisible(true)} />

            <Modal color="#FFEFEC" width="90%" isVisible={isModalVisible}>
                <Area>
                    <HeaderTitle>Descreva a sua necessidade:</HeaderTitle>
                    <Area2>
                        <ReqInput
                            placeholder="Digite sua requisição"
                            onChangeText={(text) => setTextoRequisicao(text)}
                            multiline={true}
                        />
                    </Area2>
                    
                    <Button color="#FF8C78" title="Finalizar e Enviar" onPress={handleRequisição} />
                    {showError && <Text style={{ color: 'red' }}>{error}</Text>}
                    <Button color="#FF8C78" title="Cancelar" onPress={() => setModalVisible(false)} />
                    <Text/>
                </Area>
            </Modal>
        </Container>
    );
};
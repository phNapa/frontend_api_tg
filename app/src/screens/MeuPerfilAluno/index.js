import React, { useState, useEffect } from 'react';
import { Text, Button, TouchableOpacity  } from 'react-native';
import { Container, HeaderArea, HeaderTitle, Texts, Middle, NameTitle, Scroller, ListArea, LoadingIcon, Buttons, ButtonTitle } from './styles';
import { useNavigation } from '@react-navigation/native';
import AccountIcon from '../../assets/account.svg';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const [nameAluno, setName] = useState('');
    const [cidadeAluno, setCidade] = useState('');
    const [contatoAluno, setContato] = useState('');
    const [cpf, setCPF] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [endereco, setEndereco] = useState('');
    const [genero, setGenero] = useState('');

    const [alturaAluno, setAltura] = useState('');
    const [imcAluno, setIMC] = useState('');
    const [nivelExperiencia, setNivelExperiencia] = useState('');
    const [objetivo, setObjetivos] = useState('');
    const [pesoAluno, setPeso] = useState('');
    const [prefHorario, setPrefHorario] = useState('');
    const [restrMedicas, setRestrMedicas] = useState('');
    
    

    const getAlunoById = async () => {
        const alunoID = await AsyncStorage.getItem('alunoID');
        if(alunoID) {
            let res = await Api.getAlunoById(alunoID);
            setAltura(res[0].altura)
            setIMC(res[0].imc)
            setNivelExperiencia(res[0].nivelExperiencia)
            setObjetivos(res[0].objetivos)
            setPeso(res[0].pesoOrigem)
            setPrefHorario(res[0].prefHorario)
            setRestrMedicas(res[0].restrMedicas)
        } 
    };

    const getUsuarioById = async () => {
        const userID = await AsyncStorage.getItem('userID');
        if(userID) {
            let res = await Api.getUsuarioById(userID);
            setCidade(res.cidade)
            setContato(res.contato)
            setCPF(res.CPF)
            setDataNasc(res.dataNasc)
            setEndereco(res.endereco)
            setGenero(res.genero)
            setName(res.name)
        } 
    };

    useEffect(() => {
      getAlunoById();
      getUsuarioById();
    });

    const handleLogoutClick = async () => {
        await AsyncStorage.setItem('token', "invalid");
        navigation.reset({
            
            routes: [{name: 'SignIn'}]
        });
    }

    const handleAcompanhamentoClick = async () => {
        navigation.navigate('Acompanhamento', {});
    }


    return(
        <Container>
            <Scroller>
            <HeaderArea>
                <HeaderTitle>Meu Perfil</HeaderTitle>
            </HeaderArea>
            <Middle>
              <AccountIcon width="100" height="100" fill="#FFFFFF"/>
            </Middle>
            <Middle>
                <NameTitle>{nameAluno}</NameTitle>
            </Middle>
            
            <Texts>CPF: {cpf}</Texts>
            <Texts>Contato: {contatoAluno}</Texts>
            <Texts>Endereco: {endereco}</Texts>
            <Texts>Cidade: {cidadeAluno}</Texts>
            <Texts>Objetivo: {objetivo}</Texts>
            <Texts>Peso: {pesoAluno} Kg</Texts>
            <Texts>Altura: {alturaAluno}</Texts>
            <Texts>IMC: {imcAluno}</Texts>
            <Texts>Preferência de Horário: {prefHorario}</Texts>
            <Texts>Restrições Médicas: {restrMedicas}</Texts>

            
            <Buttons onPress={handleAcompanhamentoClick}>
                <ButtonTitle>Acompanhamento</ButtonTitle>
            </Buttons>
            <Buttons onPress={handleLogoutClick}>
                <ButtonTitle>Sair</ButtonTitle>
            </Buttons>
            </Scroller>
        </Container>
    );
};
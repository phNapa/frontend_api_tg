import React, { useState, useEffect } from 'react';
import { Text, TextInput } from 'react-native';
import { Container, HeaderArea, HeaderTitle, Texts, Middle, NameTitle, TextsInputMenor, TextsInputMaior, InputArea, Buttons, ButtonTitle } from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';

import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { alunoID, name, contato, cidade } = route.params;
    const [nameAluno, setName] = useState(name);
    const [pesoAluno, setPeso] = useState('');
    const [alturaAluno, setAltura] = useState('');
    const [imcAluno, setIMC] = useState('');
    const [objetivoAluno, setObjetivo] = useState('');
    const [exerciseName, setExerciseName] = useState('');
    const [series, setSeries] = useState('');
    const [repetitions, setRepetitions] = useState('');
    const [rest, setRest] = useState('');

    const getAlunoById = async () => {
        if(alunoID) {
            let res = await Api.getAlunoById(alunoID);
            setPeso(res[0].pesoOrigem)
            setAltura(res[0].altura)
            setIMC(res[0].imc)
            setObjetivo(res[0].objetivos)
        } 
    };

    useEffect(() => {
      setName(name);
      getAlunoById();
    }, [alunoID]);
    
    return(
        <Container>
            <HeaderArea>
                <HeaderTitle>Nova Aula</HeaderTitle>
            </HeaderArea>
            
            <NameTitle>{nameAluno}</NameTitle>
            
            <Texts>Objetivo: {objetivoAluno}</Texts>
            <Texts>Peso: {pesoAluno} Kg</Texts>
            <Texts>Altura: {alturaAluno}</Texts>
            <Texts>IMC: {imcAluno}</Texts>
            <Texts>Nome do treino</Texts>
            <InputArea>
              <TextsInputMaior
                placeholder="Ex. Aula 01 - Costa e Biceps"
                value={exerciseName}
                onChangeText={(text) => setExerciseName(text)}
              />
            </InputArea>

            <InputArea>
            <Texts>Séries:</Texts>
              <TextsInputMenor
                value={series}
                onChangeText={(text) => setSeries(text)}
              />
            </InputArea>
            
            <InputArea>
            <Texts>Repetições:</Texts>
            <TextsInputMenor
              value={repetitions}
              onChangeText={(text) => setRepetitions(text)}
            />
            </InputArea>
            
            <InputArea>
            <Texts>Descanso:</Texts>
            <TextsInputMenor
              value={rest}
              onChangeText={(text) => setRest(text)}
            />
            </InputArea>
            <Texts>Selecione os exercicios:</Texts>
            
            <Buttons>
              <ButtonTitle>Salvar</ButtonTitle>
            </Buttons>
        </Container>
    );
};
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Api from '../../Api';
import { Container, HeaderTitle, Texts, ExericioArea, Nota} from './styles';
import Stars from '../../components/Stars';

const ExerciseScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { aulaID, treinoID, titulo, dataAula, horario, localo, duracao, finalizado} = route.params;
  const [lessonName, setLessonName] = useState('');
  const [series, setSeries] = useState('');
  const [repetitions, setRepetitions] = useState('');
  const [restTime, setRestTime] = useState('');
  const [exerciseList, setExerciseList] = useState([]);
  const [textoDificuldades, setTextoDificuldades] = useState('');
  const [notaAula, setNotaAula] = useState('');
  const [notaProf, setNotaProfessor] = useState('');
  const [pesoAtual, setPesoAtual] = useState('');
  useEffect(() => {
    setLessonName(route.params.lessonName);
    setSeries('');
    setRepetitions('');
    setRestTime('');
    setExerciseList([]);
    getTreinoByAulaID();
    getAulaID();
  }, [route.params.titulo]);

  const getTreinoByAulaID = async () => {
    if(treinoID) {
        let res = await Api.getTreinoByAulaID(treinoID);
        setLessonName(titulo);
        setSeries(res[0].series);
        setRepetitions(res[0].repeticoes);
        setRestTime(res[0].descanso);
        setExerciseList(JSON.parse([res[0].exercicios]));
    } 
  };

  const getAulaID = async () => {
    if(aulaID) {
        let res = await Api.getAulaID(aulaID);
        setTextoDificuldades(res[0].dificuldades);
        setNotaAula(res[0].notaAula);
        setPesoAtual(res[0].pesoAtual);
    } 
  };


  return (
    <Container>
      <HeaderTitle>Detalhes da aula</HeaderTitle>
        

        <Nota>
        <HeaderTitle>{lessonName}</HeaderTitle>
        <Stars stars={notaAula} />
        <Texts>Nota da aula: {notaAula}</Texts>
        
        </Nota>
        
        <Texts>Data aula: {dataAula}</Texts>
        <Texts>Horario: {horario}</Texts>
        <Texts>Local: {localo}</Texts>
        <Texts>Duracao: {duracao}</Texts>
        <Texts>Séries: {series}</Texts>
        <Texts>Repetições: {repetitions}</Texts>
        <Texts>Descanso: {restTime} segundos</Texts>
        <Texts>Dificuldades: {textoDificuldades}</Texts>
        <Texts>Exercicios:</Texts>
        <ExericioArea>
          <FlatList
            data={exerciseList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Texts>{item}</Texts>}
          />
        </ExericioArea>
    </Container>
  );
};

export default ExerciseScreen;

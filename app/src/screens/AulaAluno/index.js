import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Api from '../../Api';
import { Container, HeaderTitle, Area1, Area2, Buttons, Cronometro, CronometroText, Texts, ExericioArea, ButtonTitle, ReqInput, ModalArea} from './styles';
import Modal from 'react-native-modal';

const ExerciseScreen = () => {
  const route = useRoute();
  const [isModalVisible, setModalVisible] = useState(false);
  const { aulaID, treinoID, titulo, dataAula, horario, localo, duracao, finalizado} = route.params;
  const [lessonName, setLessonName] = useState('');
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [series, setSeries] = useState('');
  const [repetitions, setRepetitions] = useState('');
  const [restTime, setRestTime] = useState('');
  const [exerciseList, setExerciseList] = useState([]);
  const [textoDificuldades, setTextoDificuldades] = useState('');
  const buttonText = finalizado === 1 ? 'Finalizado' : 'Finalizar';
  useEffect(() => {
    setLessonName(route.params.lessonName);
    setIsTimerRunning(false);
    setSeries('');
    setRepetitions('');
    setRestTime('');
    setExerciseList([]);
    getTreinoByAulaID();
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

  useEffect(() => {
    let interval;

    if (isTimerRunning) {
      interval = setInterval(() => {
        setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
  };

  const finishTraining = () => {
    setTotalSeconds(0)
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };
  
  const handleButtonFinalizar = () => {
    if (finalizado !== 1) {
      setModalVisible(true)
      stopTimer();
    }
  };

  return (
    <Container>
      <HeaderTitle>Minha aula</HeaderTitle>
        <HeaderTitle>{lessonName}</HeaderTitle>
        <Area1>
          <Cronometro>
            <CronometroText>{formatTime(totalSeconds)}</CronometroText>
          </Cronometro>
          
          <Area2>
            <Buttons onPress={startTimer} disabled={isTimerRunning}>
              <ButtonTitle>Iniciar Aula</ButtonTitle>
            </Buttons>
            <Buttons onPress={stopTimer} disabled={!isTimerRunning}>
              <ButtonTitle>Pausar</ButtonTitle>
            </Buttons>
            <Buttons onPress={handleButtonFinalizar}
              disabled={finalizado === 1}>
              <ButtonTitle>{buttonText}</ButtonTitle>
            </Buttons>
          </Area2>
        </Area1>

        <Texts>Série: {series}</Texts>
        <Texts>Repetições: {repetitions}</Texts>
        <Texts>Descanso: {restTime} segundos</Texts>
        <Texts>Exercicios:</Texts>
        <ExericioArea>
          <FlatList
            data={exerciseList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Texts>{item}</Texts>}
          />
        </ExericioArea>
        
        <Modal color="#FFEFEC" width="90%" isVisible={isModalVisible}>
          <ModalArea>
            <HeaderTitle>Finalizar aula</HeaderTitle>
            <Texts>Tempo total: {formatTime(totalSeconds)}</Texts>
            <Texts>Comentários/Dificuldades</Texts>
            <ReqInput 
              placeholder="Ex. Não consegui seguir com todas as séries"
              onChangeText={(text) => setTextoDificuldades(text)}
              multiline={true}/>
            <Button color="#FF8C78" title="Finalizar e Enviar" onPress={finishTraining} />
            <Button color="#FF8C78" title="Cancelar" onPress={() => setModalVisible(false)} />
          </ModalArea>
        </Modal>

    </Container>
  );
};

export default ExerciseScreen;

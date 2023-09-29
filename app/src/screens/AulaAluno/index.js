import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, FlatList } from 'react-native';

const ExerciseScreen = () => {
  const [lessonName, setLessonName] = useState('Nome da Aula');
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [series, setSeries] = useState('');
  const [repetitions, setRepetitions] = useState('');
  const [restTime, setRestTime] = useState('');
  const [exerciseList, setExerciseList] = useState([]);

  useEffect(() => {
    let interval;

    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
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
    // Implemente a lógica para finalizar o treino aqui
  };

  return (
    <View>
      <Text>{lessonName}</Text>
      <Text>Cronômetro: {timer} segundos</Text>
      <Button title="Iniciar Aula" onPress={startTimer} disabled={isTimerRunning} />
      <Button title="Parar" onPress={stopTimer} disabled={!isTimerRunning} />
      <Text>Série: {series}</Text>
      <Text>Repetições: {repetitions}</Text>
      <Text>Descanso: {restTime}</Text>
      <FlatList
        data={exerciseList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <Button title="Finalizar Treino" onPress={finishTraining} />
    </View>
  );
};

export default ExerciseScreen;

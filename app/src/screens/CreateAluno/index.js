import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreateAlunoScreen = () => {
  const [altura, setAltura] = useState('');
  const [nivelExperiencia, setNivelExperiencia] = useState('');
  const [objetivos, setObjetivos] = useState('');
  const [pesoOrigem, setPesoOrigem] = useState('');
  const [prefHorario, setPrefHorario] = useState('');
  const [restrMedicas, setRestricoesMedicas] = useState('');
  const [userID, setUserID] = useState('');

  const handleSubmit = () => {console.log({
      altura,
      nivelExperiencia,
      objetivos,
      pesoOrigem,
      prefHorario,
      restrMedicas,
      userID,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: '#FF8C78', fontSize: 18}}>Detalhes do aluno</Text>
      <TextInput
        style={styles.input}
        placeholder="Altura"
        placeholderTextColor="#FF8C78"
        onChangeText={(text) => setAltura(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nível de Experiência"
        placeholderTextColor="#FF8C78"
        onChangeText={(text) => setNivelExperiencia(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Objetivos"
        placeholderTextColor="#FF8C78"
        onChangeText={(text) => setObjetivos(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Peso de Origem"
        placeholderTextColor="#FF8C78"
        onChangeText={(text) => setPesoOrigem(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Preferência de Horário"
        placeholderTextColor="#FF8C78"
        onChangeText={(text) => setPrefHorario(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Restrições Médicas"
        placeholderTextColor="#FF8C78"
        onChangeText={(text) => setRestricoesMedicas(text)}
      />
      <Button title="Finalizar" onPress={handleSubmit} color="#FF8C78" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEFEC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: '#FF8C78',
    fontSize: 18,
    width: '80%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FF8C78',
  },
});

export default CreateAlunoScreen;

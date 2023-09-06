import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreateAlunoScreen = () => {
  const [certificacoes, setCertificacoes] = useState('');
  const [dispoHorario, setDispoHorario] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [experiencia, setExperiencia] = useState('');

  const handleSubmit = () => {console.log({
      certificacoes,
      dispoHorario,
      especialidade,
      experiencia,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: '#FF8C78', fontSize: 18}}>Detalhes do professor</Text>
      <TextInput
        style={styles.input}
        placeholder="Certificações"
        placeholderTextColor="#FF8C78"
        onChangeText={(text) => setCertificacoes(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Disponibilidade de Horário"
        placeholderTextColor="#FF8C78"
        onChangeText={(text) => setDispoHorario(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Especialidade"
        placeholderTextColor="#FF8C78"
        onChangeText={(text) => setEspecialidade(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Experiência"
        placeholderTextColor="#FF8C78"
        onChangeText={(text) => setExperiencia(text)}
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

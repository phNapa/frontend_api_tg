import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from '../../Api';



const CreateAlunoScreen = () => {
  const [certificacoes, setCertificacoes] = useState('');
  const [dispoHorario, setDispoHorario] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

const navigation = useNavigation();

const handleSignClick = async () => {

  const userID = await AsyncStorage.getItem('userID');
  console.log(userID)
  if(certificacoes != '' && especialidade != ''){
      
      let res = await Api.createProfessor(certificacoes, dispoHorario, especialidade, experiencia, userID);
      if(res.insertId){
          alert("Preenchimento concluído, faça login na aplicação!");
          navigation.reset({
            routes: [{name: 'SignIn'}]
          });
          
      } else {
          setError("Algo deu errado!");
          setShowError(true);
      }
  } else {
      setError("Preencha todos os campos!");
      setShowError(true);
  }
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
      {showError && <Text style={{ color: 'red' }}>{error}</Text>}
      <Button title="Finalizar" onPress={handleSignClick} color="#FF8C78" />
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

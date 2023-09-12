import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from '../../Api';


const CreateUserScreen = () => {
  const [cpf, setCPF] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [genero, setGenero] = useState('');
  const [name, setNome] = useState('');
  const [contato, setContato] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

const navigation = useNavigation();
const handleSignClick = async () => {

  const isProfessor = await AsyncStorage.getItem('isProfessor');

  const userCredentialsID = await AsyncStorage.getItem('userID');

  if(cpf != '' && name != ''){
      
      let res = await Api.createUserDetails(cpf, dataNasc, genero, name, contato, endereco, cidade, isProfessor, userCredentialsID);
      if(res.insertId){
          alert("Detalhes preenchidos com sucesso, para finalizar preencha alguns detalhes!");

          if(isProfessor == 1){
              navigation.reset({
                  routes: [{name: 'CreateProfessor'}]
              });
          } else{
              navigation.reset({
                  routes: [{name: 'CreateAluno'}]
              });
          }
          
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
      <Text style={{ color: '#FF8C78', fontSize: 18}}>Detalhes do usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor="#FF8C78"
        onChangeText={(text) => setCPF(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        placeholderTextColor="#FF8C78"
        onChangeText={(text) => setDataNasc(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Genero"
        placeholderTextColor="#FF8C78"
        onChangeText={(text) => setGenero(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#FF8C78"
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contato"
        placeholderTextColor="#FF8C78"
        onChangeText={(text) => setContato(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        placeholderTextColor="#FF8C78"
        onChangeText={(text) => setEndereco(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        placeholderTextColor="#FF8C78"
        onChangeText={(text) => setCidade(text)}
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

export default CreateUserScreen;

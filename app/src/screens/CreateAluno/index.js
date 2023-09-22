import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Picker} from '@react-native-picker/picker';
import Api from '../../Api';
import GymLogo from '../../assets/gym.svg'


const CreateAlunoScreen = () => {
  const [altura, setAltura] = useState('');
  const [nivelExperiencia, setNivelExperiencia] = useState('Iniciante');
  const [objetivos, setObjetivos] = useState('');
  const [pesoOrigem, setPesoOrigem] = useState('');
  const [prefHorario, setPrefHorario] = useState('Manhã');
  const [restrMedicas, setRestricoesMedicas] = useState('');
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);
  const [userID, setUserID] = useState('');

  const navigation = useNavigation();

  const handleSignClick = async () => {

  const userID = await AsyncStorage.getItem('userID');
  if (altura && nivelExperiencia && objetivos && pesoOrigem && prefHorario && restrMedicas) {
    try {
      const res = await Api.createAluno(altura, nivelExperiencia, objetivos, pesoOrigem, prefHorario, restrMedicas, userID);
      
      if (res.insertId) {
        alert("Preenchimento concluído, faça login na aplicação!");
        navigation.reset({
          routes: [{ name: 'SignIn' }]
        });
      } else {
        throw new Error("Algo deu errado, preencha todos os campos!");
      }
    } catch (error) {
      setError(error.message);
      setShowError(true);
    }
  } else {
    console.log(altura, nivelExperiencia, objetivos, pesoOrigem, prefHorario, restrMedicas, userID)
    setError("Preencha todos os campos!");
    setShowError(true);
  }
  
};

  return (
    <ScrollView>
      <View style={styles.container}>
        <GymLogo width="100%" height="80"/>
        <Text style={styles.text}>Detalhes do aluno</Text>
        <View width="80%">
          <Text style={styles.text}>Altura</Text>
          <TextInput
            style={styles.input}
            placeholder="Altura (Ex. 170)"
            placeholderTextColor="#FF8C78"
            backgroundColor="#FFD6CF"
            onChangeText={(text) => setAltura(text)}
            keyboardType="numeric"
          />
        </View>
        
        <View width="80%">
          <Text style={styles.text}>Nivel de experiência</Text>
          <Picker style={styles.picker}
          selectedValue={nivelExperiencia}
          onValueChange={(itemValue, itemIndex) =>
            setNivelExperiencia(itemValue)
          }>
          <Picker.Item label="Iniciante" value="Iniciante" />
          <Picker.Item label="Tenho experiência" value="Tenho experiência" />
          <Picker.Item label="Avançado" value="Avançado" />
        </Picker>
        </View>

        <View width="80%">
          <Text style={styles.text}>Objetivos</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex. Fraturas"
            placeholderTextColor="#FF8C78"
            backgroundColor="#FFD6CF"
            onChangeText={(text) => setObjetivos(text)}
          />
        </View>
        <View width="80%">
          <Text style={styles.text}>Peso Atual</Text>
          <TextInput
            style={styles.input}
            placeholder="(Ex. 75)"
            placeholderTextColor="#FF8C78"
            backgroundColor="#FFD6CF"
            onChangeText={(text) => setPesoOrigem(text)}
            keyboardType="numeric"
          />
        </View>

        <View width="80%">
          <Text style={styles.text}>Preferência de Horário</Text>
          <Picker style={styles.picker}
          selectedValue={prefHorario}
          onValueChange={(itemValue, itemIndex) =>
            setPrefHorario(itemValue)
          }>
          <Picker.Item label="Manhã" value="Manhã" />
          <Picker.Item label="Tarde" value="Tarde" />
          <Picker.Item label="Noite" value="Noite" />
        </Picker>
        </View>

        <View width="80%">
          <Text style={styles.text}>Preferência de Horário</Text>
          <TextInput
            style={styles.input}
            placeholder="Restrições Médicas"
            placeholderTextColor="#FF8C78"
            backgroundColor="#FFD6CF"
            onChangeText={(text) => setRestricoesMedicas(text)}
          />
          {showError && <Text style={{ color: 'red' }}>{error}</Text>}
          <Button title="Finalizar" onPress={handleSignClick} color="#FF8C78" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEFEC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    backgroundColor: '#FFD6CF',
    color: '#FF8C78',
    
  },
  input: {
    color: '#FF8C78',
    fontSize: 15,
    width: '100%',
    marginVertical: 5,
    padding: 10,
  },
  text: {
    color: '#FF8C78', fontSize: 18
  }
});

export default CreateAlunoScreen;

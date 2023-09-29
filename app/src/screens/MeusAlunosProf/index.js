import React, { useState, useEffect } from 'react';
import { Text, RefreshControl, StyleSheet } from 'react-native';
import { Container, Scroller, HeaderArea, HeaderTitle, LoadingIcon, ListArea} from './styles';
import { useNavigation } from '@react-navigation/native';
import AlunoItem from '../../components/AlunoItem'
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from '../../Api';

export default () => {

    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [cidade, setCidade] = useState('');


    const getProfAlunos = async () => {
        const professorID = await AsyncStorage.getItem('professorID');
        setLoading(true);
        setList([]);
        let res = await Api.getProfAlunos(professorID);
        if(res.data) {
            setList(res.data)
        } else {
            // Alert("Erro: "+ res.error);
        }
        
        

        setLoading(false);
    };

    useEffect(()=>{
        getProfAlunos();

    }, []);

    const onRefresh = async () => {
        const professorID = await AsyncStorage.getItem('professorID');
        console.log(professorID)
        setRefreshing(false);
        getProfAlunos(professorID);
    }

    return(
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Meus alunos</HeaderTitle>
                </HeaderArea>
                {loading&&
                <LoadingIcon size="large" color="#FF8C78"/>
                }
                <ListArea>
                    {list.length === 0 ? (
                        <Text style={styles.text}>Nenhum aluno encontrado!</Text>
                    ) : (
                        list.map((item, k) => (
                        <AlunoItem key={k} data={item} />
                        ))
                    )}
                </ListArea>
            </Scroller>
        </Container>
    );
};

const styles = StyleSheet.create({
    picker: {
      width: '90%',
      backgroundColor: '#FFD6CF',
      color: '#FF8C78',
    },
    text: {
      color: '#FF8C78', fontSize: 18
    }
});
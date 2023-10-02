import React, { useState, useEffect } from 'react';
import { Text, RefreshControl, StyleSheet } from 'react-native';
import { Container, Scroller, HeaderArea, HeaderTitle, LoadingIcon, ListArea} from './styles';
import { useNavigation } from '@react-navigation/native';
import AulaItem from '../../components/AulaItem'
import Api from '../../Api';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {

    
    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const getAulaUser = async () => {
        const userID = await AsyncStorage.getItem('userID');
        setLoading(true);
        setList([]);
        if(userID) {
            let res = await Api.getAulaUser(userID);
            if(res.data) {
                setList(res.data)
            } else {
                // Alert("Erro: "+ res.error);
            }
        } 
        setLoading(false);
    };

    useEffect(()=>{
        getAulaUser();

    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getAulaUser();
    }

    return(
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Minhas aulas</HeaderTitle>
                </HeaderArea>

            
                {loading&&
                <LoadingIcon size="large" color="#FF8C78"/>
                }

                <ListArea>
                {list.length === 0 ? (
                    <Text style={styles.text}>Nenhuma aula encontrada, para iniciar suas aulas contate um professor!</Text>
                ) : (
                    list.map((item, k) => (
                    <AulaItem key={k} data={item} />
                    ))
                )}
                </ListArea>

            </Scroller>
        </Container>
    );
};

const styles = StyleSheet.create({
    text: {
      color: '#FF8C78', fontSize: 20
    }
  });
import React, { useState, useEffect } from 'react';
import { Text, RefreshControl, StyleSheet } from 'react-native';
import { Container, Scroller, HeaderArea, HeaderTitle, SearchButton, LocationArea, LocationInput, LocationFinder, LoadingIcon, ListArea} from './styles';
import SearchIcon from '../../assets/search.svg'
import MyLocationIcon from '../../assets/my_location.svg'
import { useNavigation } from '@react-navigation/native';
import ProfessorItem from '../../components/ProfessorItem'
import Api from '../../Api';
import {Picker} from '@react-native-picker/picker';
import cidadesBrasil from '../CreateUserDetails/cidadesBrasil';

export default () => {

    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [cidade, setCidade] = useState('');


    const getProfessores = async () => {
        setLoading(true);
        setList([]);
        if(cidade) {
            let res = await Api.getProfessoresCidade(cidade);
            if(res.data) {
                setList(res.data)
            } else {
                // Alert("Erro: "+ res.error);
            }
        } 
        else {
            let res = await Api.getProfessores();
            if(res.data) {
                setList(res.data)
            } else {
                // Alert("Erro: "+ res.error);
            }
        }
        

        setLoading(false);
    };

    useEffect(()=>{
        getProfessores();

    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getProfessores();
    }

    return(
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre o seu professor!</HeaderTitle>
                </HeaderArea>

                <LocationArea>
                    <Picker
                        style={styles.picker}
                        selectedValue={cidade}
                        onValueChange={(itemValue, itemIndex) => setCidade(itemValue)}
                    >
                        <Picker.Item label="Selecione uma cidade" value="" />
                        {cidadesBrasil.map((cidade, index) => (
                        <Picker.Item key={index} label={cidade} value={cidade} />
                        ))}
                    </Picker>
                    <LocationFinder onPress={getProfessores}>
                        <MyLocationIcon width="30" height="30" fill="#FF8C78"/>
                    </LocationFinder>
                </LocationArea>
                {loading&&
                <LoadingIcon size="large" color="#FF8C78"/>
                }

                <ListArea>
                    {list.map((item, k)=>(
                        <ProfessorItem key={k} data={item}/>
                    ))}
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
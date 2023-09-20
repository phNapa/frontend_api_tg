import React, { useState, useEffect } from 'react';
import { Text, RefreshControl } from 'react-native';
import { Container, Scroller, HeaderArea, HeaderTitle, SearchButton, LocationArea, LocationInput, LocationFinder, LoadingIcon, ListArea} from './styles';
import SearchIcon from '../../assets/search.svg'
import MyLocationIcon from '../../assets/my_location.svg'
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import ProfessorItem from '../../components/ProfessorItem'
import Api from '../../Api';

export default () => {

    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const handleLocationFinder = async () => {
        setCoords(null);
        let result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    
        if(result == 'granted') {

            setLoading(true);
            setLocationText('');
            setList([]);

            Geolocation.getCurrentPosition((info)=>{
                setCoords(info.coords);
                getProfessores();
            });
        }
    };


    const getProfessores = async () => {
        setLoading(true);
        setList([]);
        console.log(locationText)
        if(locationText) {
            console.log('if')
            let res = await Api.getProfessoresCidade(locationText);
            if(res.data) {
                console.log("if "+res.data)
                setList(res.data)
            } else {
                // Alert("Erro: "+ res.error);
            }
        } 
        else {
            console.log('else')
            let res = await Api.getProfessores();
            if(res.data) {
                console.log("else "+res.data)
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
                    <SearchButton onPress={()=>navigation.navigate('Search')}>
                        <SearchIcon width="26" height="26" fill="#FF8C78"/>
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput
                        placeholder="Onde você está?"
                        placeholderTextColor="#FF8C78"
                        value={locationText}
                        onChangeText={t=>setLocationText(t)}
                    />
                    <LocationFinder onPress={getProfessores}>
                        <MyLocationIcon width="24" height="24" fill="#FF8C78"/>
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
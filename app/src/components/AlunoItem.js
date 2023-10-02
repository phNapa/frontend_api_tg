import React from 'react';
import styled from 'styled-components/native';
import AccountIcon from '../assets/account.svg';
import Stars from '../components/Stars';
import { useNavigation } from '@react-navigation/native';

const Area = styled.View`
    border: 1px solid #FF8C78;
    background-color: #FFD6CF;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Area2 = styled.View`
    background-color: #FFD6CF;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ProfileAndStars = styled.View`
    flex-direction: column;
`;

const InfoArea = styled.View`
    margin-right: 20px;
`;

const UserName = styled.Text`
    font-weight: bold;
`;

const Especialidade = styled.Text`
    font-weight: bold;
`;

const Cidade = styled.Text`
    font-weight: bold;
`;

const Contato = styled.Text`
    font-weight: bold;
`;

const SeeProfileButton = styled.TouchableOpacity`
    width: 85px;
    height: 26px;
    background-color: #FF8C78;
    border: 1px solid #FF8C78;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

const SeeProfileButtonText = styled.Text`
    font-size: 13px;
    color: #FFFFFF;
`;

export default ({data}) => {

    const navigation = useNavigation();
    const handleClick = () => {
        navigation.navigate('MeuAluno', {
            alunoID: data.alunoID,
            name: data.name,
            contato: data.contato,
            cidade: data.cidade,
        });
    };

    return (
        <Area>
            <AccountIcon width="70" height="70" fill="#FFFFFF"/>
            <Area2>
                <InfoArea>
                    <UserName>{data.name}</UserName>
                    <Contato>{data.contato}</Contato>
                    <Cidade>{data.cidade}</Cidade>
                </InfoArea>
                
                <SeeProfileButton onPress={handleClick}>
                        <SeeProfileButtonText>Ver perfil</SeeProfileButtonText>
                </SeeProfileButton>
                
                
            </Area2>
            
        </Area>
    );
};
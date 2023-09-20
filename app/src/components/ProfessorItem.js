import React from 'react';
import styled from 'styled-components/native';
import AccountIcon from '../assets/account.svg';
import Stars from '../components/Stars';
const Area = styled.TouchableOpacity`
    background-color: #FFD6CF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;

const UserName = styled.Text`
    margin-left: 17px;
    font-weight: bold;
`;

const Especialidade = styled.Text`
    margin-left: 17px;
    font-weight: bold;
`;

const SeeProfileButton = styled.View`
    width: 85px;
    height: 26px;
    background-color: #FF8C78;
    border: 1px solid #FF8C78;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const SeeProfileButtonText = styled.Text`
    font-size: 13px;
    color: #FFFFFF;
`;

export default ({data}) => {
    return (
        <Area>
            <AccountIcon width="88" height="88" fill="#FFFFFF"/>
            <InfoArea>
                <UserName>{data.name}</UserName>

                <Stars stars={data.notaMedia} showNumber={true}/>

                <Especialidade>{data.especialidade}</Especialidade>

                <SeeProfileButton>
                    <SeeProfileButtonText>Ver perfil</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    );
};
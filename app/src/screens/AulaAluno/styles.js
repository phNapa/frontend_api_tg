import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFEFEC;
`;

export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #FF8C78;
    padding-left: 20px;
    padding-top: 10px;
`;

export const Buttons = styled.TouchableOpacity`
  background-color: ${(props) => (props.disabled ? '#ccc' : '#FF8C78')};
  width: 150%;
  height: 20%;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 5px;
`;

export const ButtonTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #FFFFFF;
`;

export const Texts = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #FF8C78;
    padding-left: 20px;
`;

export const Area1 = styled.View`
    justify-content: space-between;
    height: 30%;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 50px;
    padding-top: 10px;
`;

export const Area2 = styled.View`
    background-color: #FFEFEC;
    align-items: center;
`;

export const ExericioArea = styled.View`
    margin: 10px;
    border: 3px solid #FF8C78;
    border-radius: 10px;
    padding: 10px;
`;

export const Cronometro = styled.View`
    width: 125px;
    height: 125px;
    background-color: #FFFFFF;
    border-radius: 90px;
    justify-content: center;
    align-items: center;
    border: 3px solid #FF8C78;
`;

export const CronometroText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #FF8C78;
`;

export const ModalArea = styled.View`
    justify-content: space-between;
    background-color: #FFEFEC;
    border-radius: 10px;
`;

export const ReqInput = styled.TextInput`
    border: 3px solid #FF8C78;
    border-radius: 10px;
    height: 30%;
    font-size: 16px;
    color: #FF8C78;
    padding: 10px;
    margin: 15px;
`;
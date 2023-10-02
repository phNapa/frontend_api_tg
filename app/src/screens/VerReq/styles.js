import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFEFEC;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
`;

export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #FF8C78;
`;

export const Middle = styled.View`
flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;


export const Buttons = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#FF8C78')};
  width: 50%;
  height: 5%;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 5px;
  margin-left: 25%;
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

export const NameTitle = styled.Text`
    font-size: 27px;
    font-weight: bold;
    color: #FF8C78;
`;

export const ReqArea = styled.View`
    margin: 10px;
    border: 2px solid #FF8C78;
    border-radius: 10px;
    padding: 10px;
`;

export const Aceito = styled.View`
    flex-direction: row;
    align-items: center;
`;
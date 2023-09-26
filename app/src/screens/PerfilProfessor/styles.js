import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFEFEC;
`;

export const Area = styled.View`
    width: 100%;
    height: 100%;
    border: 1px solid #FF8C78;
    background-color: #FFEFEC;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

export const Area2 = styled.View`
    flex: 1;
    background-color: #FFD6CF;
    width: 80%;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 10px;
    margin-right: 10px;
    border: 1px solid #FF8C78;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    margin-top: 30px;
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #FF8C78;
`;

export const ReqInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #FF8C78;
`;
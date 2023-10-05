import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFEFEC;
    margin: 20px;
`;

export const HeaderTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #FF8C78;
`;

export const Nota = styled.View`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Texts = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #FF8C78;
`;

export const ExericioArea = styled.View`
    margin: 10px;
    border: 3px solid #FF8C78;
    border-radius: 10px;
    padding: 10px;
`;
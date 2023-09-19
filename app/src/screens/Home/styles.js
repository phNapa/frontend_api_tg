import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFEFEC;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #FF8C78;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    geiht: 26px;
`;

export const LocationArea = styled.View`
    background-color: #FFD6CF;
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
`;

export const LocationInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #FF8C78;
`;

export const LocationFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;
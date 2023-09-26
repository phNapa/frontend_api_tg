import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Appointments from '../screens/Appointments';
import Profile from '../screens/Profile';
import PerfilProfessor from '../screens/PerfilProfessor';
import AulaAluno from '../screens/AulaAluno';


const Tab = createBottomTabNavigator();

export default () => {
    return(
    <Tab.Navigator
        tabBar={props=><CustomTabBar {...props} />}
        screenOptions={{ headerShown: false }}
    >
        <Tab.Screen name="Appointments" component={Appointments} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="PerfilProfessor" component={PerfilProfessor} />
        <Tab.Screen name="AulaAluno" component={AulaAluno} />
    </Tab.Navigator>
    );
};
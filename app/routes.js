import React from 'react';
import {Platform,View,Text} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import {
     createAppContainer, createSwitchNavigator
} from 'react-navigation';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//SCREENS

import SignIn from './components/auth/index';
import News from './components/news/index';
import Games from './components/games/index';

const AppStack = createBottomTabNavigator({
    News: News,
    Games:Games

});

const AuthStack = createStackNavigator({
    SignIn : SignIn
});

const Maps = createStackNavigator({
    News : News
})

const AppNavigator = createSwitchNavigator({
    App: Maps,
    Auth: AuthStack
},{
    initialRouteName: 'Auth'
})

const AppContainer = createAppContainer(AppNavigator);



//  export const RootNavigator = () =>{ 
//      return createAppContainer(createSwitchNavigator({
//         App: AppStack,
//         Auth: AuthStack
//     },{
//         initialRouteName: 'Auth'
//     }))
//  }

class Route extends React.Component {
    render() {
      return <AppContainer />;
    }
  }

export default Route;




import {Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import {
     createAppContainer, createSwitchNavigator
} from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from '../auth/index';
import News from '../news/index';
import Games from '../games/index';

const AppStack = createBottomTabNavigator({
    News:News,
    Games:Games,

});

const AuthStack = createStackNavigator({
    SignIn : SignIn
});

export const RootNavigator =  createAppContainer(createSwitchNavigator({
        App: AppStack,
        Auth: AuthStack
    },{
        initialRouteName: 'Auth'
    }))



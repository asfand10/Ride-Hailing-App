export const FIREBASEURL = `https://ap-project-a9d72.firebaseio.com`;
export const APIKEY = `AIzaSyAKWn06wJkNCjZ0gBAHWfC1mk_N_vJJrQg`;
export const SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`;
export const SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`;
export const REFRESH = '';

import {AsyncStorage} from 'react-native';

export const setTokens = (values,callBack)=>{
    const dateNow = new Date();
    const expiration = dateNow.getTime() + (3600*1000);
    AsyncStorage.multiSet([
        ['@car_hailing@token',values.token],
        ['@car_hailing@refreshToken',values.refToken],
        ['@car_hailing@expireToken',expiration.toString()],
        ['@car_hailing@uid',values.uid]
    ]).then((response)=>{
        callBack()
    })
}

export const getTokens = (callBack)=>{
    AsyncStorage.multiGet([
        '@car_hailing@token',
        '@car_hailing@refreshToken',
        '@car_hailing@expireToken',
        '@car_hailing@uid'
    ]).then((value)=>{
        callBack(value)
    })
}
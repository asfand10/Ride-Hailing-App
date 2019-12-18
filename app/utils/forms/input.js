import React from 'react';
import {View, Text, StyleSheet,TextInput} from 'react-native';

const InputForm = (props) =>{
    let template = null;

    switch(props.type){
        case "textInput":
            template=
                <TextInput
                    {...props}
                    style={styles.input}
                />

            break;
        default:
            return template
    }

    return template;
}

const styles = StyleSheet.create({
    input:{
        width:'100%',
        borderBottomWidth:2,
        borderBottomColor:"#0e0e0e",
        fontSize:16,
        padding:5,
        marginTop:10
    }
}) 

export default InputForm;
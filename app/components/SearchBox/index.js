import React from 'react';
import {Text,StyleSheet, Dimensions} from 'react-native';
import {View,inputGroup,Input, InputGroup} from 'native-base';

const SearchBox = ()=>{
    return(
        <View style={styles.SearchBox}>
            <Text style={styles.label}>Pick up</Text>
            <InputGroup>
                <Input style={styles.inputSearch} placeholder="Choose pickup location"/>
            </InputGroup>

        </View>
    )
}

var width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    SearchBox:{
        top:0,
        position:"absolute",
        width:width
    },
    inputWrapper:{
        marginLeft:15,
        marginRight: 10,
        marginTop:10,
        marginBottom:0,
        backgroundColor: '#fff',
        opacity:0.9,
        borderRadius:7
    },
    SecondInputWrapper:{
        marginLeft:15,
        marginRight: 10,
        marginTop:0,
        backgroundColor: '#fff',
        opacity:0.9,
        borderRadius:7
    },
    inputSearch:{
        fontSize: 14
    },
    label:{
        fontSize:10,
        fontStyle:"italic",
        marginLeft:10,
        marginTop:10,
        marginBottom:0
    }

})

export default SearchBox;
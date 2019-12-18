
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator
} from 'react-native';

import AuthLogo from './authLogo';
import AuthForm from './authForm';

// import {getTokens, setTokens} from 'redux';




class AuthComponent extends Component {

  state={
    loading:false
  }

  goNext = () =>{
    this.props.navigation.navigate('App');
  }

  // componentDidMount(){
  //   getTokens((value)=>{
  //     console.log(value)
  //   })
  // }

  render(){
    if(this.state.loading){
      return(
        <View style={styles.loading}>
          <ActivityIndicator/>
        </View>
      )
    }
    else{
      return(
        <ScrollView style={styles.container}>
          <View>
            <AuthLogo/>
            <AuthForm
              goNext={this.goNext}
            />
          </View>
        </ScrollView>
      )

    }
    
};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBECF0',
    padding:50
  },
  loading:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  }
});

export default AuthComponent;

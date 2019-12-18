
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import AppContainer from './routes';




class App extends Component{
  
    render(){
      return (
        
          
              
              <AppContainer/>
              
              
              
          
        
      );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
});

export default App;

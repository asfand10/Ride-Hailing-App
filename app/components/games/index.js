
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';




class GamesComponent extends Component {
  render(){
  return (
    
      <View style={styles.container}>
          
          <Text>Welcome GamesComponent</Text>
      </View>
    
  );
};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});

export default GamesComponent;

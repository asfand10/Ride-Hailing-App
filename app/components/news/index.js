
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import MapView from 'react-native-maps';
import MapContainer from '../MapContainer/mapContainer';
import { Container } from 'native-base'



class NewsComponent extends Component {

  render(){

    const initialReigon={
       latitude: 33.6844,
       longitude: 73.04329,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421
      }

  return (
    


    <Container>
      <MapContainer reigon={initialReigon}/>


    </Container>

  
  );
};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  Map:{
    flex:1
  }
});

export default NewsComponent;

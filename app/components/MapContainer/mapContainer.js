import React from 'react';
import {View} from 'native-base';
import MapView from 'react-native-maps';
import {StyleSheet} from 'react-native'
import SearchBox from '../SearchBox/index';

const MapContainer = ({reigon}) =>{
    return(
        <View style={styles.container}>
            <MapView style={styles.Map}
                reigon={reigon}
            >
                <MapView.Marker
                    coordinate={reigon}
                    pinColor="red"
                />
            </MapView>
            <SearchBox />
        </View>

    )
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
  
  export default MapContainer;
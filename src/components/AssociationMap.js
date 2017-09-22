import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import MapView from 'react-native-maps';

const AssociationMap = (props) => (
  <MapView
    style={styles.map}
    initialRegion={{
      latitude: props.association.coordinate.latitude,
      longitude: props.association.coordinate.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    showsMyLocationButton={false}
    loadingEnabled
  >
    <MapView.Marker
      coordinate={props.association.coordinate}
      title={props.association.name}
    />
  </MapView>
);

const styles = StyleSheet.create({
  map: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    marginBottom: 4,
    marginTop: 4,
  }
});

export default AssociationMap
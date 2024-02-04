import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const CargoScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825, // Replace with your desired latitude
          longitude: -122.4324, // Replace with your desired longitude
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }} // Replace with marker coordinates
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>
    </View>
  );
};

export default CargoScreen;
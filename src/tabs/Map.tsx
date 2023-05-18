import React from 'react';
import {View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import MapView, {MapMarker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from '@expo/vector-icons/FontAwesome';
import * as Location from 'expo-location';
import styles from '../util/styles';

// latitudeDelta and longitudeDelta refers to zoom/scale
const Map = () => {
  const [location, setLocation] = React.useState({latitude: 0, longitude: 0});
  const [mapRegion, setRegion] = React.useState({
    latitude: 6.886918424989488,
    longitude: 79.91780374988613,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
  });
  const [permission, setPermission] = React.useState(null);
  const insets = useSafeAreaInsets();

  React.useEffect(() => {
    const initiateMap = async () => {
      const {status} = await Location.requestForegroundPermissionsAsync();
      setPermission(status === 'granted');

      let {
        coords: {latitude, longitude},
      } = await Location.getCurrentPositionAsync({});
      setLocation({latitude, longitude});

      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.3,
        longitudeDelta: 0.3,
      });
    };

    initiateMap();
  }, []);
  
  return (
    <View
      style={{
        ...styles.container,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      {permission ? (
        <MapView
          style={styles.maps}
          provider={PROVIDER_GOOGLE}
          region={mapRegion}
          onRegionChangeComplete={region => setRegion(region)}>
          <MapMarker title="You" coordinate={location}>
            <Icon size={28} name="user-circle-o" />
          </MapMarker>
          <MapMarker
            title="Bus"
            description="ID: 003"
            coordinate={{latitude: 6.721304, longitude: 80.043572}}>
            <Image
              source={require('../../assets/minibus.png')}
              style={{height: 24}}
              resizeMode="contain"
            />
          </MapMarker>
        </MapView>
      ) : !permission ? (
        <Text>No access to location</Text>
      ) : (
        <Text>Requesting permission...</Text>
      )}
    </View>
  );
};

export default Map;

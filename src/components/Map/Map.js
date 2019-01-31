import React, { Component } from 'react';
import {
  Dimensions,
} from 'react-native';

// import { Marker } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './styles';
import colors from '../../styles/colors';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 52.0755032;
const LONGITUDE = 4.5555928;
const LATITUDE_DELTA = 2;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Map extends Component {
  static navigationOptions = {
    title: 'Search',

  }

  constructor() {
    super();
    this.state = {
      markers: [{
        latitude: 52.0755032,
        longitude: 4.5555928,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }],
      region: {
        latitude: 52.0755032,
        longitude: 4.5555928,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      selectedPin: -1,
    };
    this.mapRef = null;
  }

  componentDidMount() {
    const { data } = this.props;

    const markers = data.map(marker => ({
      latitude: parseFloat(marker.lat),
      longitude: parseFloat(marker.lng),
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
      title: marker.c_name,
      id: marker.id,
    }
    ));

    this.setState({
      markers,
    });
  }

  render() {
    const { markers, selectedPin, region } = this.state;
    const { setItemIndex } = this.props;

    return (

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        showsUserLocation
        region={region}
        ref={(ref) => { this.mapRef = ref; }}
      >
        {
          markers.map((marker, index) => (
            <MapView.Marker
              pinColor={index === selectedPin ? colors.blue : '#e40128'}
              key={`${marker.id}-${index}`}
              coordinate={marker}
              onPress={() => {
                setItemIndex(index);
                this.setState({
                  selectedPin: index,
                  region: marker,
                });
              }}
              title={marker.title}
            />
          ))
        }
      </MapView>

    );
  }
}

export default Map;

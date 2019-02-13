import React, { Component } from 'react';
import {
  Dimensions, PermissionsAndroid, Platform,
} from 'react-native';
import { connect } from 'react-redux';

import { actions } from '../../models/map';

class GeolocationWrapper extends Component {
  constructor() {
    super();
    this.state = {
      requestCount: 0,
    };
  }

  componentDidMount() {
    if (Platform.OS === 'ios') {
      this.getUserLocation();
      this.watchUserLocation();
    } else {
      this.requestLocationPermission();
    }
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'SmartCity requires your location',
          message: 'Using your location our aggressive algorithm will help you find almost everything in your neighbourhood'
            + ', Otherwise app will not work',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.getUserLocation();
        this.watchUserLocation();
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };


  getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { coords: { latitude, accuracy }, coords } = position;
        const { latitudeDelta, longitudeDelta } = this.getLatLongDelta(latitude, accuracy);

        const { setCurrentEveryOneMeterPosition, setCurrentEveryHundredMeterPosition } = this.props;
        const { requestCount } = this.state;

        setCurrentEveryOneMeterPosition({ ...coords, latitudeDelta, longitudeDelta });
        setCurrentEveryHundredMeterPosition({ ...coords, latitudeDelta, longitudeDelta });
        this.setState({
          requestCount: requestCount + 1,
        });
      },
      error => this.setState({ error: error.message }),
      { timeout: 50000, maximumAge: 1000 },
    );
  }

  getLatLongDelta = (latitude, accuracy) => {
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
    const latitudeDelta = accuracy / oneDegreeOfLatitudeInMeters * 100;
    const longitudeDelta = accuracy / (oneDegreeOfLatitudeInMeters * Math.cos(latitude * (Math.PI / 180))) * 100;
    return { latitudeDelta, longitudeDelta };
  }

  watchUserLocation = () => {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        const {
          coords: {
            latitude, accuracy, coords,
          },
        } = position;
        const { setCurrentEveryOneMeterPosition, setCurrentEveryHundredMeterPosition } = this.props;
        const { latitudeDelta, longitudeDelta } = this.getLatLongDelta(latitude, accuracy);
        const { requestCount } = this.state;


        if (requestCount >= 100) {
          setCurrentEveryHundredMeterPosition({ ...coords, latitudeDelta, longitudeDelta });
        }

        setCurrentEveryOneMeterPosition({ ...coords, latitudeDelta, longitudeDelta });
        this.setState((prevState) => { prevState.requestCount >= 100 ? 0 : prevState.requestCount + 1; });
      },
      error => this.setState({ error: error.message }),
      {
        enableHighAccuracy: false, timeout: 20000, distanceFilter: 1,
      },
    );
  }


  render() {
    // const {
    //   markers, selectedPin, region, currentUserPosition,
    // } = this.state;
    const { children, currentEveryOneMeterPosition } = this.props;

    return children;
  }
}

const mapStateToProps = state => ({
  currentEveryOneMeterPosition: state.map.currentEveryOneMeterPosition,
  currentEveryOneMeterPosition: state.map.currentEveryOneMeterPosition,
});


export default connect(mapStateToProps, actions)(GeolocationWrapper);

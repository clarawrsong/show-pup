import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TimePickerAndroid,
  Alert,
  PermissionsAndroid,
  TouchableOpacity,
  AsyncStorage,
  Platform
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import FetchLocation from './FetchLocation'

const random = {
  async timePicker() {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false, // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
      }
    } catch ({ code, message }) {
      console.warn('Cannot open time picker', message);
    }
  }
}


export default class HomeScreen extends Component {
  constructor() {
    super();
    this.getUserHandlerLocation = this.getUserHandlerLocation.bind(this);
  }

  state = {
    userLocation: null
  }

  // ANDROID ONLY
  // Requests ACCESS_FINE_LOCATION permission
  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Cool Photo App Camera Permission',
          'message': 'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Fine location permission granted")
      }
      else {
        console.log("Fine location permission denied")
      }
    }
    catch (err) {
      console.warn(err)
    }
  }

  // Gets user's location coordinates
  async getUserHandlerLocation() {
    // request location permission for android
    if (Platform.OS === 'android') this.requestLocationPermission();

    // set location
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position); // display position to console
        this.setState({ // set state's location coordinates
          userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        });
        console.log(this.state.userLocation)
      },
      err => { console.log(err) });

    // TODO : fix alerts so that they're successful from the start
    if (this.state.userLocation !== null)
      Alert.alert(
        'Success!',
        'Check-in Successful!',
        [
          { text: 'OK' }
        ],
        { cancelable: false }
      );
    else
      Alert.alert(
        'Failed.',
        'Check-in Unsuccessful.',
        [
          { text: 'OK' }
        ],
        { cancelable: false }
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to ShowPup!</Text>
        <FetchLocation onGetLocation={this.getUserHandlerLocation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20
  }
});

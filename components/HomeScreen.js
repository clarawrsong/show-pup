import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TimePickerAndroid,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
  AsyncStorage
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

  _onPressButton() {
    Alert.alert('Hello!')
  }

  // async requestFineLocationPermission() {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         'title': 'Cool Photo App Camera Permission',
  //         'message': 'Cool Photo App needs access to your camera ' +
  //           'so you can take awesome pictures.'
  //       }
  //     )
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log("You can use the camera")
  //     } else {
  //       console.log("Camera permission denied")
  //     }
  //   } catch (err) {
  //     console.warn(err)
  //   }
  // }

  async getUserHandlerLocation() {
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
        console.log("You can use fine location")
        console.log(navigator.geolocation)
        navigator.geolocation.getCurrentPosition(
          position => { console.log(position) },
          err => { console.log(err) });
      } else {
        console.log("Fine location permission denied")
      }

    } catch (err) {
      console.warn(err)
    }

  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Home Screen</Text>
        <TouchableOpacity function={random.timePicker()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Test Button</Text>
          </View>
        </TouchableOpacity> */}
        <FetchLocation onGetLocation={this.getUserHandlerLocation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});

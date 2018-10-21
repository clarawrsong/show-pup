import React, { Component } from 'react';
import { NativeModules, LayoutAnimation, Animated, StyleSheet, Text, View, TimePickerAndroid, Button, TouchableOpacity, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import renderer from 'react-test-renderer'; 

import Bone from './Bone';
import Bowl from './Bowl';

export default class HomeScreen extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  _onBoneGet(){
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 15, h: this.state.h + 15})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Home Screen</Text>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
          
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
          
        </TouchableOpacity>
        <Bone />
        <Bowl />
        <Text>hi</Text>
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
  },
});

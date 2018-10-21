import React, { Component } from 'react';
import { StyleSheet, Button, TouchableOpacity, View, Text } from 'react-native';

export default class FetchLocation extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <View styles={styles.container}>
        <TouchableOpacity onPress={this.props.onGetLocation}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Check In!</Text>
          </View>
        </TouchableOpacity>
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
  button: {
    marginBottom: 30,
    width: 100,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 15,
    color: 'white'
  }
});

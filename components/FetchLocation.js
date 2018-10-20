import React, { Component } from 'react';
import { StyleSheet, Button, TouchableOpacity, View, Text } from 'react-native';

export default class FetchLocation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View styles={styles.container}>
        <TouchableOpacity onPress={this.props.onGetLocation}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Test Button</Text>
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

import React, { Component } from 'react';
import { NativeModules, LayoutAnimation, Animated, StyleSheet, Text, View, TimePickerAndroid, Button, TouchableOpacity, Alert } from 'react-native';


export default class Bone extends React.Component {

    _onBoneGet(){
        LayoutAnimation.spring();
        this.setState({w: this.state.w + 15, h: this.state.h + 15})
    }

    render() {
        return (
          <View style={{flex: 1, flexDirection: 'row'}}>
              <View>
                <View style={styles.leftcircle}/>
                <View style={styles.leftcircle}/>
              </View>
                <View style={styles.rectangle}/>
              <View>
                <View style={styles.rightcircle}/>
                <View style={styles.rightcircle}/>
              </View>


          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      leftcircle: {
        width: 20,
        height:20,
        borderRadius: 100,
        backgroundColor:'#e8e8e8',
        position: 'relative', right: -10,
      },
      rightcircle: {
        width: 20,
        height:20,
        borderRadius: 100,
        backgroundColor:'#e8e8e8',
        position: 'relative', left: -10,
      },
      rectangle:{
          width: 75,
          height: 20,
          backgroundColor: '#e8e8e8',
          position: 'relative', bottom: -10,
      }
      

});

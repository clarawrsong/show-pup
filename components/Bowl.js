import React, { Component } from 'react';
import { NativeModules, LayoutAnimation, Animated, StyleSheet, Text, View, TimePickerAndroid, Button, TouchableOpacity, Alert } from 'react-native';


export default class Bowl extends React.Component {
    render() {
        return (
          <View>     
            <View style={styles.bowl}/> 
            <View style={styles.rectangle}/>
            <View style={styles.hole}/>
            <View style={styles.bowlbot}/> 
        </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      hole: {
        width: 30,
        height:30,
        borderRadius: 30,
        transform: [{scaleX: 3.75}],
        backgroundColor:'#7a687a',
        bottom: 355,
        left: 47,
      },
      bowl: {
        width: 40,
        height:40,
        borderRadius: 40,
        transform: [{scaleX: 3.120}],
        backgroundColor:'#f2a707',
        position: 'relative',
        bottom: 280,
        left: 42.5,
        
      },
      bowlbot: {
        width: 40,
        height:40,
        borderRadius: 40,
        transform: [{scaleX: 3.120}],
        backgroundColor:'#f2a707',
        position: 'relative',
        bottom: 350,
        left: 42.5,
        
      },
      rectangle:{
          width: 125,
          height: 40,
          backgroundColor: '#f2a707',
          position: 'relative',
          bottom: 300,
      }
      

});

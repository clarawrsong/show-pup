
import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen'
import GameScreen from './components/GameScreen'
import ScheduleScreen from './components/ScheduleScreen'

const stackNav = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Home",
      headerLeft: (<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
        {/* <IOSIcon name="ios-menu" size={30} /> */}
        <Text>AGHHHHHHHHH</Text>
      </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 15 }
    })
  },
  Schedule: {
    screen: ScheduleScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Schedule",
    })
  }
});

export default stackNav;

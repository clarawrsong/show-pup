import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen'
import GameScreen from './components/GameScreen'
import ScheduleScreen from './components/ScheduleScreen'

export default class App extends React.Component {

  render() {
    return <RootStack />
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Game: GameScreen,
    Schedule: ScheduleScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

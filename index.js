import React, { Component } from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import SideMenu from './components/SideMenu'
import StackNav from './StackNav/';

const drawernav = DrawerNavigator({
  Item1: {
    screen: StackNav,
  }
}, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,
  });

AppRegistry.registerComponent('showpup', () => drawernav);
/**
 * @format
 */
import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
// import App from './App';
// import HelloWorld from './components/HelloWorld';
// import Robot from './components/Robot';
// import MultipleGreetings from './components/MultipleGreetings';
// import TextBlink from './components/TextBlink';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';
// import FixedDimension from './components/FixedDimension'
import FlexDimension from './components/FlexDimension';
import {name as appName} from './app.json';

// export default class FixedDimension extends Component {
//     render() {
//         return(

//         )
//     }
// }
AppRegistry.registerComponent(appName, () => FlexDimension);

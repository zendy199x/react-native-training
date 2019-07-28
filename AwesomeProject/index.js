/**
 * @format
 */
import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
// import FlexExample from './components/FlexExample';
import JustifyContentExample from './components/JustifyContentExample'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => JustifyContentExample);

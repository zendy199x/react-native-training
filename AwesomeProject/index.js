/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import HelloWorld from './components/HelloWorld';
// import Robot from './components/Robot';
// import MultipleGreetings from './components/MultipleGreetings';
import TextBlink from './components/TextBlink';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TextBlink);

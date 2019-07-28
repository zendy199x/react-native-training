/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import HelloWorld from './components/HelloWorld';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HelloWorld);

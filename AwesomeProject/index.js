/**
 * @format
 */

import React, { Component } from 'react';
// import App from './App';
// import HelloWorld from './components/HelloWorld';
// import Robot from './components/Robot';
// import MultipleGreetings from './components/MultipleGreetings';
// import TextBlink from './components/TextBlink';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import {name as appName} from './app.json';

export default class App extends Component {
    render() {
        return(
            <View style={ styles.container }>
                <Text style = { styles.firstText }>First line</Text>
                <Text style = { styles.secondText }>Second line</Text>
                <Text style = { [styles.secondText, styles.firstText] }>Three line</Text>
                <Text style = { [styles.firstText, styles.secondText] }>Four line</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#28B463',
        borderWidth: 2,
        borderColor: '#1F618D'
    },
    firstText: {
        margin: 5, color: 'black'
    },
    secondText: {
        margin: 5,
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 20
    }
});

AppRegistry.registerComponent(appName, () => App);

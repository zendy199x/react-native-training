/**
 * @format
 */
import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text } from 'react-native';
import {name as appName} from './app.json';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            typedText: 'please type yout text',
            typedPassword: ''
        };
    }
    render() {
        return(
            <View>
                <TextInput style={ {
                    height: 40,
                    margin: 50,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                } }
                keyboardType='email-address'
                placeholder='Enter your email'
                placeholderTextColor='red'
                onChangeText={
                    (text) => {
                        this.setState(
                            (previousState) => {
                                return {
                                    typedText: text
                                };
                            }
                        );
                    }
                }
                />
                <TextInput style={ {
                    height: 40,
                    margin: 50,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                } }
                keyboardType='default'
                placeholder='Enter your email password'
                secureTextEntry={ true }
                onChangeText = {
                    (text) => {
                        {this.setState(
                            () => {
                                return {
                                    typedPassword: text
                                }
                            }
                        )}
                    }
                }
                />
                <Text style={ {marginLeft: 50} }>{ this.state.typedText }</Text>
            </View>
        )
    }
}

AppRegistry.registerComponent(appName, () => App);

/**
 * @format
 */
import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text, Keyboard } from 'react-native';
import {name as appName} from './app.json';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: '',
            typedPassword: '',
            typeDescription: ''
        };
    }

    componentWillMount () { //chạy sau khi hàm render được chạy
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            this.setState(() => {
                return {typedText: 'Keyboard Show'}
            })
        });
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            this.setState(() => {
                return {typedText: 'Keyboard is Hide'}
            })
        })
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    render() {
        return(
            <View>
                <TextInput style={{
                    height: 40,
                    margin: 50,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                keyboardType='email-address'
                placeholder='Enter your email'
                placeholderTextColor='red'
                autoFocus = { true } //khi load sẽ tự động nhảy vào đầu tiên
                onChangeText={(text) => {this.setState((previousState) => {
                    return {
                        typedText: text
                    };
                })}}
                />

                <TextInput style={{
                    height: 40,
                    margin: 50,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                keyboardType='default'
                placeholder='Enter your email password'
                placeholderTextColor = 'green'
                secureTextEntry={ true }
                onChangeText = {(text) => {this.setState (() => {
                    return {
                        typedPassword: text
                    };
                })}}
                />

                <TextInput style={{
                    height: 100,
                    margin: 50,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                mutiline = { true }
                borderBottomColor = 'green' //chỉ dùng cho mutiline (nhiều dòng)
                borderBottomWidth = {3}
                borderLeftColor = 'red'
                borderLeftWidth = {3}
                borderRightColor = 'blue'
                borderRightWidth = {3}
                editable = { true } //cho chỉnh sửa hay không
                returnKeyType = 'done' //nút return textinput
                onSubmitEditing = {Keyboard.dismiss}
                onChange = {(text) => {this.setState(() => {
                    return {
                        typeDescription: text
                    }
                })}}
                />

                <Text style={ {marginLeft: 10} }>Bạn đang đăng nhập tài khoản: { this.state.typedText }</Text>
            </View>
        )
    }
}

AppRegistry.registerComponent(appName, () => App);

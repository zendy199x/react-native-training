import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class JustifyContentExample extends Component {
    render() {
        return(
            <View style={ {
                backgroundColor: 'aquamarine',
                flex: 1,
                flexDirection: 'column',
                // justifyContent: 'flex-start'
                // justifyContent: 'flex-end'
                // justifyContent: 'space-between'
                // justifyContent: 'space-around'
                justifyContent: 'center'
                } }>
                <Text style={{width: 50, height: 50, backgroundColor: 'red'}}></Text>
                <Text style={{width: 50, height: 50, backgroundColor: 'green'}}></Text>
                <Text style={{width: 50, height: 50, backgroundColor: 'blue'}}></Text>
            </View>
        );
    }
}
import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class FB extends React.Component{
    render(){
        return(
            <View style = {{flex : 1, alignItems : "center", justifyContent : "center"}}>
                <Text style = {{fontSize : 30, color : 'purple', textAlign : "center"}}>Facebook</Text>
            </View>
        )
    }
}
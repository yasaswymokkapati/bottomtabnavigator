import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FB from './screens/fb';
import IN from './screens/in';

export default function App() {
  return (
    <View style={styles.container}>

    </View>
  );
}

const TabNavigator = createBottomTabNavigator({
  IN : {
    screen : FB,
    navigationOptions : {
        tabBarIcon : <Image source = {require('./in.jpeg')}/>,
        tabBarLabel : 'Insta'
    }
},
FB : {
    screen : IN,
    navigationOptions : {
        tabBarIcon : <Image source = {require('./fb.png')}/>,
        tabBarLabel : 'Facebook'
    }
}
})

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

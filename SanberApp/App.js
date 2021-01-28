import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './Tugas-13-Styling&Flex/LoginScreen';
import AboutScreen from './Tugas-13-Styling&Flex/AboutScreen';
import { render } from 'react-dom';

export default function App(){
  return (
    <LoginScreen/>
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <HomeScreen/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});






















// import React, { Component } from 'react'
// import { View, Text, StyleSheet, Image } from 'react-native'

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
        
//         <Image source={require('./Tugas-12-Component/image/logo.png')} style={{ width: 200, height: 40 }}/>
//       </View>
//       //<Text style={styles.text}>Hello!</Text>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     backgroundColor: 'whitesmoke',
//     color: '#4A90E2',
//     fontSize: 24,
//     padding: 10,
//   }
//   // image: {
//   //   width: 100,
//   //   height: ,
//   // }
// })

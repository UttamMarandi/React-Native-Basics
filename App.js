//Flexbox component


import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert, Platform, StatusBar,Dimensions } from 'react-native';
import {useDimensions,useDeviceOrientation} from "@react-native-community/hooks" 
import AppButton from './src/components/AppButton';

export default function App() {
  
  return (
    <View style={styles.container}>
      <AppButton title="login" onPress ={()=>console.log("Login Tapped")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent:"center",
    alignItems:"center",
    padding: 20,
  },
  padding:{
    margin: 10,
  }
});

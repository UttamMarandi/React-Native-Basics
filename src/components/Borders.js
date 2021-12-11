// Borders


import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert, Platform, StatusBar,Dimensions } from 'react-native';
import {useDimensions,useDeviceOrientation} from "@react-native-community/hooks" 
import AppButton from './src/components/AppButton';

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={{
      backgroundColor:"dodgerblue",
      borderColor:"royalblue",
      borderWidth:8,
      height: 100,
      width: 100,
      borderRadius:50
      }}>
      
    </View>
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

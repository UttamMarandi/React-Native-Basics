// Margin


import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert, Platform, StatusBar,Dimensions } from 'react-native';
import {useDimensions,useDeviceOrientation} from "@react-native-community/hooks" 
import AppButton from './src/components/AppButton';

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={{
        backgroundColor:"dodgerblue",
        height: 100,
        width: 100,
        padding: 20,//paddingHorizental , paddingVertical , paddingLeft, paddingRight
        }}>
          <View style={{width:50,height:50,backgroundColor:"gold"}}>

          </View>
      
      </View>
      <View style={{
          width: 100,
          height: 100,
          backgroundColor:"tomato",
          margin: 20 //marginHorizental, marginVertical, marginLeft, marginRight
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

// Shadow


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
      //ios
      shadowColor:"grey",
      shadowOffset:{width:0,height:8},//shadow apllied on right and bottom. if values are negative than apllied on left and top respectively
      shadowOpacity:1,//opacity of the shdaow
      shadowRadius:10,//shoftness of the shadow

      //all the above properties are not available in android, so we cannot even change color
      //we only have elevation property in android

      elevation:50
      
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

// Button component

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';

export default function App() {
  // console.log("App executed");
  let x;
  const handlePress = () => console.log("Text pressed");
  console.log("return of require",require("./assets/favicon.png"));//returns a number that is a reference to the image
  
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native!</Text> 
      <StatusBar style="auto" />
      <Image source = {require("./assets/favicon.png")}/>
      
    </SafeAreaView>
    //View is like a div in react native
    //SafeAreaView also takes notches/teardrops into consideration. so applies padding automatically
    //SafeAreaView is not availaible in chrome
    //Text is like the p tag of html
    //numberOfLines depicts how many lines are allowed for this Text component
    //onPress allows to run a function when the Text is clicked

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',

  },
  padding:{
    margin: 10,
  }
});


//Steps
//1.intall npm i -g expo cli
//2.expo init ProjectName

//To reload android emulator : Ctrl + R
//For settings: Ctrl + Ms
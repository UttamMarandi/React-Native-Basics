// Button component

// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert, Platform, StatusBar } from 'react-native';

export default function App() {
  // console.log("App executed");
  let x;
  const handlePress = () => console.log("Text pressed");
  console.log("return of require",require("./assets/favicon.png"));//returns a number that is a reference to the image
  
  return (
    <SafeAreaView style={[styles.container,containerStyle]}>
      {/* style can also take an array , right side object takes more priority */}
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native!</Text> 
      <StatusBar style="auto" />
      <Image source = {require("./assets/favicon.png")}/>

      <Button title="Click me" onPress={()=>console.log("Button clicked")} color="orange"/>
      {/* Button takes title and onPress props. these are mandatory */}
      {/* alert */}

      <Button title="Click me alert" onPress={()=>alert("Button clicked")} color="green"/>
      {/* Alert.alert */}

      <Button title="Click me Alert" onPress={()=>Alert.alert("My title","My message",[{text:"Yes",onPress:()=>console.log("yes")},{text:"No",onPress:()=>console.log("No")}])} color="green"/>
      {/* Maximum 3 buttons in android */}

      {/* Alert.prompt */}
      <Button title="Click me prompt" onPress={()=>Alert.prompt("My title","My message", text => console.log(text))} color="green"/>
      {/* text it the content that the user enters */}
      {/* prompt does not work on android */}


    </SafeAreaView>
    

    
  );
}
const containerStyle = {backgroundColor:"pink"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:Platform.OS === "android" ? 20:0,
    // Platform module helps us impement platform specific styles. It has many props like OS, isTV , isIpad
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //StatusBar.currentHeight return the height of the statusbar. StatusBar used here is a react-natiove component and not a "expo-status-bar" component
    

  },
  padding:{
    margin: 10,
  }
});
// Stylesheet api helps us create css for our UI. 
//Reason to use Stylesheet : validation : provides error if we misspell css
//optimization


// Touchable component

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
      <TouchableWithoutFeedback onPress={()=>console.log("Image tapped")}>
        {/* TouchableWithoutFeedback allows us to run a function without giving any feedback to client */}
      <Image 
        blurRadius={1} //blurs the image
        fadeDuration={1000}//fade in on load
        source={{
        width: 200,
        height: 300,
        uri:"https://i.picsum.photos/id/960/200/300.jpg?hmac=lMLI27rQoFOVbWUEFQBILnVA_jFYw2b8KHACIGkDLD4"}}/>
        </TouchableWithoutFeedback>

      <TouchableOpacity onPress={()=>console.log("Image tapped")}>
        {/*Touchable opacity reduces the opacity of the wrapped element for a fraction of a second*/}
        <Image style={styles.padding}
        blurRadius={1} //blurs the image
        fadeDuration={1000}//fade in on load
        source={{
        width: 200,
        height: 300,
        uri:"https://i.picsum.photos/id/960/200/300.jpg?hmac=lMLI27rQoFOVbWUEFQBILnVA_jFYw2b8KHACIGkDLD4"}}/>
      </TouchableOpacity>
      <TouchableHighlight onPress={()=>console.log("Image tapped")}>
        {/*Touchable opacity reduces the opacity of the wrapped element for a fraction of a second*/}
        <Image style={styles.padding}
        blurRadius={1} //blurs the image
        fadeDuration={1000}//fade in on load
        source={{
        width: 200,
        height: 300,
        uri:"https://i.picsum.photos/id/960/200/300.jpg?hmac=lMLI27rQoFOVbWUEFQBILnVA_jFYw2b8KHACIGkDLD4"}}/>
      </TouchableHighlight>
      <TouchableNativeFeedback onPress={()=>console.log("Image tapped")}>
        {/*TouchableNativeFeedback works with componets which has background color. So it will not work with images*/}
        {/* TouchableNativeFeedback creates a ripple effect on click , works in android only */}
        <View style={{width:200,height:70,backgroundColor:"green"}}>

        </View>
        {/* <Image style={styles.padding}
        blurRadius={1} //blurs the image
        fadeDuration={1000}//fade in on load
        source={{
        width: 200,
        height: 300,
        uri:"https://i.picsum.photos/id/960/200/300.jpg?hmac=lMLI27rQoFOVbWUEFQBILnVA_jFYw2b8KHACIGkDLD4"}}/> */}
      </TouchableNativeFeedback>
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
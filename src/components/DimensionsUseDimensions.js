//Dimensions component

// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert, Platform, StatusBar,Dimensions } from 'react-native';
import {useDimensions,useDeviceOrientation} from "@react-native-community/hooks" 

export default function App() {
  console.log(Dimensions.get("screen"));
  //Dimensions.get returns the height,width ,scale and fontScale of the either screen or window. screen represents the entire screen and window represens the size of application window.
  //screen and window size equal in iphones but window is bit smaller than screen in android
  //Dimension module do not respond to orientation changes

  console.log("useDimensions",useDimensions());
  //returns the dimension (height,width,scalefactor) 
  //it can detect orientation changes and change height and width accordingly
  
  console.log("useDevice orientation",useDeviceOrientation());//returns landscape or portrait
//  returns true,false for landscape and portrait depending on the orientation
  // {
//   "landscape": false,
//   "portrait": true,
// }

  const {landscape} = useDeviceOrientation();
  
  return (
    <SafeAreaView style={styles.container}>
      {/* style can also take an array , right side object takes more priority */}
      <View style={{
        backgroundColor:"pink",
        width: "100%",
        height: landscape ? "100%" : "30%"
      }}>

      </View>

    </SafeAreaView>
  );
}
const containerStyle = {backgroundColor:"pink"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  padding:{
    margin: 10,
  }
});
// Stylesheet api helps us create css for our UI. 
//Reason to use Stylesheet : validation : provides error if we misspell css
//optimization

//In mobile devies
//Pixels : dip * scale factor = pixels
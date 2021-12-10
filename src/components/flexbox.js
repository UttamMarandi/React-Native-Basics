//Flexbox component


import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert, Platform, StatusBar,Dimensions } from 'react-native';
import {useDimensions,useDeviceOrientation} from "@react-native-community/hooks" 

export default function App() {
  

  const {landscape} = useDeviceOrientation();
  
  return (
    <View style={{backgroundColor:"#fff",flex:1,flexDirection:"row",justifyContent:"center", flexWrap:"wrap",alignItems:"center",}}>
      {/* <View style={{backgroundColor:"dodgerblue",flex:2}}/>
      <View style={{backgroundColor:"green",flex:1}}/>
      <View style={{backgroundColor:"red",flex:1}}/> */}

      <View style={{backgroundColor:"dodgerblue",width:100,height:300}}/>
      <View style={{backgroundColor:"green",width:100,height:100}}/>
      <View style={{backgroundColor:"red",width:100,height:100}}/>
      <View style={{backgroundColor:"grey",width:100,height:100}}/>
      <View style={{backgroundColor:"tomato",width:100,height:100}}/>

    </View>
  );
}
// Flexbox in react native by default coloumn aligned
//flex direction property is used  to change default alignment : row,coloumn,row-reverse,coloumn-reverse
//flex direction value is the primary axis , opposite axis is the secondry / cross axis
//justifuContent : to align in primary axis
//alignItem: to align in secondry axis
//stretch is default property for alignItems and justifyContent
//alignSelf property is used to align individual flex items

//default behavior for more items than than the view
//elements at end get shrunk ..we can use flex wrap to wrap the items

//When flexwrap property is true , then alignItems property / secondry axis alignment property aligns the items based on individual line formed by wrap rathen than the container

//to set alignment of the the whole view/flex parent we use alignContent property. 
//so alignContent property in a sense gets activated when flex wrap property is defined

// flexbasis, flexgrow , flexshrink
//flexbasis allows to set the size of item along the primary axis
//flexgrow is same to flex property
//flexshrik is opposite of flexgrow property

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
  padding:{
    margin: 10,
  }
});

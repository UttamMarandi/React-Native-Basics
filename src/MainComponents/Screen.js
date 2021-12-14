import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";
import colors from "../config/colors";

const Screen = ({ children, style }) => {
  // hre children is the object that contains all the content within SafeAreaView
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
// safeAreaView does not support horizental padding. so we need to pass style to it as props
export default Screen;

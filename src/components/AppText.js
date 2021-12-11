import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};
// childre object is a special object in props that stores whatever is written between opening and closing tag of AppText
//This way we can build our own text component like Heading, H2 and p.

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;

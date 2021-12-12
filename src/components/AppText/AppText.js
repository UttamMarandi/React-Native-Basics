import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
// import styles from "./AppTextStyles";

const AppText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};
// childre object is a special object in props that stores whatever is written between opening and closing tag of AppText
//This way we can build our own text component like Heading, H2 and p.
//style is also the styles props that is passed to appText

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
        fontSize: 20,
        color: "black",
      },
      android: {
        fontFamily: "Roboto",
        fontSize: 15,
        color: "grey",
      },
    }),
  },
});
// Platform.select() takes properties for ios, android or ipad,tv and takes css rules as object for those keys.
//Platform.select() returns an object, so we need to spread it in oirder to use it.

export default AppText;

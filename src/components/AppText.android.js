// When platform specific code is complex we have to use ios or android extensions
//I had to delete the AppText.js for AppText.ios.js and AppText.android.js. maybe it's a bug
//We don't need Platform module anymore..anything we write here will take affect depending on the OS type

import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};
// childre object is a special object in props that stores whatever is written between opening and closing tag of AppText
//This way we can build our own text component like Heading, H2 and p.

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    fontSize: 28,
    color: "grey",
    textAlign: "center",
    textTransform: "capitalize",
  },
});
// Platform.select() takes properties for ios, android or ipad,tv and takes css rules as object for those keys.
//Platform.select() returns an object, so we need to spread it in oirder to use it.

export default AppText;

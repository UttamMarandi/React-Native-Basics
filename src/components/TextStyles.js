// Text Styles

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import AppButton from "./src/components/AppButton";
import AppText from "./src/components/AppText";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontFamily: Platform.OS === "android" ? "Roboto" : "Courier",
          fontStyle: "italic",
          fontWeight: "100",
          textAlign: "center",
          lineHeight: 60,
        }}
      >
        I love React Native! This is the simplest way to build apps
      </Text>
      <AppText>Encapsulating styles for text</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  padding: {
    margin: 10,
  },
});

//We don't have css inheritence in apps. Meaning style defined in top leve will not get implemented in bottom level.

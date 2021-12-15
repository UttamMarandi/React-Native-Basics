import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
const AppTextInput = ({ icon, color, placeholder }) => {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={30} color={color} />}
      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    borderRadius: 20,
    width: "10%",
    padding: 12,
    flexDirection: "row",
    width: "100%",
  },
  textInput: defaultStyles.text,
});

export default AppTextInput;

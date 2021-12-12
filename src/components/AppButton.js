import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

const AppButton = ({ title, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    padding: 15,
    width: "100%",
    // cursor is not a css rule in react native
    marginVertical: 10,
  },
  text: {
    color: colors.secondary,
    fontWeight: "300",
    fontSize: 18,
    textTransform: "uppercase",
  },
});

export default AppButton;

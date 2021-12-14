import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItemDelete = () => {
  return (
    <View style={styles.swipe}>
      <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
    </View>
  );
};
const styles = StyleSheet.create({
  swipe: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDelete;

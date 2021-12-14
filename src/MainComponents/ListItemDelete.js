import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItemDelete = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.swipe}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
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

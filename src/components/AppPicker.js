import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import Screen from "../MainComponents/Screen";
import AppText from "./AppText/AppText";
import PickerItem from "./PickerItem";
const AppPicker = ({
  color,
  icon,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
}) => {
  const [category, setCategory] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons name={icon} size={30} color={color} />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons name="chevron-down" size={30} color={color} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.label}
            renderItem={({ item, index, separator }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
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
    marginBottom: 20,
    alignItems: "center",
  },
  text: {
    flex: 1, //flex 1 lets the text to cover the entire availaible space. so the icon is placed on far right
  },
  textInput: defaultStyles.text,
});

export default AppPicker;

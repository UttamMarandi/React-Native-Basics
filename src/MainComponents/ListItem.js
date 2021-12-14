import React from "react";
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({ title, subtitle, image, onPress, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.grey} //this is the color to which background changes on tap.
        onPress={onPress}
      >
        {/* in TouchableHighlight the selected item gets highlighted meaning it's background color changes */}
        <View>
          <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    paddingLeft: 20,
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.primary,
    fontWeight: "bold",
  },
});

export default ListItem;

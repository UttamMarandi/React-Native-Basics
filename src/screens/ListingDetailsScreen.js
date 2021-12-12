import React from "react";
import { Image, StyleSheet, View } from "react-native";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../../assets/red_shirt.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
});

export default ListingDetailsScreen;

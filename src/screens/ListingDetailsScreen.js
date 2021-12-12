import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import ListItem from "../MainComponents/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../../assets/red_shirt.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
      <View>
        <ListItem
          image={require("../../assets/profile.jpg")}
          title="Mika Phugisiro"
          subtitle="5 Listings"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
  },
});

export default ListingDetailsScreen;

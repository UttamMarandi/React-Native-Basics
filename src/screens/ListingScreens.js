import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../MainComponents/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jackets for sale",
    price: 100,
    image: require("../../assets/red_shirt.jpg"),
  },
  {
    id: 2,
    title: "Coush for hall",
    price: 1000,
    image: require("../../assets/background.jpg"),
  },
];

const ListingScreens = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(list) => list.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={`$ ${item.price}`}
            image={item.image}
          />
        )}
        // renderItem props name has to be named item. takes three parameters item,index and separators
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    // by default horizental padding does not work on SafeAreaView.But if we pass style props containing horizental padding to it, it works
    backgroundColor: colors.grey,
  },
});

export default ListingScreens;

import React from "react";
import { Text, View } from "react-native";
import Card from "./Card";

const CardComponent = () => {
  return (
    <View style={{ backgroundColor: "#f8f8f8", padding: 20, paddingTop: 100 }}>
      <Card
        title="Red jacket for sale"
        subtitle="$100"
        image={require("../../assets/red_shirt.jpg")}
      />
    </View>
  );
};

export default CardComponent;

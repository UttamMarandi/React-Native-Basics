import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText/AppText";

const Card = ({ title, subtitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      {/* We are trying to load image dynamically , so the value of soucre  is not known when we load it. We can solve this by using require where Card component is called. We just pass the image path to image props  */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden", //gives the rounded cornor as content overflow is not shown
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 10,
  },
  subtitle: {
    color: colors.primary,
    fontWeight: "bold",
  },
});

export default Card;

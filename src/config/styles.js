import { Platform } from "react-native";
import colors from "./colors";

export default {
  text: {
    color: colors.grey,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.secondary,
  },
};

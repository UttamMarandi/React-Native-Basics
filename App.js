// Icons

import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import AppButton from "./src/components/AppButton";
import AppText from "./src/components/AppText/AppText";
import styles from "./src/components/AppText/AppTextStyles";
import WelcomeScreen from "./src/MainComponents/WelcomeScreen";
import CardComponent from "./src/components/CardComponent";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen";
import MessagesScreen from "./src/screens/MessagesScreen";

export default function App() {
  return <MessagesScreen />;
}

//We don't have css inheritence in apps. Meaning style defined in top leve will not get implemented in bottom level.

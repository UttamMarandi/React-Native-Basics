// Icons

import React, { useState } from "react";
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
  TextInput,
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
import Screen from "./src/MainComponents/Screen";
import Icon from "./src/MainComponents/Icon";
import ListItem from "./src/MainComponents/ListItem";
import ListingScreens from "./src/screens/ListingScreens";
import AccountScreen from "./src/screens/AccountScreen";
import { borderBottomColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import AppTextInput from "./src/components/AppTextInput";

export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <AppTextInput icon="email" color="tomato" placeholder="UserName" />
    </Screen>
  );
}

//We don't have css inheritence in apps. Meaning style defined in top leve will not get implemented in bottom level.

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
  Switch,
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
import SwitchComponent from "./src/components/SwitchComponent";
import AppPicker from "./src/components/AppPicker";
import LoginScreen from "./src/MainComponents/LoginScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [cartegory, setCategory] = useState();
  return (
    <Screen>
      <LoginScreen />
    </Screen>
  );
}

//We don't have css inheritence in apps. Meaning style defined in top leve will not get implemented in bottom level.

import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";

import Screen from "./Screen";

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Screen>
      <Image source={require("../../assets/icon.png")} style={styles.logo} />
      <AppTextInput
        autoCapitalize="none" //will not capitalize text
        autoCorrect={false} //not correct automatically
        icon="email"
        placeholder="Email"
        keyboardType="email-address"
        color="red"
        textContentType="emailAddress" //only works on ios only
        onChangeText={(value) => setEmail(value)}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Placeholder"
        color="red"
        secureTextEntry={true}
        textContentType="password"
        onChangeText={(value) => setPassword(value)}
      />
      <AppButton title="Login" onPress={console.log(email, password)} />
    </Screen>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 80,
    marginBottom: 20,
  },
});

export default LoginScreen;

import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText/AppText";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "./Screen";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "./AppFormField";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"), //we require label b.c when we show errors we want to display "Email" and not email
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = () => {
  //   const [email, setEmail] = useState();
  //   const [password, setPassword] = useState();
  return (
    <Screen>
      <Image source={require("../../assets/icon.png")} style={styles.logo} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, handleChange, errors, setFieldTouched, touched }) => (
          <>
            <AppFormField
              autoCapitalize="none" //will not capitalize text
              autoCorrect={false} //not correct automatically
              icon="email"
              placeholder="Email"
              keyboardType="email-address"
              color="red"
              textContentType="emailAddress" //only works on ios only
              //   onChangeText={(value) => setEmail(value)}
              name="email"
            />

            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Placeholder"
              color="red"
              secureTextEntry={true}
              textContentType="password"
              //   onChangeText={(value) => setPassword(value)}
              name="password"
            />

            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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

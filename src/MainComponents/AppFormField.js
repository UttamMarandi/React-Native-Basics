import React from "react";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";
import { useFormikContext } from "formik";

const AppFormField = ({ name, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        //   autoCapitalize="none" //will not capitalize text
        //   autoCorrect={false} //not correct automatically
        //   icon="email"
        //   placeholder="Email"
        //   keyboardType="email-address"
        //   color="red"
        //   textContentType="emailAddress" //only works on ios only
        //   onChangeText={(value) => setEmail(value)}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)} //this let's us know which input field is currently being edited
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
      {/* errors[name] and not errors.name b.c name is not availaible in error. but errors[name] checks the value for the key for which name is defined */}
    </>
  );
};

export default AppFormField;

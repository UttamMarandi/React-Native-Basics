import React from "react";
import ListItem from "../MainComponents/ListItem";
import Screen from "../MainComponents/Screen";

const AccountScreen = () => {
  return (
    <Screen>
      <ListItem
        title="Uttam Marandi"
        subtitle="uttammarandi007@gmail.com"
        image={require("../../assets/profile.jpg")}
      />
    </Screen>
  );
};

export default AccountScreen;

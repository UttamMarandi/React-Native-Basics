import React, { useState } from "react";
import { Switch } from "react-native";
import Screen from "../MainComponents/Screen";

const SwitchComponent = () => {
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
};

export default SwitchComponent;

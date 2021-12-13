import React from "react";
import { FlatList } from "react-native";
import ListItem from "../MainComponents/ListItem";

const messages = [
  {
    id: 1,
    title: "T1",
    desciption: "D1",
    image: require("../../assets/profile.jpg"),
  },
  {
    id: 2,
    title: "T2",
    desciption: "D2",
    image: require("../../assets/profile.jpg"),
  },
];

const MessagesScreen = () => {
  return (
    //   Flatlist provides performant interface for rendering basic, flat lists. basically , it is used to render lists from data. Instead of using map method we use flatlist.
    <FlatList
      data={messages} //this is the data that will be used to render dynamic content.
      keyExtractor={(item) => item.id.toString()} //as in react we need a key to uniqly identify each list. that's why keyExtractor.
      //we need to convert the id to a string , if not it shows error
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subtitle={item.desciption}
          image={item.image}
        />
        // renderItem takes an item from data and renders it into the list.
        //takes three parameters item,index,separators.
      )}
    />
  );
};

export default MessagesScreen;

import React, { useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import ListItem from "../MainComponents/ListItem";
import Constants from "expo-constants";
import Screen from "../MainComponents/Screen";
import ListItemSeparator from "../MainComponents/ListItemSeparator";
import ListItemDelete from "../MainComponents/ListItemDelete";
// console.log("constants", Constants);
//gives us information about the devices. one of them is statusBarHeight

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    //delete message from messages array
    //hooks cannot be used in class component
    const newMessages = messages.filter((m) => m.id !== message.id);
    // return all m where message id not equal to to m.id
    setMessages(newMessages);
    //this causes a re-render every time handleDelete is called. That's why we use useState hooks
  };

  return (
    //   Flatlist provides performant interface for rendering basic, flat lists. basically , it is used to render lists from data. Instead of using map method we use flatlist.
    <Screen>
      <FlatList
        data={messages} //this is the data that will be used to render dynamic content.
        keyExtractor={(item) => item.id.toString()} //as in react we need a key to uniqly identify each list. that's why keyExtractor.
        //we need to convert the id to a string , if not it shows error
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.desciption}
            image={item.image}
            onPress={() => console.log("message seledted")}
            renderRightActions={() => (
              <ListItemDelete onPress={() => handleDelete(item)} />
            )}
            //if we use a function than we pass a component to prop
            //if we don't use a function then just passing the component name will do the work.
          />
          // renderItem takes an item from data and renders it into the list.
          //takes three parameters item,index,separators.
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        //ItemSeparatorComponent is a component that is rendered in between each item, but not at the top or bottom
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "T3",
              desciption: "D3",
              image: require("../../assets/profile.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  //   screen: {
  //     // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  //     // this is the way to add padding for android devices.
  //     paddingTop: Constants.statusBarHeight,
  //   },
});

export default MessagesScreen;

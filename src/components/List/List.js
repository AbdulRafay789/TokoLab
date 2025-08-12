import React from "react";
import { FlatList, View, Text } from "react-native";
import Item from "../Item/Item";

export default function List({ users, onSelect }) {
  if (!users || users.length === 0) {
    return <View style={{ padding: 20 }}><Text>No results</Text></View>;
  }
  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Item user={item} onSelect={onSelect} />}
    />
  );
}

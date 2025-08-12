import React from "react";
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from "react-native";

export default function Item({ user, onSelect }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <TouchableOpacity onPress={() => onSelect(user.login)}>
          <Text style={styles.name}>{user.login}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(user.html_url)}>
          <Text style={styles.link}>View Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: "row", alignItems: "center", padding: 10, borderBottomWidth: 1, borderColor: '#eee' },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  name: { fontWeight: "bold", fontSize: 16 },
  link: { marginTop: 4, color: "blue" },
});

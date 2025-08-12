
import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

export default function UserItem({ user, onSelect }) {
  return (
    <View style={styles.row}>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
      <TouchableOpacity onPress={onSelect} style={{flex:1}}>
        <Text style={styles.login}>{user.login}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(user.html_url)}>
        <Text style={styles.link}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection:'row', alignItems:'center', padding:10, borderBottomWidth:1, borderColor:'#eee' },
  avatar: { width:50, height:50, borderRadius:25, marginRight:10 },
  login: { fontWeight:'bold' },
  link: { color:'blue' }
});

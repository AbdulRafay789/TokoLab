
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

export default function UserModal({ isVisible, user, onClose }) {
  if (!user) return null;
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.container}>
        <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
        <Text style={styles.name}>{user.name || user.login}</Text>
        <Text>Followers: {user.followers}</Text>
        <Text>Following: {user.following}</Text>
        <Text>Location: {user.location || 'N/A'}</Text>
        <TouchableOpacity onPress={onClose} style={styles.btn}><Text style={{color:'#fff'}}>Close</Text></TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor:'#fff', padding:20, borderRadius:10, alignItems:'center' },
  avatar:{ width:100, height:100, borderRadius:50, marginBottom:10 },
  name:{ fontWeight:'bold', fontSize:18, marginBottom:6 },
  btn:{ marginTop:12, backgroundColor:'red', padding:8, borderRadius:6 }
});

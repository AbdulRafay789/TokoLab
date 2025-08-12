
import React from 'react';
import { FlatList, ActivityIndicator, View, Text } from 'react-native';
import UserItem from './UserItem';

export default function UserList({ users, loading, onSelect }) {
  if (loading) return <ActivityIndicator size="large" />;
  if (!users || users.length === 0) return <View style={{padding:20}}><Text>No results</Text></View>;

  return (
    <FlatList
      data={users}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <UserItem user={item} onSelect={() => onSelect(item.login)} />}
    />
  );
}

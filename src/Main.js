
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SearchInput from './components/SearchInput';
import UserList from './components/UserList';
import UserModal from './components/UserModal';
import { fetchUsers, fetchUserDetails, clearSelectedUser } from './redux/actions/githubActions';

export default function Main() {
  const dispatch = useDispatch();
  const { users, loading, selectedUser } = useSelector(state => state.github);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearch = (query) => {
    if (!query || query.trim() === '') return;
    dispatch(fetchUsers(query));
  };

  const handleSelect = async (username) => {
    await dispatch(fetchUserDetails(username));
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
    dispatch(clearSelectedUser());
  };

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <SearchInput onSearch={handleSearch} />
      <UserList users={users} loading={loading} onSelect={handleSelect} />
      <UserModal isVisible={modalVisible} user={selectedUser} onClose={handleClose} />
    </View>
  );
}

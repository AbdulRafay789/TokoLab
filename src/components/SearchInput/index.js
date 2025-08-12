import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet } from 'react-native';

let timeoutId;

export default function SearchInput({ onSearch }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    clearTimeout(timeoutId);
    if (query.trim() === '') return;
    timeoutId = setTimeout(() => {
      onSearch(query);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <TextInput
      style={styles.input}
      placeholder="Search GitHub users..."
      value={query}
      onChangeText={setQuery}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 8,
  },
});

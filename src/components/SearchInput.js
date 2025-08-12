
import React, { useState, useEffect, useRef } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function SearchInput({ onSearch }) {
  const [q, setQ] = useState('');
  const timer = useRef(null);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    if (!q || q.trim() === '') return;
    timer.current = setTimeout(() => {
      onSearch(q.trim());
    }, 1000);
    return () => clearTimeout(timer.current);
  }, [q]);

  return (
    <TextInput
      value={q}
      onChangeText={setQ}
      placeholder="Search GitHub users..."
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginBottom: 12 }
});

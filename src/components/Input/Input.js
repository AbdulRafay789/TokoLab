import React, { useState, useEffect, useRef } from "react";
import { TextInput, View, StyleSheet } from "react-native";

export default function Input({ onSearch }) {
  const [text, setText] = useState("");
  const timer = useRef(null);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    if (text.trim()) {
      timer.current = setTimeout(() => {
        onSearch(text.trim());
      }, 1000);
    }
    return () => clearTimeout(timer.current);
  }, [text]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search GitHub Users..."
        value={text}
        onChangeText={setText}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
});

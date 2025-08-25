import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MyProjectsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Projects will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16
  }
});

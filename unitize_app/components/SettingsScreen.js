import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const settings = [
  'Profile',
  'Security',
  'Notifications',
  'Language',
  'Log Out'
];

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      {settings.map(item => (
        <Text key={item} style={styles.item}>{item}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  item: {
    fontSize: 16,
    marginBottom: 8
  }
});

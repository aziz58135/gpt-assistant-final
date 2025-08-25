import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const services = [
  'Design Purchase',
  'Land Purchase',
  'Consultation Request',
  'Financing Calculator',
  'Construction Calculator'
];

export default function ServicesScreen() {
  return (
    <View style={styles.container}>
      {services.map(service => (
        <Text key={service} style={styles.item}>{service}</Text>
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

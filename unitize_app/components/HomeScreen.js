import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

function DashboardCard() {
  return (
    <View style={styles.dashboard}>
      <Text style={styles.dashboardTitle}>Project Stages</Text>
      <Text>Documents & Licenses → Execution → Title Deed</Text>
    </View>
  );
}

function QuickActions() {
  const actions = [
    { title: 'My Groups' },
    { title: 'Deposit' },
    { title: 'Withdraw' },
    { title: 'Upgrade' }
  ];
  return (
    <View style={styles.quickActions}>
      {actions.map(action => (
        <TouchableOpacity key={action.title} style={styles.quickActionButton}>
          <Text style={styles.quickActionText}>{action.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <DashboardCard />
      <QuickActions />
      <Section title="Latest Projects">
        <Text>Sample Project A – Riyadh – 80% funded</Text>
        <Text>Sample Project B – Jeddah – 40% funded</Text>
      </Section>
      <Section title="Latest Groups">
        <Text>North Riyadh Villas</Text>
        <Text>Jeddah Apartments</Text>
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff'
  },
  dashboard: {
    backgroundColor: '#315A9B',
    padding: 20,
    borderRadius: 8,
    marginBottom: 16
  },
  dashboardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  quickActionButton: {
    backgroundColor: '#e6e6e6',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center'
  },
  quickActionText: {
    fontSize: 12
  },
  section: {
    marginBottom: 24
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  }
});

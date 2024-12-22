import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatsGrid = ({ stats }) => {
  const statItems = [
    { key: 'streak', label: 'Study Streak', value: stats.streak, icon: '🔥' },
    { key: 'totalScore', label: 'Total Score', value: stats.totalScore, icon: '🏆' },
    { key: 'questionsAnswered', label: 'Questions', value: stats.questionsAnswered, icon: '📚' },
    { key: 'accuracy', label: 'Accuracy', value: stats.accuracy, icon: '🎯' }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {statItems.map(item => (
          <View key={item.key} style={styles.statCard}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 16
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: -8
  },
  statCard: {
    width: '50%',
    padding: 8
  },
  icon: {
    fontSize: 24,
    marginBottom: 4
  },
  label: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 2
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default StatsGrid;
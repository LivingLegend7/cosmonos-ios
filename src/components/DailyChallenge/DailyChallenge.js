import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DailyChallenge = ({ progress, total, reward }) => {
  const percentage = (progress / total) * 100;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Daily Challenge</Text>
      <Text style={styles.description}>Complete {total} DCF modeling questions</Text>
      
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${percentage}%` }]} />
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.progress}>{progress}/{total} Completed</Text>
        <Text style={styles.reward}>{reward}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EBF5FF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E3A8A',
    marginBottom: 4
  },
  description: {
    fontSize: 14,
    color: '#3B82F6',
    marginBottom: 12
  },
  progressContainer: {
    height: 8,
    backgroundColor: '#DBEAFE',
    borderRadius: 4,
    marginBottom: 8
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#3B82F6',
    borderRadius: 4
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  progress: {
    fontSize: 12,
    color: '#3B82F6'
  },
  reward: {
    fontSize: 12,
    color: '#3B82F6'
  }
});

export default DailyChallenge;
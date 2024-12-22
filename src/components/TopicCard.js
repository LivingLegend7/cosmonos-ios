import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ProgressBar from './ProgressBar';

const TopicCard = ({ topic, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{topic.title}</Text>
      <Text style={styles.description}>{topic.description}</Text>
      <View style={styles.statsContainer}>
        <View style={styles.difficultyBadge}>
          <Text style={styles.difficultyText}>{topic.difficulty}</Text>
        </View>
        <Text style={styles.timeEstimate}>{topic.timeEstimate}</Text>
      </View>
      <ProgressBar progress={topic.progress} total={topic.total} />
      <Text style={styles.progressText}>
        {topic.progress}/{topic.total} Completed
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  difficultyBadge: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
  },
  difficultyText: {
    fontSize: 12,
    color: '#4b5563',
  },
  timeEstimate: {
    fontSize: 12,
    color: '#6b7280',
  },
  progressText: {
    fontSize: 12,
    color: '#4b5563',
    marginTop: 4,
  },
});

export default TopicCard;
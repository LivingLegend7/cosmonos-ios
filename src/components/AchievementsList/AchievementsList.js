import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AchievementsList = ({ achievements }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Achievements</Text>
      
      <View style={styles.list}>
        {achievements.map(achievement => (
          <View key={achievement.id} style={styles.achievement}>
            <Text style={styles.icon}>{achievement.icon}</Text>
            <View style={styles.content}>
              <Text style={styles.achievementTitle}>{achievement.title}</Text>
              <Text style={styles.description}>{achievement.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 16
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16
  },
  list: {
    gap: 16
  },
  achievement: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    fontSize: 24,
    marginRight: 12
  },
  content: {
    flex: 1
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2
  },
  description: {
    fontSize: 14,
    color: '#6B7280'
  }
});

export default AchievementsList;
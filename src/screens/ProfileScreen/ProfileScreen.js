import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import StatsGrid from '../../components/StatsGrid';
import AchievementsList from '../../components/AchievementsList';
import ActivityFeed from '../../components/ActivityFeed';

const ProfileScreen = () => {
  const userStats = {
    streak: 7,
    totalScore: 1560,
    questionsAnswered: 42,
    accuracy: '92%'
  };

  const achievements = [
    {
      id: 1,
      title: 'Quick Learner',
      description: 'Completed 5 lessons in one day',
      icon: '🌟'
    },
    {
      id: 2,
      title: 'Streak Master',
      description: 'Maintained a 7-day streak',
      icon: '🏆'
    },
    {
      id: 3,
      title: 'Top Performer',
      description: 'Ranked in top 10%',
      icon: '🎯'
    }
  ];

  const activities = [
    {
      id: 1,
      type: 'completion',
      content: 'Completed "DCF Modeling Basics"',
      timestamp: '2h ago'
    },
    {
      id: 2,
      type: 'achievement',
      content: 'Earned "Streak Master" badge',
      timestamp: '5h ago'
    },
    {
      id: 3,
      type: 'start',
      content: 'Started "M&A Fundamentals"',
      timestamp: '1d ago'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://via.placeholder.com/100' }}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>Alex Chen</Text>
          <Text style={styles.school}>Cornell University</Text>
        </View>
      </View>

      <StatsGrid stats={userStats} />
      <AchievementsList achievements={achievements} />
      <ActivityFeed activities={activities} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 16
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16
  },
  userInfo: {
    flex: 1
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4
  },
  school: {
    fontSize: 16,
    color: '#6B7280'
  }
});

export default ProfileScreen;
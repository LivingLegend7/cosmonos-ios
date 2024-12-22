import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ActivityFeed = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'completion':
        return '✅';
      case 'achievement':
        return '🏆';
      case 'start':
        return '🎯';
      default:
        return '📝';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Activity</Text>
      
      <View style={styles.feed}>
        {activities.map(activity => (
          <View key={activity.id} style={styles.activity}>
            <Text style={styles.icon}>{getActivityIcon(activity.type)}</Text>
            <View style={styles.content}>
              <Text style={styles.activityText}>{activity.content}</Text>
              <Text style={styles.timestamp}>{activity.timestamp}</Text>
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
  feed: {
    gap: 12
  },
  activity: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    fontSize: 16,
    marginRight: 12
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  activityText: {
    fontSize: 14,
    flex: 1,
    marginRight: 8
  },
  timestamp: {
    fontSize: 12,
    color: '#6B7280'
  }
});

export default ActivityFeed;
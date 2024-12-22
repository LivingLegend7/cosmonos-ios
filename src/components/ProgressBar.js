import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress, total }) => {
  const percentage = (progress / total) * 100;

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${percentage}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 8,
    backgroundColor: '#f3f4f6',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 4,
  },
});

export default ProgressBar;
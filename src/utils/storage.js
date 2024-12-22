import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  // User data
  saveUserData: async (userData) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  },

  getUserData: async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error getting user data:', error);
      return null;
    }
  },

  // Progress tracking
  saveProgress: async (progress) => {
    try {
      await AsyncStorage.setItem('progress', JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  },

  getProgress: async () => {
    try {
      const progress = await AsyncStorage.getItem('progress');
      return progress ? JSON.parse(progress) : [];
    } catch (error) {
      console.error('Error getting progress:', error);
      return [];
    }
  },

  // Achievements
  saveAchievements: async (achievements) => {
    try {
      await AsyncStorage.setItem('achievements', JSON.stringify(achievements));
    } catch (error) {
      console.error('Error saving achievements:', error);
    }
  },

  getAchievements: async () => {
    try {
      const achievements = await AsyncStorage.getItem('achievements');
      return achievements ? JSON.parse(achievements) : [];
    } catch (error) {
      console.error('Error getting achievements:', error);
      return [];
    }
  },

  // Study streak
  saveStreak: async (streak) => {
    try {
      await AsyncStorage.setItem('streak', JSON.stringify(streak));
    } catch (error) {
      console.error('Error saving streak:', error);
    }
  },

  getStreak: async () => {
    try {
      const streak = await AsyncStorage.getItem('streak');
      return streak ? JSON.parse(streak) : 0;
    } catch (error) {
      console.error('Error getting streak:', error);
      return 0;
    }
  },

  // Clear all data
  clearAll: async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  },
};
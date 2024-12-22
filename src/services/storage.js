import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  // User data management
  saveUser: async (userData) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      return true;
    } catch (error) {
      console.error('Error saving user data:', error);
      return false;
    }
  },

  getUser: async () => {
    try {
      const userData = await AsyncStorage.setItem('userData');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error getting user data:', error);
      return null;
    }
  },

  // Progress tracking
  saveProgress: async (progressData) => {
    try {
      await AsyncStorage.setItem('progressData', JSON.stringify(progressData));
      return true;
    } catch (error) {
      console.error('Error saving progress:', error);
      return false;
    }
  },

  getProgress: async () => {
    try {
      const progressData = await AsyncStorage.getItem('progressData');
      return progressData ? JSON.parse(progressData) : null;
    } catch (error) {
      console.error('Error getting progress:', error);
      return null;
    }
  },

  // Study session management
  saveStudySession: async (sessionData) => {
    try {
      const existingSessions = await storage.getStudySessions();
      const updatedSessions = [...(existingSessions || []), sessionData];
      await AsyncStorage.setItem('studySessions', JSON.stringify(updatedSessions));
      return true;
    } catch (error) {
      console.error('Error saving study session:', error);
      return false;
    }
  },

  getStudySessions: async () => {
    try {
      const sessions = await AsyncStorage.getItem('studySessions');
      return sessions ? JSON.parse(sessions) : [];
    } catch (error) {
      console.error('Error getting study sessions:', error);
      return [];
    }
  },

  // Achievement tracking
  saveAchievements: async (achievements) => {
    try {
      await AsyncStorage.setItem('achievements', JSON.stringify(achievements));
      return true;
    } catch (error) {
      console.error('Error saving achievements:', error);
      return false;
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

  // Clear all data (for logout or reset)
  clearAll: async () => {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing storage:', error);
      return false;
    }
  }
};
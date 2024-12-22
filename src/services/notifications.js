import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';

export const notificationService = {
  configure: () => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: Platform.OS === 'ios',
    });
  },

  createChannel: () => {
    PushNotification.createChannel(
      {
        channelId: 'daily-reminders',
        channelName: 'Daily Reminders',
        channelDescription: 'Reminders for daily practice',
        playSound: true,
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      (created) => console.log(`Channel created: ${created}`)
    );
  },

  scheduleStreakReminder: (hour = 20, minute = 0) => {
    PushNotification.localNotificationSchedule({
      channelId: 'daily-reminders',
      title: 'Maintain Your Streak! 🔥',
      message: 'Don\'t forget to complete today\'s challenge and keep your streak alive!',
      date: new Date(Date.now()), // Will be modified by repeatType
      repeatType: 'day',
      repeatTime: 1,
      hour,
      minute,
    });
  },

  scheduleDailyChallenge: () => {
    PushNotification.localNotificationSchedule({
      channelId: 'daily-reminders',
      title: 'New Challenge Available! 🎯',
      message: 'Your daily investment banking challenge is ready. Test your knowledge!',
      date: new Date(Date.now()),
      repeatType: 'day',
      repeatTime: 1,
      hour: 9, // 9 AM
      minute: 0,
    });
  },

  sendAchievementNotification: (achievement) => {
    PushNotification.localNotification({
      channelId: 'daily-reminders',
      title: 'Achievement Unlocked! 🏆',
      message: `Congratulations! You've earned: ${achievement.title}`,
    });
  },

  sendStreakMilestoneNotification: (days) => {
    PushNotification.localNotification({
      channelId: 'daily-reminders',
      title: 'Amazing Streak! 🔥',
      message: `You've maintained your study streak for ${days} days! Keep it up!`,
    });
  },

  clearAllNotifications: () => {
    PushNotification.cancelAllLocalNotifications();
  },
};

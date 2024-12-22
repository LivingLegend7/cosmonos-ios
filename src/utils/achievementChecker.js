import { ACHIEVEMENTS } from '../constants/achievements';

export const checkForNewAchievements = (state) => {
  const newAchievements = [];
  const { user, progress } = state;
  
  // Check streak achievements
  ACHIEVEMENTS.STREAK_ACHIEVEMENTS.forEach(achievement => {
    if (
      user.streak >= achievement.requirement &&
      !progress.achievements.some(a => a.id === achievement.id)
    ) {
      newAchievements.push(achievement);
    }
  });

  // Check accuracy achievements
  if (user.questionsAnswered >= 20) {
    const accuracy = user.correctAnswers / user.questionsAnswered;
    ACHIEVEMENTS.ACCURACY_ACHIEVEMENTS.forEach(achievement => {
      if (
        accuracy >= achievement.requirement &&
        !progress.achievements.some(a => a.id === achievement.id)
      ) {
        newAchievements.push(achievement);
      }
    });
  }

  // Check completion achievements
  ACHIEVEMENTS.COMPLETION_ACHIEVEMENTS.forEach(achievement => {
    if (
      progress.completedLessons.length >= achievement.requirement &&
      !progress.achievements.some(a => a.id === achievement.id)
    ) {
      newAchievements.push(achievement);
    }
  });

  return newAchievements;
};

export const processAchievements = (newAchievements, dispatch) => {
  newAchievements.forEach(achievement => {
    dispatch({
      type: 'ADD_ACHIEVEMENT',
      payload: {
        ...achievement,
        earnedAt: new Date().toISOString()
      }
    });
  });

  if (newAchievements.length > 0) {
    // You could trigger notifications or celebrations here
    return true;
  }
  return false;
};
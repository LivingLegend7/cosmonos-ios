// Achievement types and criteria
export const ACHIEVEMENTS = {
  STREAK_ACHIEVEMENTS: [
    {
      id: 'streak_3',
      title: '3-Day Streak',
      description: 'Complete challenges for 3 days in a row',
      requirement: 3,
      icon: '🔥',
    },
    {
      id: 'streak_7',
      title: 'Week Warrior',
      description: 'Complete challenges for 7 days in a row',
      requirement: 7,
      icon: '⚡',
    },
    {
      id: 'streak_30',
      title: 'Monthly Master',
      description: 'Complete challenges for 30 days in a row',
      requirement: 30,
      icon: '👑',
    },
  ],

  PROGRESS_ACHIEVEMENTS: [
    {
      id: 'complete_10',
      title: 'Getting Started',
      description: 'Complete 10 challenges',
      requirement: 10,
      icon: '🎯',
    },
    {
      id: 'complete_50',
      title: 'Challenge Champion',
      description: 'Complete 50 challenges',
      requirement: 50,
      icon: '🏆',
    },
    {
      id: 'complete_100',
      title: 'Century Club',
      description: 'Complete 100 challenges',
      requirement: 100,
      icon: '💫',
    },
  ],

  ACCURACY_ACHIEVEMENTS: [
    {
      id: 'accuracy_80',
      title: 'Sharp Mind',
      description: 'Maintain 80% accuracy over 20 questions',
      requirement: 0.8,
      icon: '🎯',
    },
    {
      id: 'accuracy_90',
      title: 'Expert Analyst',
      description: 'Maintain 90% accuracy over 50 questions',
      requirement: 0.9,
      icon: '🎓',
    },
    {
      id: 'accuracy_95',
      title: 'Banking Genius',
      description: 'Maintain 95% accuracy over 100 questions',
      requirement: 0.95,
      icon: '🌟',
    },
  ],
};

// Check if user qualifies for new achievements
export const checkAchievements = (userStats, currentAchievements) => {
  const newAchievements = [];

  // Check streak achievements
  ACHIEVEMENTS.STREAK_ACHIEVEMENTS.forEach(achievement => {
    if (
      userStats.streak >= achievement.requirement &&
      !currentAchievements.includes(achievement.id)
    ) {
      newAchievements.push(achievement);
    }
  });

  // Check progress achievements
  ACHIEVEMENTS.PROGRESS_ACHIEVEMENTS.forEach(achievement => {
    if (
      userStats.completedChallenges >= achievement.requirement &&
      !currentAchievements.includes(achievement.id)
    ) {
      newAchievements.push(achievement);
    }
  });

  // Check accuracy achievements
  if (userStats.totalQuestions >= 20) {
    ACHIEVEMENTS.ACCURACY_ACHIEVEMENTS.forEach(achievement => {
      const accuracy = userStats.correctAnswers / userStats.totalQuestions;
      if (
        accuracy >= achievement.requirement &&
        !currentAchievements.includes(achievement.id)
      ) {
        newAchievements.push(achievement);
      }
    });
  }

  return newAchievements;
};

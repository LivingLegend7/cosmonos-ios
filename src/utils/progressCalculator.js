export const calculateProgress = (completedLessons, totalLessons) => {
  if (!totalLessons) return 0;
  return (completedLessons / totalLessons) * 100;
};

export const calculateStreakStatus = (lastStudyDate) => {
  if (!lastStudyDate) return { active: false, daysLeft: 0 };

  const now = new Date();
  const last = new Date(lastStudyDate);
  const diffTime = Math.abs(now - last);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 1) {
    return { active: false, daysLeft: 0 };
  }

  // Calculate hours left in the current day to maintain streak
  const endOfDay = new Date(now);
  endOfDay.setHours(23, 59, 59, 999);
  const hoursLeft = Math.ceil((endOfDay - now) / (1000 * 60 * 60));

  return { 
    active: true, 
    hoursLeft,
    willBreak: diffDays === 1
  };
};

export const calculateAccuracy = (correctAnswers, totalQuestions) => {
  if (!totalQuestions) return 0;
  return (correctAnswers / totalQuestions) * 100;
};

export const getNextMilestone = (current, milestones) => {
  return milestones.find(m => m > current) || null;
};

export const calculateLevelProgress = (score) => {
  const levels = [0, 1000, 2500, 5000, 10000, 25000, 50000, 100000];
  const currentLevel = levels.findIndex(l => score < l) - 1;
  const nextLevel = levels[currentLevel + 1];
  const currentLevelScore = levels[currentLevel];
  
  return {
    level: currentLevel + 1,
    progress: ((score - currentLevelScore) / (nextLevel - currentLevelScore)) * 100,
    pointsToNext: nextLevel - score
  };
};
import React, { useState } from 'react';
import DailyChallenge from '../components/DailyChallenge';
import QuestionCard from '../components/QuestionCard';
import ChallengeComplete from '../components/ChallengeComplete';

const ChallengeScreen = () => {
  const [challengeComplete, setChallengeComplete] = useState(false);
  const [score, setScore] = useState(0);

  const handleChallengeComplete = (finalScore) => {
    setScore(finalScore);
    setChallengeComplete(true);
  };

  const handleRestart = () => {
    setChallengeComplete(false);
    setScore(0);
  };

  return (
    <div className="space-y-4">
      <DailyChallenge />
      {!challengeComplete ? (
        <QuestionCard onComplete={handleChallengeComplete} />
      ) : (
        <ChallengeComplete 
          score={score}
          totalQuestions={3}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default ChallengeScreen;
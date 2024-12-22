import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DailyChallenge from '../../components/DailyChallenge';
import QuestionCard from '../../components/QuestionCard';

const ChallengeScreen = () => {
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  const handleCorrectAnswer = () => {
    setScore(score + 100);
    setStreak(streak + 1);
  };

  const handleWrongAnswer = () => {
    setStreak(0);
  };

  return (
    <ScrollView style={styles.container}>
      <DailyChallenge 
        progress={2}
        total={3}
        reward="Gold Badge + 500 Points"
      />
      <QuestionCard
        question="What is the primary difference between Enterprise Value (EV) and Equity Value?"
        answers={[
          "EV includes debt, while Equity Value doesn't",
          "EV is always larger than Equity Value",
          "They measure the same thing",
          "EV only includes common equity"
        ]}
        correctAnswer={0}
        onCorrectAnswer={handleCorrectAnswer}
        onWrongAnswer={handleWrongAnswer}
        category="Valuation"
        explanation="Enterprise Value (EV) includes the total cost of acquiring a company by factoring in debt and subtracting cash, while Equity Value only represents the value of shareholders' equity."
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16
  }
});

export default ChallengeScreen;
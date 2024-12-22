import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuestionCard = ({ 
  question,
  answers,
  correctAnswer,
  onCorrectAnswer,
  onWrongAnswer,
  category,
  explanation
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    if (index === correctAnswer) {
      onCorrectAnswer();
    } else {
      onWrongAnswer();
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.category}>{category}</Text>
      </View>

      <Text style={styles.question}>{question}</Text>

      <View style={styles.answers}>
        {answers.map((answer, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.answerButton,
              selectedAnswer !== null && [
                index === correctAnswer && styles.correctAnswer,
                selectedAnswer === index && 
                index !== correctAnswer && 
                styles.wrongAnswer
              ]
            ]}
            onPress={() => handleAnswer(index)}
            disabled={selectedAnswer !== null}
          >
            <Text style={[
              styles.answerText,
              selectedAnswer !== null && 
              (index === correctAnswer || selectedAnswer === index) && 
              styles.selectedAnswerText
            ]}>
              {answer}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {showExplanation && (
        <View style={styles.explanation}>
          <Text style={styles.explanationText}>{explanation}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  category: {
    fontSize: 12,
    color: '#3B82F6',
    fontWeight: '600'
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    lineHeight: 24
  },
  answers: {
    gap: 12
  },
  answerButton: {
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB'
  },
  correctAnswer: {
    backgroundColor: '#22C55E',
    borderColor: '#22C55E'
  },
  wrongAnswer: {
    backgroundColor: '#EF4444',
    borderColor: '#EF4444'
  },
  answerText: {
    fontSize: 16,
    color: '#1F2937'
  },
  selectedAnswerText: {
    color: '#FFFFFF',
    fontWeight: '600'
  },
  explanation: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#F8FAFC',
    borderRadius: 12
  },
  explanationText: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20
  }
});

export default QuestionCard;
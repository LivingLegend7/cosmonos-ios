import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const QuestionCard = ({ question, selectedAnswer, onSelectAnswer }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.category}>{question.category}</Text>
      <Text style={styles.question}>{question.question}</Text>
      <View style={styles.answers}>
        {question.answers.map((answer, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.answerButton,
              selectedAnswer === index && styles.selectedAnswer,
              selectedAnswer !== null && 
              index === question.correct && 
              styles.correctAnswer,
            ]}
            onPress={() => onSelectAnswer(index)}
            disabled={selectedAnswer !== null}
          >
            <Text style={[
              styles.answerText,
              (selectedAnswer === index || 
               (selectedAnswer !== null && index === question.correct)) && 
              styles.selectedAnswerText
            ]}>
              {answer}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {selectedAnswer !== null && (
        <View style={styles.explanation}>
          <Text style={styles.explanationText}>{question.explanation}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  category: {
    fontSize: 12,
    color: '#3b82f6',
    fontWeight: '600',
    marginBottom: 8,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  answers: {
    gap: 12,
  },
  answerButton: {
    backgroundColor: '#f3f4f6',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  selectedAnswer: {
    backgroundColor: '#ef4444',
    borderColor: '#ef4444',
  },
  correctAnswer: {
    backgroundColor: '#22c55e',
    borderColor: '#22c55e',
  },
  answerText: {
    fontSize: 16,
    color: '#1f2937',
  },
  selectedAnswerText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  explanation: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
  },
  explanationText: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
});

export default QuestionCard;
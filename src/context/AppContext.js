import React, { createContext, useContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext();

const initialState = {
  user: {
    name: 'Alex Chen',
    school: 'Cornell University',
    streak: 0,
    totalScore: 0,
    questionsAnswered: 0,
    correctAnswers: 0
  },
  progress: {
    completedLessons: [],
    achievements: [],
    dailyChallenges: []
  },
  studyData: {
    lastStudied: null,
    currentTopic: null,
    savedAnswers: {}
  }
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      };
      
    case 'COMPLETE_LESSON':
      return {
        ...state,
        progress: {
          ...state.progress,
          completedLessons: [...state.progress.completedLessons, action.payload]
        }
      };
      
    case 'ADD_ACHIEVEMENT':
      return {
        ...state,
        progress: {
          ...state.progress,
          achievements: [...state.progress.achievements, action.payload]
        }
      };
      
    case 'UPDATE_STUDY_DATA':
      return {
        ...state,
        studyData: { ...state.studyData, ...action.payload }
      };
      
    case 'ANSWER_QUESTION':
      const { questionId, correct } = action.payload;
      const newTotalScore = state.user.totalScore + (correct ? 100 : 0);
      const newQuestionsAnswered = state.user.questionsAnswered + 1;
      const newCorrectAnswers = state.user.correctAnswers + (correct ? 1 : 0);
      
      return {
        ...state,
        user: {
          ...state.user,
          totalScore: newTotalScore,
          questionsAnswered: newQuestionsAnswered,
          correctAnswers: newCorrectAnswers
        },
        studyData: {
          ...state.studyData,
          savedAnswers: {
            ...state.studyData.savedAnswers,
            [questionId]: { correct, timestamp: new Date().toISOString() }
          }
        }
      };
      
    case 'UPDATE_STREAK':
      return {
        ...state,
        user: {
          ...state.user,
          streak: action.payload
        }
      };
      
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load saved state from AsyncStorage
  useEffect(() => {
    const loadSavedState = async () => {
      try {
        const savedState = await AsyncStorage.getItem('appState');
        if (savedState) {
          const parsedState = JSON.parse(savedState);
          Object.keys(parsedState).forEach(key => {
            dispatch({ type: `UPDATE_${key.toUpperCase()}`, payload: parsedState[key] });
          });
        }
      } catch (error) {
        console.error('Error loading saved state:', error);
      }
    };
    loadSavedState();
  }, []);

  // Save state changes to AsyncStorage
  useEffect(() => {
    const saveState = async () => {
      try {
        await AsyncStorage.setItem('appState', JSON.stringify(state));
      } catch (error) {
        console.error('Error saving state:', error);
      }
    };
    saveState();
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
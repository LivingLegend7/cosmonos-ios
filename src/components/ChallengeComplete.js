import React from 'react';
import { Trophy } from 'lucide-react';

const ChallengeComplete = ({ score, totalQuestions, onRestart }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 text-center">
    <Trophy className="text-yellow-500 w-16 h-16 mx-auto mb-4" />
    <h2 className="text-2xl font-bold mb-2">Challenge Complete!</h2>
    <p className="text-gray-600 mb-4">
      You scored {score} out of {totalQuestions} questions correctly
    </p>
    <div className="flex flex-col gap-3">
      <button
        onClick={onRestart}
        className="bg-blue-500 text-white py-3 px-6 rounded-xl flex items-center justify-center"
      >
        Try Another Challenge
      </button>
      <button
        className="bg-gray-100 text-gray-600 py-3 px-6 rounded-xl flex items-center justify-center"
      >
        Share Results
      </button>
    </div>
  </div>
);

export default ChallengeComplete;
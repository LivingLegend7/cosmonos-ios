import React, { useState } from 'react';
import { Search, ChevronRight, ChevronLeft, Award } from 'lucide-react';

const studyTopics = {
  'valuation': {
    title: 'Valuation Basics',
    progress: 4,
    total: 5,
    description: 'Learn fundamental valuation concepts and methods',
    lessons: [
      { title: 'Enterprise Value', completed: true },
      { title: 'Equity Value', completed: true },
      { title: 'Trading Multiples', completed: true },
      { title: 'Precedent Transactions', completed: true },
      { title: 'Control Premiums', completed: false }
    ]
  },
  'dcf': {
    title: 'DCF Modeling',
    progress: 2,
    total: 4,
    description: 'Master discounted cash flow analysis',
    lessons: [
      { title: 'Free Cash Flow', completed: true },
      { title: 'WACC Calculation', completed: true },
      { title: 'Terminal Value', completed: false },
      { title: 'Sensitivity Analysis', completed: false }
    ]
  },
  'ma': {
    title: 'M&A Analysis',
    progress: 1,
    total: 3,
    description: 'Understanding mergers and acquisitions',
    lessons: [
      { title: 'Deal Structures', completed: true },
      { title: 'Synergy Analysis', completed: false },
      { title: 'Post-Merger Integration', completed: false }
    ]
  }
};

const TopicCard = ({ topic, onSelect }) => (
  <button 
    onClick={onSelect}
    className="w-full bg-white p-4 rounded-xl shadow flex justify-between items-center"
  >
    <div>
      <h3 className="font-bold text-left">{topic.title}</h3>
      <div className="text-sm text-gray-500 text-left">
        {topic.progress}/{topic.total} Completed
      </div>
    </div>
    <ChevronRight className="text-gray-400" />
  </button>
);

const TopicDetail = ({ topic, onBack }) => (
  <div className="space-y-4">
    <button 
      onClick={onBack}
      className="flex items-center text-blue-500 mb-4"
    >
      <ChevronLeft size={20} />
      <span>Back to Topics</span>
    </button>

    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">{topic.title}</h2>
      <p className="text-gray-600 mb-4">{topic.description}</p>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Progress</span>
          <span>{topic.progress}/{topic.total}</span>
        </div>
        <div className="bg-gray-100 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full" 
            style={{ width: `${(topic.progress / topic.total) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {topic.lessons.map((lesson, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
          >
            <div className="flex items-center">
              {lesson.completed ? (
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <Award size={14} className="text-white" />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full bg-gray-200 mr-3" />
              )}
              <span className={lesson.completed ? 'font-medium' : 'text-gray-500'}>
                {lesson.title}
              </span>
            </div>
            <button 
              className={`px-4 py-2 rounded-lg text-sm ${
                lesson.completed 
                  ? 'bg-gray-100 text-gray-500'
                  : 'bg-blue-500 text-white'
              }`}
            >
              {lesson.completed ? 'Review' : 'Start'}
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const StudyScreen = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = Object.entries(studyTopics)
    .filter(([_, topic]) =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  if (selectedTopic) {
    return (
      <TopicDetail 
        topic={studyTopics[selectedTopic]} 
        onBack={() => setSelectedTopic(null)} 
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white rounded-xl py-3 pl-10 pr-4 shadow"
        />
      </div>
      
      {filteredTopics.map(([id, topic]) => (
        <TopicCard
          key={id}
          topic={topic}
          onSelect={() => setSelectedTopic(id)}
        />
      ))}
    </div>
  );
};

export default StudyScreen;
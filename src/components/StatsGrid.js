import React from 'react';
import { Star, Trophy, BookOpen, Award } from 'lucide-react';

const stats = [
  { label: 'Study Streak', value: '7', icon: Star, color: 'text-orange-500' },
  { label: 'Total Score', value: '156', icon: Trophy, color: 'text-yellow-500' },
  { label: 'Questions', value: '42', icon: BookOpen, color: 'text-blue-500' },
  { label: 'Accuracy', value: '92%', icon: Award, color: 'text-green-500' }
];

const StatsGrid = () => (
  <div className="grid grid-cols-2 gap-4">
    {stats.map((stat, i) => (
      <div key={i} className="bg-white p-4 rounded-xl shadow">
        <div className="flex items-center mb-2">
          <stat.icon className={`${stat.color} mr-2`} size={20} />
          <span className="text-gray-500">{stat.label}</span>
        </div>
        <div className="text-2xl font-bold">{stat.value}</div>
      </div>
    ))}
  </div>
);

export default StatsGrid;
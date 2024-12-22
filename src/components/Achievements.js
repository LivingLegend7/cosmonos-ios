import React from 'react';
import { Award, Star, Trophy } from 'lucide-react';

const achievements = [
  { title: "Quick Learner", description: "Completed 5 lessons in one day", icon: Star, color: "text-yellow-500" },
  { title: "Streak Master", description: "Maintained a 7-day streak", icon: Trophy, color: "text-blue-500" },
  { title: "Top Performer", description: "Ranked in top 10%", icon: Award, color: "text-purple-500" }
];

const Achievements = () => (
  <div className="bg-white rounded-xl shadow p-4">
    <h3 className="font-bold mb-4">Achievements</h3>
    <div className="space-y-4">
      {achievements.map((achievement, i) => (
        <div key={i} className="flex items-center">
          <achievement.icon className={`${achievement.color} mr-3`} size={24} />
          <div>
            <div className="font-medium">{achievement.title}</div>
            <div className="text-sm text-gray-500">{achievement.description}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Achievements;
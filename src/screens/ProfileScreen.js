import React from 'react';
import StatsGrid from '../components/StatsGrid';
import Achievements from '../components/Achievements';

const ProfileScreen = () => (
  <div className="space-y-6">
    <div className="flex items-center">
      <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
      <div className="ml-4">
        <h2 className="text-xl font-bold">Alex Chen</h2>
        <p className="text-gray-500">Cornell University</p>
      </div>
    </div>

    <StatsGrid />
    <Achievements />
  </div>
);

export default ProfileScreen;
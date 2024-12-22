import React, { useState } from 'react';
import TabBar from '../Navigation/TabBar';
import ChallengeScreen from '../Screens/ChallengeScreen';
import StudyScreen from '../Screens/StudyScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Preview = () => {
  const [selectedTab, setSelectedTab] = useState('challenge');

  return (
    <div className="max-w-md mx-auto h-[700px] bg-gray-50 rounded-3xl overflow-hidden flex flex-col shadow-2xl">
      <div className="flex-1 overflow-y-auto p-4">
        {selectedTab === 'challenge' && <ChallengeScreen />}
        {selectedTab === 'study' && <StudyScreen />}
        {selectedTab === 'profile' && <ProfileScreen />}
      </div>
      <TabBar selectedTab={selectedTab} onSelectTab={setSelectedTab} />
    </div>
  );
};

export default Preview;
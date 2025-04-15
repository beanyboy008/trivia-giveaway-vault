
import React from 'react';
import { Brain, Trophy, Zap, Clock, BarChart, Award, Gift, Coins, UserPlus, Share2, Medal } from 'lucide-react';

const features = [
  {
    icon: <Brain size={24} className="text-white" />,
    title: "AI-Powered Solo Trivia",
    description: "Challenge our adaptive AI that adjusts difficulty based on your skill level for a personalized experience.",
    color: "bg-trivia-purple"
  },
  {
    icon: <Zap size={24} className="text-white" />,
    title: "Daily Live Showdowns",
    description: "Top daily scorers compete head-to-head in live trivia battles watched by the community.",
    color: "bg-trivia-blue"
  },
  {
    icon: <Clock size={24} className="text-white" />,
    title: "Timed Challenges",
    description: "Race against the clock in speed-based rounds where faster correct answers earn more points.",
    color: "bg-trivia-pink"
  },
  {
    icon: <BarChart size={24} className="text-white" />,
    title: "Daily Leaderboards",
    description: "Track your progress on real-time scoreboards that reset daily and weekly for fresh competition.",
    color: "bg-trivia-green"
  },
  {
    icon: <Gift size={24} className="text-white" />,
    title: "Automated Rewards",
    description: "Winners automatically receive digital or physical prizes directly through the platform.",
    color: "bg-trivia-orange"
  },
  {
    icon: <UserPlus size={24} className="text-white" />,
    title: "Referral Bonuses",
    description: "Invite friends to earn extra trivia lives or bonus giveaway entries for better odds.",
    color: "bg-trivia-purple"
  }
];

const FeaturesSection = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Knowledge</span> is Rewarding
          </h2>
          <p className="text-gray-600">
            Our platform combines the thrill of trivia with exciting rewards and cutting-edge AI technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className={`icon-container ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

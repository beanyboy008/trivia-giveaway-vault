
import React from 'react';
import { ArrowRight, Trophy, Zap, Brain } from 'lucide-react';
import EmailForm from './EmailForm';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden pb-16">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-trivia-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-trivia-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 mb-6 bg-white rounded-full border border-gray-200 shadow-sm">
            <span className="mr-2 text-xs font-medium text-trivia-purple">Coming Soon</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-trivia-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-trivia-purple"></span>
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Test Your Knowledge. <span className="gradient-text">Win Real Prizes.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
            Join the waitlist for the ultimate AI-powered trivia platform where your knowledge unlocks daily rewards, challenges, and giveaways.
          </p>
          
          <div className="w-full max-w-md">
            <EmailForm />
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="bg-trivia-purple/10 p-2 rounded-full">
                <Brain size={16} className="text-trivia-purple" />
              </div>
              <span className="text-sm">AI-Powered Trivia</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="bg-trivia-blue/10 p-2 rounded-full">
                <Trophy size={16} className="text-trivia-blue" />
              </div>
              <span className="text-sm">Daily Prizes</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="bg-trivia-pink/10 p-2 rounded-full">
                <Zap size={16} className="text-trivia-pink" />
              </div>
              <span className="text-sm">Live Showdowns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

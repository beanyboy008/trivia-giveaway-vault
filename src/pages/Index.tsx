
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { Gift, Star, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold gradient-text">AI Trivia Giveaway</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#features" className="text-gray-600 hover:text-trivia-purple transition">Features</a>
              <a href="#faq" className="text-gray-600 hover:text-trivia-purple transition">FAQ</a>
            </nav>
            <a 
              href="#join" 
              className="bg-gradient-trivia text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Social Proof Section */}
      <section className="bg-white py-12 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center">
              <Users className="mr-2 text-trivia-purple" size={24} />
              <span className="text-xl font-bold">5,000+</span>
              <span className="ml-2 text-gray-600">Beta Testers</span>
            </div>
            <div className="flex items-center">
              <Gift className="mr-2 text-trivia-blue" size={24} />
              <span className="text-xl font-bold">$25,000+</span>
              <span className="ml-2 text-gray-600">in Prizes</span>
            </div>
            <div className="flex items-center">
              <Star className="mr-2 text-trivia-orange" size={24} />
              <span className="text-xl font-bold">4.8/5</span>
              <span className="ml-2 text-gray-600">User Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <FeaturesSection />
      </section>

      {/* Join Waitlist Section */}
      <section id="join" className="py-20 bg-gradient-trivia text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Be the First to Play & Win</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Join our exclusive waitlist today and get early access, bonus entries, and special launch rewards.
          </p>
          <div className="max-w-md mx-auto bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-gray-800 font-bold mb-4">Join the Waitlist</h3>
            <div className="bg-white">
              <form className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-trivia-purple text-gray-800"
                />
                <button
                  type="submit"
                  className="mt-3 w-full bg-gradient-trivia text-white rounded-md py-3 hover:opacity-90 transition-opacity font-medium"
                >
                  Get Early Access
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

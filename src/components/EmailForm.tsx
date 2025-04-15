
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real app, you would send this to your API
    console.log('Email submitted:', email);
    setError('');
    setSubmitted(true);
    // Reset form after 3 seconds for demo purposes
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className="w-full">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-trivia-purple pr-12"
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1.5 bg-gradient-trivia text-white rounded-md p-2 hover:opacity-90 transition-opacity"
            aria-label="Submit email"
          >
            <ArrowRight size={18} />
          </button>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </form>
      ) : (
        <div className="bg-green-50 text-green-700 p-3 rounded-lg text-center">
          Thanks for joining our waitlist! We'll be in touch soon.
        </div>
      )}
      <p className="text-xs text-gray-500 mt-2 text-center">
        Join 1,200+ trivia enthusiasts on our waitlist
      </p>
    </div>
  );
};

export default EmailForm;

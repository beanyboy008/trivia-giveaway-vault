
import React from 'react';
import { Twitter, Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold gradient-text">AI Trivia Giveaway</h2>
            <p className="text-gray-500 mt-2">© 2025 All rights reserved</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex flex-col space-y-2">
              <h3 className="font-semibold mb-2">Platform</h3>
              <a href="#" className="text-gray-500 hover:text-trivia-purple transition">Features</a>
              <a href="#" className="text-gray-500 hover:text-trivia-purple transition">Waitlist</a>
              <a href="#" className="text-gray-500 hover:text-trivia-purple transition">FAQ</a>
            </div>
            
            <div className="flex flex-col space-y-2">
              <h3 className="font-semibold mb-2">Company</h3>
              <a href="#" className="text-gray-500 hover:text-trivia-purple transition">About Us</a>
              <a href="#" className="text-gray-500 hover:text-trivia-purple transition">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-trivia-purple transition">Terms</a>
            </div>
            
            <div className="flex flex-col space-y-2">
              <h3 className="font-semibold mb-2">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-trivia-purple transition">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-trivia-purple transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-trivia-purple transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-trivia-purple transition">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

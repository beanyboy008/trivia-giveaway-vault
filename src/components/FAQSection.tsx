
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI-powered trivia work?",
    answer: "Our AI dynamically adjusts question difficulty based on your performance, creating a personalized trivia experience that evolves as you play. It learns your strengths and weaknesses to keep challenges engaging."
  },
  {
    question: "What kind of prizes can I win?",
    answer: "Prizes range from digital rewards (gift cards, subscriptions) to physical items (tech gadgets, merchandise) and even cash prizes. The type and value of prizes vary based on the difficulty of the trivia challenge and sponsorships."
  },
  {
    question: "How often are new trivia challenges released?",
    answer: "New challenges are released daily with themed weekly specials. Live showdowns occur twice daily during peak hours, allowing global participation."
  },
  {
    question: "When will the app be launched?",
    answer: "We're currently in closed beta testing and plan to launch publicly in Q3 2023. Joining the waitlist ensures you'll be among the first to access the platform when it launches."
  },
  {
    question: "Is the app free to use?",
    answer: "The core trivia experience is free to play with optional in-app purchases for power-ups, extra lives, or premium trivia packs. All users can win prizes regardless of purchase status."
  },
  {
    question: "How do you prevent cheating in trivia competitions?",
    answer: "We use a combination of time limits, question randomization, and advanced pattern recognition to identify and prevent cheating behaviors, ensuring fair play for all participants."
  }
];

const FAQSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Everything you need to know about the AI Trivia Giveaway platform
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

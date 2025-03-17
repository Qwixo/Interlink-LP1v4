import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaPassport, FaUsers } from 'react-icons/fa';
import { AnimatedText } from './ui/animated-text';

const HowInterlinkHelpsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      icon: <FaGraduationCap className="text-5xl text-[#064088] mb-4" />,
      title: "Step 1: English That Prepares You for University",
      shortTitle: "Step 1: Academic English",
      description: "Learn academic writing, understand lectures & speak confidently."
    },
    {
      icon: <FaUniversity className="text-5xl text-[#064088] mb-4" />,
      title: "Step 2: Your Direct Pathway to Top Universities",
      shortTitle: "Step 2: University Pathway",
      description: "Seamless transition—get accepted into U.S. universities without TOEFL/IELTS."
    },
    {
      icon: <FaPassport className="text-5xl text-[#064088] mb-4" />,
      title: "Step 3: Step-by-Step Assistance for Your Student Journey",
      shortTitle: "Step 3: Complete Guidance",
      description: "We handle the process with you—visas, applications, and support."
    },
    {
      icon: <FaUsers className="text-5xl text-[#064088] mb-4" />,
      title: "Step 4: A Supportive Community & Real U.S. Experience",
      shortTitle: "Step 4: Community Support",
      description: "Live, learn & make friends in a welcoming student environment."
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-10">
          <AnimatedText 
            text="How INTERLINK Helps You Succeed—Step by Step"
            textClassName="text-3xl md:text-4xl font-bold text-[#064088]"
            underlineClassName="text-[#dc5d33] w-64 md:w-96 mx-auto"
          />
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 mx-2 mb-2 rounded-lg transition-colors shadow-md hover:shadow-lg ${
                activeTab === index 
                  ? 'bg-[#064088] text-white font-medium shadow-lg' 
                  : 'bg-white text-[#064088] hover:bg-gray-100'
              }`}
            >
              {tab.shortTitle}
            </button>
          ))}
        </div>
        
        {/* Active Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="flex flex-col items-center">
                {tabs[activeTab].icon}
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-[#dc5d33] mb-4">{tabs[activeTab].title}</h3>
              <p className="text-gray-700 text-lg">{tabs[activeTab].description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowInterlinkHelpsSection;

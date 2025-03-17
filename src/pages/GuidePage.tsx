import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';
import { FaHandshake, FaChevronDown } from 'react-icons/fa';
import YourJourneySection from '../components/YourJourneySection';
import HowInterlinkHelpsSection from '../components/HowInterlinkHelpsSection';
import SpeakingEnglishPaysOffSection from '../components/SpeakingEnglishPaysOffSection';
import ComparisonTableSection from '../components/ComparisonTableSection';
import StudyOptionsSection from '../components/StudyOptionsSection';
import TimelineSection from '../components/TimelineSection';
import TestimonialsSection from '../components/TestimonialsSection';

const GuidePage = () => {
  const [isGuideExpanded, setIsGuideExpanded] = useState(false);

  const toggleGuideExpansion = () => {
    setIsGuideExpanded(!isGuideExpanded);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Section 1: Thank You Confirmation */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Column - Text Content */}
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-[#064088] mb-4"
              >
                Thank You! Your Guide is on the Way!
              </motion.h1>
              
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl font-normal text-[#3a6ea5] mb-6"
              >
                We've sent a copy of the guide to your email. But you can also start reading it right here!
              </motion.h3>
              
              <motion.h4
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-600"
              >
                Scroll down to start reading, or check your inbox for your copy.
              </motion.h4>
            </div>
            
            {/* Right Column - Image Placeholder */}
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-[350px] h-[250px] bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-500">Image Placeholder</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 2: The Full Guide (Expandable) */}
      <section className="w-full py-12 bg-[#f9fafb]">
        <div className="max-w-4xl mx-auto px-4">
          {/* Guide Title */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-[#064088] text-center mb-8"
          >
            5 Easy Steps to Study in the USA (Even if Your English Isn't Perfect!)
          </motion.h2>
          
          {/* Introduction - Always Visible */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#064088] mb-4">Why Studying in the USA is Easier Than You Think:</h3>
            <p className="text-gray-700 mb-4">
              It might seem complicated at first, but here's what you need to know:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>You don't need perfect English to start your dream journey.</li>
              <li>Studying in America is affordable and accessible for more students than ever before.</li>
              <li>Thousands of students just like you have already done it—and succeeded!</li>
            </ul>
            <p className="text-gray-700 font-medium">Ready to join them? Here are 5 easy steps to follow:</p>
          </div>
          
          {/* Step 1 with Enhanced Fade Effect */}
          <div className="mb-6 relative">
            {/* Content with fade effect */}
            <div className="relative">
              <h3 className="text-2xl font-bold text-[#064088] mb-4">1. Find the Right Program</h3>
              <p className="text-gray-700 mb-4">Look for English programs with these benefits:</p>
              
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><span className="font-semibold">No TOEFL Required</span> - Enter university without standardized tests.</li>
              </ul>
              
              {/* Improved fade effect */}
              {!isGuideExpanded && (
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'linear-gradient(to bottom, rgba(249,250,251,0) 0%, rgba(249,250,251,0.8) 60%, rgba(249,250,251,1) 100%)',
                  top: '30px', // Start fade effect below the heading
                  height: '100%',
                  zIndex: 10
                }}></div>
              )}
            </div>
            
            {/* Continue Reading Button - Now positioned to ensure 100% opacity with arrow on left */}
            {!isGuideExpanded && (
              <div className="flex justify-center mt-4 relative z-20">
                <button 
                  onClick={toggleGuideExpansion}
                  className="flex items-center gap-1 text-[#064088] hover:text-[#053067] font-medium text-sm transition-colors bg-[#f9fafb] px-3 py-1 rounded-md"
                >
                  <FaChevronDown className="text-xs mr-1" />
                  <span>Continue Reading</span>
                </button>
              </div>
            )}
          </div>
          
          {/* Expandable Content */}
          <AnimatePresence>
            {isGuideExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Rest of Step 1 - Now includes the moved content */}
                <div className="mb-10">
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                    <li><span className="font-semibold">Small Classes & Personalized Support</span> - Get the attention you deserve.</li>
                    <li><span className="font-semibold">University Preparation & Pathway</span> - Learn skills for academic success.</li>
                    <li><span className="font-semibold">Cultural & Academic Support</span> - Adjust easily to life in America.</li>
                    <li>Choose safe, friendly, and fun cities where you'll easily make friends and enjoy your life.</li>
                  </ul>
                  <p className="text-gray-700 italic">Pro tip: Programs in smaller cities often give you the best experience!</p>
                </div>
                
                {/* Step 2 */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-[#064088] mb-4">2. Plan Your Budget</h3>
                  <p className="text-gray-700 mb-4">Here's what you need to think about:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                    <li>Tuition: Usually between $1,500 to $2,500 per 5-week term.</li>
                    <li>Visa fees: Approximately $350.</li>
                    <li>Housing & food: Typically $600–$1,200/month.</li>
                    <li>Books and supplies.</li>
                    <li>Personal expenses (phone, entertainment).</li>
                  </ul>
                  <p className="text-gray-700">Usually, improving English enough for university takes about one year if you start from a basic level.</p>
                </div>
                
                {/* Step 3 */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-[#064088] mb-4">3. Apply to Your School</h3>
                  <p className="text-gray-700 mb-4">Applying isn't complicated. You'll just need:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                    <li>A school application (usually online).</li>
                    <li>A copy of your passport.</li>
                    <li>Proof of your school grades.</li>
                    <li>Proof of finances (bank statement or sponsor letter).</li>
                  </ul>
                </div>
                
                {/* Step 4 */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-[#064088] mb-4">4. Get Your Visa</h3>
                  <p className="text-gray-700 mb-4">Don't worry; it's easier than it sounds!</p>
                  <p className="text-gray-700 mb-4">You need to:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                    <li>Show proof you can afford your studies (I-20 form from your school).</li>
                    <li>Complete the I-901 form online and pay the SEVIS fee.</li>
                    <li>Schedule and attend a simple interview at your local U.S. consulate.</li>
                  </ul>
                </div>
                
                {/* Step 5 */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-[#064088] mb-4">5. Get Ready for Your Adventure!</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                    <li>Buy your flight ticket.</li>
                    <li>Arrange housing before you arrive (your school can help!).</li>
                    <li>Join the orientation, make new friends, and start enjoying your new life in the U.S.!</li>
                  </ul>
                </div>
                
                {/* Want Help with These Steps? - Now with white background */}
                <div className="py-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-xl shadow-md p-8 md:p-12"
                  >
                    <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
                      {/* Left Column - Text Content */}
                      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        <div className="flex items-center mb-4">
                          <FaHandshake className="text-[#064088] text-4xl mr-3" />
                          <h2 className="text-3xl md:text-4xl font-bold text-[#064088]">
                            Want Help with These Steps?
                          </h2>
                        </div>
                        
                        <p className="text-gray-700 text-lg mb-8 max-w-xl">
                          At Interlink, we help students like you every day. The process of studying in the U.S. becomes much easier with our expert guidance. Thousands of international students have successfully navigated this journey with our support, and you can too!
                        </p>
                        
                        <div className="flex justify-center md:justify-start">
                          <button className="px-8 py-4 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold text-lg rounded-lg transition-colors shadow-md">
                            Get Personalized Help
                          </button>
                        </div>
                      </div>
                      
                      {/* Right Column - Image Placeholder - Now with white background */}
                      <div className="md:w-1/2 flex justify-center">
                        <div className="w-[400px] h-[300px] bg-white rounded-lg flex items-center justify-center">
                          <span className="text-gray-500">Happy Students Image Placeholder</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Show Less Button */}
                <div className="flex justify-center mt-4 mb-6">
                  <button 
                    onClick={toggleGuideExpansion}
                    className="flex items-center gap-1 text-[#064088] hover:text-[#053067] font-medium text-sm transition-colors"
                  >
                    <FaChevronDown className="text-xs rotate-180 mr-1" />
                    <span>Show Less</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      
      {/* Fix for color leakage - Add a white background div when guide is not expanded */}
      {!isGuideExpanded && (
        <div className="w-full bg-white h-8"></div>
      )}
      
      {/* MOVED SECTION: Your Journey to Studying in the U.S. */}
      <YourJourneySection />
      
      {/* NEW SECTION: Speaking English Pays Off */}
      <SpeakingEnglishPaysOffSection />
      
      {/* EXISTING SECTION: How Interlink Helps You */}
      <HowInterlinkHelpsSection />
      
      {/* NEW SECTION: Comparison Table */}
      <ComparisonTableSection />
      
      {/* NEW SECTION: Study Options */}
      <StudyOptionsSection />
      
      {/* NEW SECTION: Timeline */}
      <TimelineSection />
      
      {/* NEW SECTION: Testimonials */}
      <TestimonialsSection />
      
      <Footer />
    </div>
  );
};

export default GuidePage;

import React from 'react';
import { Timeline } from './ui/timeline';

const TimelineSection = () => {
  const timelineData = [
    {
      title: "Step 1",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-[#064088] text-base">Take Action – Click Any Button to Get Started</span>
          </p>
          
          {/* Image Placeholder */}
          <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Image: Student clicking "Apply Now" button</span>
          </div>
          
          <div className="mb-4">
            <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              Don't wait! Click Apply Now or any button on this page to begin your application process.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Step 2",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-[#064088] text-base">Submit Your Application in Minutes</span>
          </p>
          
          {/* Image Placeholder */}
          <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Image: Student completing application form</span>
          </div>
          
          <div className="mb-4">
            <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              Fill in your details and submit your application form. No TOEFL/IELTS required!
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Step 3",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-[#064088] text-base">Connect with an Advisor & Get a Personalized Plan</span>
          </p>
          
          {/* Image Placeholder */}
          <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Image: Student meeting with advisor</span>
          </div>
          
          <div className="mb-4">
            <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              Our team will guide you step by step, helping you create a plan tailored to your goals.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Step 4",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-[#064088] text-base">Prepare for Your Arrival – We've Got You Covered</span>
          </p>
          
          {/* Image Placeholder */}
          <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Image: Student preparing travel documents</span>
          </div>
          
          <div className="mb-4">
            <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              With our assistance, sort out everything you need – visa, passport, finances, travel – stress-free.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Step 5",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-[#064088] text-base">Start Your Journey & Transform Your Future</span>
          </p>
          
          {/* Image Placeholder */}
          <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Image: Student arriving at US campus</span>
          </div>
          
          <div className="mb-4">
            <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              Once everything is set, you're ready to begin your English-learning adventure and reach your academic goals.
            </p>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm font-bold">
            🚀 Your future starts here. Let's make it happen!
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-white pt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#064088] mb-4">
            Your Journey to Studying in the USA
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ready to take the first step? Here's how you can start your journey with INTERLINK:
          </p>
        </div>
        
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default TimelineSection;

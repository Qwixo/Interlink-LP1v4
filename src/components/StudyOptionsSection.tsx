import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, Check, Laptop, Wifi } from 'lucide-react';

const StudyOptionsSection = () => {
  return (
    <section className="w-full py-16 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#064088] mb-4">
            Study Options – Choose the Best Fit for You
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Whether you prefer the full U.S. campus experience or the flexibility of online learning, INTERLINK has a program for you.
          </p>
        </motion.div>
        
        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          {/* Card 1: In-Person Program */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Program Header with Dark Blue Background */}
            <div className="bg-[#064088] p-6 flex items-center">
              <MapPin className="w-6 h-6 text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">In-Person Program</h3>
            </div>
            
            <div className="p-8">
              {/* Program Details */}
              <div className="space-y-5 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Location:</span>
                    <span className="ml-2 text-gray-700">U.S. University Campus</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Duration:</span>
                    <span className="ml-2 text-gray-700">5 weeks per term</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Tuition Fee:</span>
                    <span className="ml-2 text-gray-700 font-bold">$1,650 per term</span>
                  </div>
                </div>
              </div>
              
              {/* Who Is This Best For */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  <Users className="inline-block w-5 h-5 mr-2 text-[#064088]" />
                  Who Is This Best For?
                </h4>
                <ul className="space-y-3 pl-7 list-disc text-gray-700">
                  <li>Students who want to <span className="font-bold text-[#064088]">fully immerse</span> in American university life.</li>
                  <li>Those planning to transition to a <span className="font-bold text-[#064088]">U.S. college/university</span>.</li>
                  <li>Students who learn best through <span className="font-bold text-[#064088]">face-to-face interactions</span>.</li>
                </ul>
              </div>
              
              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  <Check className="inline-block w-5 h-5 mr-2 text-green-500" />
                  Benefits:
                </h4>
                <ul className="space-y-3 pl-7 list-disc text-gray-700">
                  <li>Small, <span className="font-bold text-[#064088]">interactive classes</span> (8-12 students) for personalized learning.</li>
                  <li>Full <span className="font-bold text-[#064088]">access to university facilities</span> (libraries, sports, clubs).</li>
                  <li>Cultural immersion – <span className="font-bold text-[#064088]">live, study, and interact</span> with U.S. students.</li>
                  <li><span className="font-bold text-[#064088]">University admission without TOEFL</span> upon program completion.</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Card 2: Online Program */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Program Header with Dark Orange Background */}
            <div className="bg-[#dc5d33] p-6 flex items-center">
              <Wifi className="w-6 h-6 text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">Online Program</h3>
            </div>
            
            <div className="p-8">
              {/* Program Details */}
              <div className="space-y-5 mb-8">
                <div className="flex items-start">
                  <Laptop className="w-5 h-5 text-[#dc5d33] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Location:</span>
                    <span className="ml-2 text-gray-700">100% Online</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#dc5d33] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Duration:</span>
                    <span className="ml-2 text-gray-700">5 weeks per term</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-[#dc5d33] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Tuition Fee (Full-Time):</span>
                    <span className="ml-2 text-gray-700 font-bold">$1,650 per term</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-[#dc5d33] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Tuition Fee (Part-Time):</span>
                    <span className="ml-2 text-gray-700 font-bold">$825 per term</span>
                  </div>
                </div>
              </div>
              
              {/* Who Is This Best For */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  <Users className="inline-block w-5 h-5 mr-2 text-[#dc5d33]" />
                  Who Is This Best For?
                </h4>
                <ul className="space-y-3 pl-7 list-disc text-gray-700">
                  <li>Students who need a <span className="font-bold text-[#dc5d33]">flexible schedule</span> and prefer to study from home.</li>
                  <li>Those who want to <span className="font-bold text-[#dc5d33]">prepare for U.S. study</span> before moving abroad.</li>
                  <li>Busy professionals looking to <span className="font-bold text-[#dc5d33]">improve their English without travel</span>.</li>
                </ul>
              </div>
              
              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  <Check className="inline-block w-5 h-5 mr-2 text-green-500" />
                  Benefits:
                </h4>
                <ul className="space-y-3 pl-7 list-disc text-gray-700">
                  <li><span className="font-bold text-[#dc5d33]">Live, interactive lessons</span> with expert instructors.</li>
                  <li><span className="font-bold text-[#dc5d33]">Same curriculum</span> as the in-person program.</li>
                  <li>Learn from anywhere in the world, with <span className="font-bold text-[#dc5d33]">flexible scheduling</span>.</li>
                  <li>Perfect <span className="font-bold text-[#dc5d33]">stepping stone</span> before transitioning to an in-person program.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudyOptionsSection;

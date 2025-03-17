import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Rocket, GraduationCap } from 'lucide-react';

const GuideTeachesSection = () => {
  const benefits = [
    {
      icon: <Trophy className="w-10 h-10 text-[#064088]" />,
      heading: "It's Possible—No Perfect English Needed",
      description: "Hundreds of students with average English and average budgets do this every year. Now it's your turn!"
    },
    {
      icon: <Rocket className="w-10 h-10 text-[#064088]" />,
      heading: "We Show You the 5 Easy Steps",
      description: "Plan your budget, pick the right program, and ace your visa—our guide makes it all simple."
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-[#064088]" />,
      heading: "A Life-Changing Adventure",
      description: "Studying in the U.S. boosts your career, expands your horizons, and gives you friendships for life."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#064088] mb-12"
        >
          Thinking of studying in the US?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-start"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {benefit.heading}
              </h3>
              <p className="text-gray-700">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideTeachesSection;

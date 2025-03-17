import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, DollarSign } from 'lucide-react';

const ComparisonTableSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-12"
        >
          Why Interlink? See the Difference at a Glance
        </motion.h2>
        
        {/* Comparison Table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            {/* Table Header */}
            <thead>
              <tr>
                <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200 w-1/4">
                  <span className="text-lg font-bold text-gray-700">Feature</span>
                </th>
                <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200 w-1/4">
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-[#064088]">Interlink</span>
                    <Check className="ml-2 text-green-500 w-5 h-5" />
                  </div>
                </th>
                <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200 w-1/4">
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-700">Free Programs</span>
                    <X className="ml-2 text-red-500 w-5 h-5" />
                  </div>
                </th>
                <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200 w-1/4">
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-700">Large Competitors</span>
                    <DollarSign className="ml-2 text-yellow-500 w-5 h-5" />
                  </div>
                </th>
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody>
              {/* Speaking & Fluency */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <span className="font-semibold text-gray-800">Speaking & Fluency</span>
                </td>
                <td className="p-4">
                  <div className="flex items-start">
                    <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-gray-700">Daily real-world practice</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-start">
                    <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-gray-700">No real interaction</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-start">
                    <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-gray-700">Some practice, but limited</span>
                  </div>
                </td>
              </tr>
              
              {/* University Pathway */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <span className="font-semibold text-gray-800">University Pathway</span>
                </td>
                <td className="p-4">
                  <div className="flex items-start">
                    <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-gray-700">No TOEFL required, direct entry</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-start">
                    <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-gray-700">No university access</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-start">
                    <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-gray-700">Requires TOEFL/IELTS</span>
                  </div>
                </td>
              </tr>
              
              {/* Personalized Support */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <span className="font-semibold text-gray-800">Personalized Support</span>
                </td>
                <td className="p-4">
                  <div className="flex items-start">
                    <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-gray-700">Small classes (8-12 students), expert guidance</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-start">
                    <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-gray-700">No teachers, self-study</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-start">
                    <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-gray-700">Large classes, generic courses</span>
                  </div>
                </td>
              </tr>
              
              {/* Cost & Value */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <span className="font-semibold text-gray-800">Cost & Value</span>
                </td>
                <td className="p-4">
                  <div className="flex items-start">
                    <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-gray-700">Affordable, best results</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-start">
                    <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-gray-700">Free, but slow & ineffective</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-start">
                    <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-gray-700">$5,000+ per term, overpriced</span>
                  </div>
                </td>
              </tr>
              
              {/* Time to Fluency */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <span className="font-semibold text-gray-800">Time to Fluency</span>
                </td>
                <td className="p-4">
                  <div className="flex items-start">
                    <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-gray-700">6-12 months</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-start">
                    <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-gray-700">No clear timeline, takes years</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-start">
                    <X className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-gray-700">12+ months, slow progress</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Final Takeaway Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200 mb-12"
        >
          <h3 className="text-2xl font-bold text-[#064088] mb-6">Final Takeaway</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Interlink */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <Check className="text-green-500 w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Interlink</h4>
                <p className="text-gray-700">Best value & proven results</p>
              </div>
            </div>
            
            {/* Free Programs */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-yellow-500 font-bold">⚠️</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Free Programs</h4>
                <p className="text-gray-700">No structure, no real progress</p>
              </div>
            </div>
            
            {/* Large Competitors */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <DollarSign className="text-blue-500 w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Large Competitors</h4>
                <p className="text-gray-700">Solid, but expensive and not personalized</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button className="px-8 py-4 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold text-lg rounded-lg transition-colors shadow-md">
              Choose Interlink
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;

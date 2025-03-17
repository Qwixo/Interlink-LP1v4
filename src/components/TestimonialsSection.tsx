import React from 'react';
import { AnimatedTestimonials } from './ui/animated-testimonials';
import { FaTwitter } from 'react-icons/fa';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "INTERLINK helped me improve my English so much! I went from barely speaking to confidently presenting in my university classes.",
      name: "Carlos Rodriguez",
      designation: "University of Colorado",
      src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      quote: "The teachers at INTERLINK are amazing. They really care about your progress and make learning English fun and practical.",
      name: "David Kim",
      designation: "Indiana State University",
      src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      quote: "I was worried about studying in the US with my limited English, but INTERLINK made the transition so smooth. Now I'm thriving!",
      name: "Emma Chen",
      designation: "Valparaiso University",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      quote: "The cultural activities and support services at INTERLINK helped me adjust to American life while improving my language skills.",
      name: "James Wilson",
      designation: "St. Ambrose University",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      quote: "INTERLINK's pathway program made it possible for me to enter my dream university without taking the TOEFL. Best decision ever!",
      name: "Sophia Lee",
      designation: "University of North Carolina",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const studentTestimonials = [
    {
      name: "Carlos Rodriguez",
      university: "University of Colorado",
      quote: "INTERLINK helped me improve my English so much! I went from barely speaking to confidently presenting in my university classes.",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "https://www.youtube.com/embed/placeholder1"
    },
    {
      name: "David Kim",
      university: "Indiana State University",
      quote: "The teachers at INTERLINK are amazing. They really care about your progress and make learning English fun and practical.",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "https://www.youtube.com/embed/placeholder2"
    },
    {
      name: "Emma Chen",
      university: "Valparaiso University",
      quote: "I was worried about studying in the US with my limited English, but INTERLINK made the transition so smooth. Now I'm thriving!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "https://www.youtube.com/embed/placeholder3"
    },
    {
      name: "James Wilson",
      university: "St. Ambrose University",
      quote: "The cultural activities and support services at INTERLINK helped me adjust to American life while improving my language skills.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "https://www.youtube.com/embed/placeholder4"
    }
  ];

  // This function determines which component to render based on the current page
  const isGuidePage = window.location.pathname.includes('guide');

  if (isGuidePage) {
    return (
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-6">
            What Our Students Say
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
            Hear from international students who transformed their English skills and achieved their academic dreams with INTERLINK.
          </p>

          {/* Video Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {studentTestimonials.map((student, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video w-full">
                  <iframe 
                    className="w-full h-full"
                    src={student.videoUrl}
                    title={`${student.name} testimonial`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={student.image} 
                      alt={student.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-[#064088]">{student.name}</h3>
                      <p className="text-sm text-gray-600">{student.university}</p>
                    </div>
                    <a href="#" className="ml-auto text-blue-400 hover:text-blue-500">
                      <FaTwitter size={18} />
                    </a>
                  </div>
                  <p className="text-gray-700">{student.quote}</p>
                </div>
              </div>
            ))}
          </div>

          {/* More Students Subsection */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-[#064088] mb-10">
              More Students
            </h3>
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
        </div>
      </section>
    );
  } else {
    // Original testimonials section for the landing page
    return (
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-12">
            What Our Students Say
          </h2>
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </section>
    );
  }
};

export default TestimonialsSection;

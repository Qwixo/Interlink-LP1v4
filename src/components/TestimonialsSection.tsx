import React from 'react';
import { AnimatedTestimonials } from './ui/animated-testimonials';
import { FaTwitter } from 'react-icons/fa';
import { Testimonials } from './ui/testimonials';

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

  const shadcnTestimonials = [
    {
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'I\'m blown away by the versatility of INTERLINK. Their program made UI development a breeze!',
      name: 'Alice Johnson',
      username: '@alicejohnson',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Using INTERLINK has significantly speed up my language learning process. The quality and ease of their teaching are remarkable!',
      name: 'David Smith',
      username: '@davidsmith',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'The programs at INTERLINK are not just well-designed but also highly customizable. It\'s a student\'s dream!',
      name: 'Emma Brown',
      username: '@emmabrown',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'I love how intuitive and well-structured INTERLINK\'s courses are. They have significantly improved my English skills.',
      name: 'James Wilson',
      username: '@jameswilson',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Enrolling in INTERLINK was a game-changer for my career. It has elevated my language skills to a whole new level!',
      name: 'Sophia Lee',
      username: '@sophialee',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      text: 'Using INTERLINK has been a game-changer for my academic development.',
      name: 'Michael Davis',
      username: '@michaeldavis',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
      text: 'The courses are highly responsive and work seamlessly with my busy schedule.',
      name: 'Emily Chen',
      username: '@emilychen',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      text: 'I love how easy it is to customize my learning path at INTERLINK. The teaching is clean and modern.',
      name: 'Robert Lee',
      username: '@robertlee',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      text: 'INTERLINK has saved me a significant amount of time and effort. The courses are well-structured and easy to follow.',
      name: 'Sarah Taylor',
      username: '@sarahtaylor',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      text: 'I appreciate the attention to detail in the curriculum. The courses are engaging and professional.',
      name: 'Kevin White',
      username: '@kevinwhite',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      text: 'The courses are highly customizable and can be easily integrated with my existing study routine.',
      name: 'Rachel Patel',
      username: '@rachelpatel',
      social: 'https://twitter.com'
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
            {[1, 2, 3, 4].map((studentNum) => (
              <div key={studentNum} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video w-full">
                  <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/placeholder${studentNum}`}
                    title={`Student ${studentNum} testimonial`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={`https://images.unsplash.com/photo-${1500000000000 + studentNum * 10000}?q=80&w=1887&auto=format&fit=crop`} 
                      alt={`Student ${studentNum}`} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-[#064088]">Student {studentNum}</h3>
                      <p className="text-sm text-gray-600">Text {studentNum}</p>
                    </div>
                    <a href="#" className="ml-auto text-blue-400 hover:text-blue-500">
                      <FaTwitter size={18} />
                    </a>
                  </div>
                  <p className="text-gray-700">This student had an amazing experience with INTERLINK's language programs.</p>
                </div>
              </div>
            ))}
          </div>

          {/* More Students Subsection */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-[#064088] mb-10">
              More Students
            </h3>
            <Testimonials 
              testimonials={shadcnTestimonials} 
              title="What Our Community Says"
              description="Read testimonials from students who have transformed their language skills with INTERLINK"
            />
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

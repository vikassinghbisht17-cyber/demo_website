import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
  accentColor: string;
}

interface OpenRole {
  title: string;
  location: string;
  type: string;
  email: string;
}

export const Careers: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "The level of autonomy and trust here is incredible. I was given the opportunity to lead the development of our predictive maintenance platform for a major manufacturing client within my first year.",
      author: "Sandeep K.",
      role: "Lead Data Scientist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
      accentColor: "bg-primary"
    },
    {
      quote: "Passageway doesn't just talk about continuous learning—they actively invest in it. The transition from traditional data engineering to building GenAI pipelines was seamless thanks to the mentorship here.",
      author: "Vikas R.",
      role: "Senior Data Engineer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
      accentColor: "bg-accent-blue"
    },
    {
      quote: "The culture is incredibly collaborative. We solve complex problems for global banks, and knowing that our fraud detection models are making a real-world impact is immensely rewarding.",
      author: "Anjali K.",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
      accentColor: "bg-accent-peach"
    }
  ];

  const openRoles: OpenRole[] = [
    {
      title: "Lead Data Scientist (GenAI)",
      location: "Jaipur / Hybrid",
      type: "Full Time",
      email: "careers@pssgway.com"
    },
    {
      title: "Data Engineer (PySpark / AWS)",
      location: "Jaipur / Hybrid",
      type: "Full Time",
      email: "careers@pssgway.com"
    },
    {
      title: "Healthcare Analytics Consultant",
      location: "Remote (India)",
      type: "Full Time",
      email: "careers@pssgway.com"
    }
  ];

  return (
    <div className="bg-white">
      {/* Careers Hero */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-gray-900 text-white min-h-[60vh] flex flex-col justify-center">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
            alt="Team collaborating"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue rounded-full filter blur-[120px] opacity-20 pointer-events-none"></div>
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="text-accent-peach font-bold text-sm uppercase tracking-widest mb-6 block border-l-4 border-accent-peach pl-4">
              Careers at Passageway
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Navigate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-blue to-accent-peach">
                Data Journey
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed mb-10 max-w-2xl">
              Join a culture of continuous learning, impactful work, and innovation. Build the future of enterprise AI and data intelligence across Manufacturing, BFSI, Energy, and Digital Platforms.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#open-roles"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-primary font-bold px-8 py-4 rounded-full transition-all hover:bg-gray-100 hover:shadow-xl text-center cursor-pointer"
              >
                Explore Open Roles
              </a>
              <a
                href="#life"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('life')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent border border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full transition-all text-center backdrop-blur-sm cursor-pointer"
              >
                Life at Passageway
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Life at Passageway */}
      <section id="life" className="py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">Why Join Us?</h2>
            <p className="text-xl text-gray-500 font-medium">
              We invest in our people so they can invest in their craft. Experience an environment designed for growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-10 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-shadow duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Access dedicated training programs in GenAI, Data Engineering, and advanced predictive modeling to stay ahead of the curve.
              </p>
            </div>
            {/* Pillar 2 */}
            <div className="p-10 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-shadow duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-8 group-hover:bg-accent-blue transition-colors duration-500">
                <svg className="w-8 h-8 text-accent-blue group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Impactful Work</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Work directly with global leaders in the Manufacturing and Banking sectors, building solutions that transform their core operations.
              </p>
            </div>
            {/* Pillar 3 */}
            <div className="p-10 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-shadow duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-accent-peach/20 flex items-center justify-center mb-8 group-hover:bg-accent-peach transition-colors duration-500">
                <svg className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Inclusive Culture</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Join a diverse, collaborative team in Jaipur where every voice is heard, respected, and empowered to lead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-32 bg-gray-50 border-y border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Our People</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Voices of Passageway</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 relative group overflow-hidden">
                {/* Accent bar */}
                <div className={`absolute top-0 left-0 w-full h-2 ${test.accentColor}`}></div>
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-5 rounded-full blur-2xl -mt-10 -mr-10 ${test.accentColor}`}></div>
                
                <svg className="w-10 h-10 text-gray-200 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 text-lg leading-relaxed font-medium mb-8">
                  "{test.quote}"
                </p>
                <div className="flex items-center">
                  <img src={test.image} alt={test.author} className="w-14 h-14 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">{test.author}</h4>
                    <p className="text-sm text-gray-500 font-medium">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section id="open-roles" className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">Featured Opportunities</h2>
            <p className="text-xl text-gray-500 font-medium">Ready to take the next step? Explore our open roles.</p>
          </div>

          <div className="space-y-4">
            {openRoles.map((role, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{role.title}</h3>
                  <div className="flex items-center space-x-4 text-gray-500 font-medium text-sm">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {role.location}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {role.type}
                    </span>
                  </div>
                </div>
                <a
                  href={`mailto:${role.email}`}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded-full transition-colors whitespace-nowrap"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

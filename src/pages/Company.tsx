import React from 'react';
import { ContactForm } from '../components/ContactForm';

interface ValueItem {
  letter: string;
  title: string;
  image: string;
  colorClass: string;
}

export const Company: React.FC = () => {
  const valuesList: ValueItem[] = [
    {
      letter: 'E',
      title: 'Empathy',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=600&fit=crop',
      colorClass: 'text-[#a6c1ee]'
    },
    {
      letter: 'N',
      title: 'Nimble',
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=400&h=600&fit=crop',
      colorClass: 'text-[#a6c1ee]'
    },
    {
      letter: 'T',
      title: 'Trust',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=600&fit=crop',
      colorClass: 'text-[#f1c39e]'
    },
    {
      letter: 'I',
      title: 'Intelligence',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop',
      colorClass: 'text-[#a6c1ee]'
    },
    {
      letter: 'R',
      title: 'Responsible',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=600&fit=crop',
      colorClass: 'text-[#a6c1ee]'
    },
    {
      letter: 'E',
      title: 'Entrepreneur',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=600&fit=crop',
      colorClass: 'text-[#a6c1ee]'
    }
  ];

  return (
    <div className="bg-white">
      {/* Company Hero Section */}
      <section className="pt-32 pb-24 bg-white text-center px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-accent-blue/10 to-transparent rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-4xl mx-auto z-10 relative">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">About Us</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8 leading-[1.1]">
            Empowering the future with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-blue to-accent-peach">
              predictive intelligence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed mb-12">
            Established in 2023, Passageway is a premier Data Analytics company based in Jaipur, Rajasthan. We specialize in solving complex data challenges in the Automotive and BFSI industries.
          </p>
        </div>
      </section>

      {/* Company Industry Focus */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Automotive Focus */}
            <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-full blur-2xl -mt-10 -mr-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 relative z-10 border border-gray-100">
                <svg className="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6 relative z-10">Automotive Intelligence</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium relative z-10">
                We empower automotive businesses with deep insights in <strong className="text-gray-900">After-Sales Analytics</strong>, after-sales target setting and control, precise <strong className="text-gray-900">pricing strategy</strong>, claim surveillance, and franchise compliance.
              </p>
            </div>

            {/* BFSI Focus */}
            <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-peach/20 rounded-full blur-2xl -mt-10 -mr-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 relative z-10 border border-gray-100">
                <svg className="w-8 h-8 text-accent-peach" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6 relative z-10">BFSI Market Operations</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium relative z-10">
                We strengthen financial market operations by offering advanced <strong className="text-gray-900">fraud detection</strong>, risk management, and comprehensive audit and vigilance solutions tailored for branch and business banking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Vision Banner */}
      <section className="w-full relative overflow-hidden" style={{ background: 'linear-gradient(90deg, #0b2545 0%, #064789 100%)' }}>
        {/* Faded Background Text */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-white/5 font-extrabold select-none pointer-events-none text-[15rem] md:text-[20rem] leading-none ml-[-2rem]">
          Vision
        </div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left: Title */}
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white pl-8 md:pl-20 border-l-4 border-transparent relative">
                <div className="absolute left-full top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/10 blur-[80px] rounded-full pointer-events-none"></div>
                Our Vision
              </h2>
            </div>
            
            {/* Right: Text */}
            <div className="w-full md:w-2/3 md:pl-12">
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed max-w-4xl">
                To be the leader in providing data-driven solutions for the Automotive and BFSI sectors, empowering our partners to unlock their full data potential, optimize operations, and enhance decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-32 bg-[#f0f4f8] overflow-hidden relative">
        {/* Faded background text 'VALUES' */}
        <div className="absolute top-0 left-0 w-full text-center overflow-hidden pointer-events-none opacity-[0.03] select-none">
          <h2 className="text-[15rem] md:text-[25rem] font-black leading-none whitespace-nowrap">VALUES</h2>
        </div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight text-center mb-32">Our Values</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {valuesList.map((val, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="relative w-full aspect-[2/3] rounded-lg overflow-visible mb-6">
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20 select-none pointer-events-none">
                    <span className={`text-8xl md:text-[10rem] font-black drop-shadow-lg group-hover:text-primary transition-colors duration-500 ${val.colorClass}`}>
                      {val.letter}
                    </span>
                  </div>
                  <img src={val.image} alt={val.title} className="w-full h-full object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-700 relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center">{val.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[2.5rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl max-w-5xl mx-auto text-center">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-accent-blue opacity-20 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <span className="text-accent-blue font-bold text-xs uppercase tracking-widest mb-4 block">Our Culture</span>
              <h3 className="text-3xl md:text-5xl font-extrabold mb-8">At the heart of everything</h3>
              <p className="text-gray-200 font-medium leading-relaxed mb-10 text-lg md:text-xl max-w-3xl mx-auto">
                At the heart of everything we do are the people we serve and the talented team who make it possible. Together, we build a world of possibilities with an entrepreneurial spirit. We nurture an environment where everyone feels valued, respected, and empowered to thrive.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-peach" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module 12: Contact Form */}
      <ContactForm />
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { ContactForm } from '../components/ContactForm';

interface ValueItem {
  letter: string;
  title: string;
  image: string;
  colorClass: string;
}

export const Company: React.FC = () => {
  const [activeBio, setActiveBio] = useState<any>(null);

  useEffect(() => {
    if (activeBio) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeBio]);

  const founders = [
    {
      id: 'roop',
      name: 'Roop Singh',
      role: 'Founder & CEO',
      linkedin: 'https://www.linkedin.com/in/roop-s-47aaa4160/',
      shortBio: '25+ years in enterprise data engineering across Automotive, BFSI & Energy sectors. IIT (BHU) Varanasi alumnus.',
      fullBio: `Before founding Passageway, Roop spent over two decades embedded inside large enterprises — designing data systems, running analytics programmes, and watching the same critical problem repeat across every organisation: enormous amounts of data, but no intelligence layer to make it useful.

Those 25 years weren't just experience. They were a blueprint for exactly what needed to be built.

An alumnus of IIT (BHU) Varanasi, Roop brings 25+ years of expertise in enterprise data engineering across the Automotive, BFSI, and Energy sectors. From designing data pipelines and warehouse architectures for Tier-1 clients to leading end-to-end analytics transformation programmes, his work built the technical foundation that defines Passageway today.

At the AI & Gen AI frontlines, he pioneered early Generative AI adoption within enterprise environments — developing the frameworks that now sit at the core of Passageway's AI portfolio.

In 2023, Roop founded Passageway Tech. It was time to build what he had always known was missing.`,
      image: '/founder_image.jpeg'
    },
    {
      id: 'abhishek',
      name: 'Abhishek Dadhichi',
      role: 'Co-Founder and Director',
      linkedin: 'https://www.linkedin.com/in/abhishek-dadhichi-aa183b17/',
      shortBio: '20+ years of experience driving technical strategy. Specializing in advanced analytics and enterprise AI architecture.',
      fullBio: `Abhishek partners with business leaders to turn complex business challenges into scalable, technology-driven growth opportunities.

Over the past two decades, he has advised global enterprises on digital transformation, data strategy, and enterprise modernization. A defining chapter of his career was the ten years he spent in the United States, working alongside CXOs, business executives, and senior stakeholders to solve high-impact business problems. This experience shaped his ability to connect boardroom priorities with technology execution—ensuring that every solution delivered measurable business value rather than technical complexity.

Before Passageway, Abhishek built his career with Wipro Technologies, Cognizant Technology Solutions, ATCS, and Nagarro, where he led large-scale transformation initiatives, architected enterprise solutions, established delivery organizations, and built high-performing teams across global engagements. His experience spans strategy, solution architecture, data platforms, AI, cloud technologies, and business transformation.

At Passageway, Abhishek is building a culture of ownership. He is passionate about developing leaders who think like entrepreneurs, take end-to-end accountability, and relentlessly focus on customer success. Under his leadership, Passageway continues to invest in developing world-class talent in Data Engineering, Artificial Intelligence, and Data Science while fostering a mindset of innovation, excellence, and continuous learning.

He believes that sustainable transformation is achieved when business vision, technology, and people move in unison. His leadership philosophy is rooted in strategic thinking, operational excellence, and an unwavering commitment to creating long-term value for clients.`,
      image: '/co_founder_one_image.png'
    },
    {
      id: 'varun',
      name: 'Varun Pandey',
      role: 'Co-Founder',
      linkedin: 'https://www.linkedin.com/in/varun-pandey-27a33784/',
      shortBio: 'Leading strategic growth and operational excellence with a strong focus on enabling AI-driven solutions for businesses.',
      fullBio: `Varun leads strategic growth and operational excellence with a strong focus on enabling AI-driven solutions for businesses.

With 12 years of industry experience, Varun brings deep expertise in building and scaling high-performing technology applications. He has a proven track record of delivering reliable, scalable solutions with a 100% execution-focused approach. His leadership combines technical depth, business clarity, and a strong commitment to innovation.

At Passageway, Varun focuses on helping organizations adopt practical AI solutions that improve efficiency, unlock growth opportunities, and create long-term business value.`,
      image: '/co_founder_three_image.png'
    }
  ];

  const leads = Array.from({ length: 8 }, (_, i) => ({
    id: `lead-${i + 1}`,
    name: `Core Lead ${i + 1}`,
    role: `Leadership Role`,
    linkedin: '',
    shortBio: `Core team member description for lead ${i + 1}.`,
    fullBio: `Detailed professional background for Core Lead ${i + 1}. This content is currently a placeholder and will be updated later with actual team information.`,
    image: ''
  }));

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
      <section className="pt-36 pb-28 bg-white text-center px-4 overflow-hidden relative">
        {/* AI-style ambient background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.10),_transparent_60%)]" />
        <div
          className="absolute inset-0 -z-10 opacity-70"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0,53,89,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,53,89,0.09) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 75% 65% at 50% 15%, black 35%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 15%, black 35%, transparent 85%)',
          }}
        />
        {/* Scanning accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-24 bg-gradient-to-b from-accent-blue/25 to-transparent blur-2xl -z-10 animate-[gradient-shift_4s_ease_infinite]" />

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-primary/15 to-transparent rounded-full blur-3xl -z-10 animate-pulse [animation-duration:6s]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-accent-blue/20 to-transparent rounded-full blur-3xl -z-10 animate-pulse [animation-duration:8s]"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-accent-peach/15 rounded-full blur-[110px] -z-10"></div>

        <div className="max-w-4xl mx-auto z-10 relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white shadow-sm px-4 py-1.5 mb-6 text-primary font-bold text-xs uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            About Us
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8 leading-[1.1]">
            Empowering the future with <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-primary via-accent-blue to-accent-peach animate-[gradient-shift_5s_ease_infinite]">
              predictive intelligence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed mb-12">
            Founded in 2023 in Jaipur, Rajasthan, Passageway Tech Private Limited is a pioneering Data Engineering and AI consultancy. We empower enterprises to synthesize raw, fragmented datasets into coherent, actionable intelligence—engineered through robust data platforms, advanced analytics, and production-grade Generative AI frameworks built for real-world impact.
          </p>

          {/* Trust / metric strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 pt-8 border-t border-gray-200">
            <div className="text-left">
              <p className="text-2xl font-extrabold text-gray-900">2023</p>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Founded</p>
            </div>
            <div className="w-px h-8 bg-gray-300 hidden sm:block" />
            <div className="text-left">
              <p className="text-2xl font-extrabold text-gray-900">Jaipur</p>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Headquarters</p>
            </div>
            <div className="w-px h-8 bg-gray-300 hidden sm:block" />
            <div className="text-left">
              <p className="text-2xl font-extrabold text-gray-900">AI & Data</p>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Core Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Divider Section (Wipro Inspired) */}
      <section className="py-16 bg-[#0b295c] text-white border-y border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-accent-blue/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Card 1 */}
            <div
              className="group bg-[#0f3460]/40 backdrop-blur-md border-t-4 border-accent-peach px-6 py-10 rounded-none text-center shadow-lg border border-white/5 hover:scale-105 hover:bg-[#0f3460]/60 hover:shadow-2xl hover:shadow-accent-peach/20 hover:border-white/20 transition-all duration-500 transform cursor-pointer animate-[fadeUp_0.6s_ease-out_both]"
              style={{ animationDelay: '100ms' }}
            >
              <span className="block text-4xl md:text-5xl font-bold text-white mb-3 group-hover:text-accent-peach transition-colors duration-300">50+</span>
              <span className="text-sm font-medium text-blue-200 uppercase tracking-wider group-hover:text-white transition-colors duration-300">Data & AI Professionals</span>
            </div>
            {/* Card 2 */}
            <div
              className="group bg-[#0f3460]/40 backdrop-blur-md border-t-4 border-accent-blue px-6 py-10 rounded-none text-center shadow-lg border border-white/5 hover:scale-105 hover:bg-[#0f3460]/60 hover:shadow-2xl hover:shadow-accent-blue/20 hover:border-white/20 transition-all duration-500 transform cursor-pointer animate-[fadeUp_0.6s_ease-out_both]"
              style={{ animationDelay: '200ms' }}
            >
              <span className="block text-4xl md:text-5xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors duration-300">2023</span>
              <span className="text-sm font-medium text-blue-200 uppercase tracking-wider group-hover:text-white transition-colors duration-300">Founded in Jaipur, India</span>
            </div>
            {/* Card 3 */}
            <div
              className="group bg-[#0f3460]/40 backdrop-blur-md border-t-4 border-accent-peach px-6 py-10 rounded-none text-center shadow-lg border border-white/5 hover:scale-105 hover:bg-[#0f3460]/60 hover:shadow-2xl hover:shadow-accent-peach/20 hover:border-white/20 transition-all duration-500 transform cursor-pointer animate-[fadeUp_0.6s_ease-out_both]"
              style={{ animationDelay: '300ms' }}
            >
              <span className="block text-4xl md:text-5xl font-bold text-white mb-3 group-hover:text-accent-peach transition-colors duration-300">5</span>
              <span className="text-sm font-medium text-blue-200 uppercase tracking-wider group-hover:text-white transition-colors duration-300">Gen AI Frameworks</span>
            </div>
            {/* Card 4 */}
            <div
              className="group bg-[#0f3460]/40 backdrop-blur-md border-t-4 border-accent-blue px-6 py-10 rounded-none text-center shadow-lg border border-white/5 hover:scale-105 hover:bg-[#0f3460]/60 hover:shadow-2xl hover:shadow-accent-blue/20 hover:border-white/20 transition-all duration-500 transform cursor-pointer animate-[fadeUp_0.6s_ease-out_both]"
              style={{ animationDelay: '400ms' }}
            >
              <span className="block text-4xl md:text-5xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors duration-300">100%</span>
              <span className="text-sm font-medium text-blue-200 uppercase tracking-wider group-hover:text-white transition-colors duration-300">Delivery Track Record</span>
            </div>
          </div>
        </div>

        {/* Load animations keyframes */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          `
        }} />
      </section>

      {/* Leadership Team Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-blue font-bold text-xs uppercase tracking-widest mb-3 block">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">Meet Our Founders</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 lg:max-w-[1066px] mx-auto">
            {founders.map((founder) => (
              <div key={founder.id} className="common-card overflow-hidden flex flex-col group cursor-pointer" onClick={() => setActiveBio(founder)}>
                {/* Image Section */}
                <div className="w-full h-72 sm:h-80 lg:h-64 relative overflow-hidden bg-gray-50 flex-shrink-0 border-b border-gray-100">
                  {founder.image ? (
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className={`w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105 ${founder.id === 'abhishek'
                          ? 'object-[center_15%]'
                          : 'object-top'
                        }`}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center absolute inset-0">
                      <svg className="w-16 h-16 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Text Section */}
                <div className="w-full p-6 sm:p-8 flex flex-col flex-grow bg-white relative">
                  <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2">{founder.name}</h3>
                  <span className="text-sm font-bold text-gray-600 block mb-4">{founder.role}</span>
                  {founder.linkedin && (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0077b5] hover:text-[#005582] transition-colors mb-6 w-fit"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${founder.name}'s LinkedIn profile`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                  <button className="inline-flex items-center text-sm font-bold text-primary hover:text-accent-blue transition-colors mt-auto w-fit">
                    Read Bio <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14m0 0l-6-6m6 6l-6 6" /></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Core Leadership Team</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:max-w-[950px] mx-auto">
              {leads.map((lead) => (
                <div key={lead.id} className="common-card overflow-hidden flex flex-col group cursor-pointer" onClick={() => setActiveBio(lead)}>
                  {/* Image Section */}
                  <div className="w-full h-48 relative overflow-hidden bg-gray-50 flex-shrink-0 border-b border-gray-100">
                    {lead.image ? (
                      <img
                        src={lead.image}
                        alt={lead.name}
                        className="w-full h-full object-cover object-top absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center absolute inset-0">
                        <svg className="w-10 h-10 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Text Section */}
                  <div className="w-full p-5 sm:p-6 flex flex-col flex-grow bg-white relative">
                    <h3 className="text-lg font-extrabold text-gray-900 mb-1">{lead.name}</h3>
                    <span className="text-xs font-bold text-gray-600 block mb-3">{lead.role}</span>
                    {lead.linkedin && (
                      <a
                        href={lead.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0077b5] hover:text-[#005582] transition-colors mb-4 w-fit"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${lead.name}'s LinkedIn profile`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                    <button className="inline-flex items-center text-xs font-bold text-primary hover:text-accent-blue transition-colors mt-auto w-fit">
                      Read Bio <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14m0 0l-6-6m6 6l-6 6" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Industry Focus */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-blue font-bold text-xs uppercase tracking-widest mb-3 block">Specialized Solutions</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">Industry Focus</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Manufacturing Focus */}
            <div className="common-card p-10 group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/10 rounded-full blur-2xl -mt-10 -mr-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div>
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 relative z-10 border border-gray-100">
                  <svg className="w-8 h-8 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4 relative z-10">Manufacturing Analytics</h3>
                <p className="text-gray-600 text-base leading-relaxed font-medium relative z-10">
                  Leveraging our proprietary <strong className="text-gray-900">4M Traceability framework</strong> (Man, Machine, Material, Method) to unify ERP & SCADA data for OEE tracking, scrap analysis, and machine failure prediction.
                </p>
              </div>
            </div>

            {/* BFSI Focus */}
            <div className="common-card p-10 group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-peach/20 rounded-full blur-2xl -mt-10 -mr-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div>
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 relative z-10 border border-gray-100">
                  <svg className="w-8 h-8 text-accent-peach" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4 relative z-10">Banking & Financial Services</h3>
                <p className="text-gray-600 text-base leading-relaxed font-medium relative z-10">
                  We engineer credit default prediction models, loan application processing bots, fraud vigilance monitors, and our flagship <strong className="text-gray-900">Resolution OS</strong> orchestration layer for NBFCs.
                </p>
              </div>
            </div>

            {/* Energy Focus */}
            <div className="common-card p-10 group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/10 rounded-full blur-2xl -mt-10 -mr-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div>
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 relative z-10 border border-gray-100">
                  <svg className="w-8 h-8 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4 relative z-10">Energy & Utilities</h3>
                <p className="text-gray-600 text-base leading-relaxed font-medium relative z-10">
                  We integrate SCADA and meter telemetry into cloud data lakes to enable asset health performance monitoring, power outage intelligence, and energy consumption forecasting.
                </p>
              </div>
            </div>

            {/* Digital Platforms Focus */}
            <div className="common-card p-10 group relative overflow-hidden flex flex-col justify-between lg:col-span-1 md:col-span-2 lg:max-w-none md:max-w-md md:mx-auto lg:mx-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mt-10 -mr-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div>
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 relative z-10 border border-gray-100">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4 relative z-10">Digital Platforms & Media</h3>
                <p className="text-gray-600 text-base leading-relaxed font-medium relative z-10">
                  We build real-time product engagement recommenders, user behavior cohort tracking tables, digital asset analytics, and marketing funnel performance engines.
                </p>
              </div>
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
                Our Vision & Mission
              </h2>
            </div>

            {/* Right: Text */}
            <div className="w-full md:w-2/3 md:pl-12">
              <h3 className="text-2xl md:text-3xl text-white font-extrabold mb-4 leading-snug">
                "Become the Trusted Partner for Enterprise Data Transformation."
              </h3>
              <p className="text-lg md:text-xl text-blue-100 font-light leading-relaxed max-w-4xl">
                Enabling organizations to harness the full power of their data through modern data platforms, advanced analytics, and AI-driven solutions — delivering measurable business value at every stage.
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-24 md:gap-x-8 lg:gap-y-8 mt-12 lg:mt-0">
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
                The foundation of our success is the people we serve and the talented team who makes it all possible. Together, we build a world of possibilities with an entrepreneurial spirit. We nurture an environment where everyone feels valued, respected, and empowered to thrive.
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

      {/* Founder Bio Modal */}
      {activeBio && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={() => setActiveBio(null)}>
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" onClick={() => setActiveBio(null)}></div>
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden relative z-10 h-[600px] max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveBio(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-20"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row overflow-hidden min-h-0 flex-1">
              {/* Modal Image */}
              <div className="w-full md:w-5/12 h-72 md:h-auto min-h-[300px] bg-gray-50 flex-shrink-0 relative">
                {activeBio.image ? (
                  <img src={activeBio.image} alt={activeBio.name} className="w-full h-full object-cover object-top absolute inset-0" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center absolute inset-0 border-b md:border-r border-gray-100">
                    <svg className="w-20 h-20 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
              {/* Modal Text */}
              <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col bg-white overflow-y-auto">
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">{activeBio.name}</h3>
                <span className="text-md font-bold text-primary uppercase tracking-widest block mb-4">{activeBio.role}</span>
                {activeBio.linkedin && (
                  <a
                    href={activeBio.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0077b5] hover:text-[#005582] transition-colors mb-8 inline-block"
                    aria-label={`${activeBio.name}'s LinkedIn profile`}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}
                <div className="prose prose-gray">
                  <p className="text-gray-600 font-medium leading-relaxed whitespace-pre-wrap">
                    {activeBio.fullBio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

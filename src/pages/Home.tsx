import React from 'react';
import { Link } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';

export const Home: React.FC = () => {

  return (
    <div className="bg-white">
      {/* Module 3: Animated Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center pt-24 pb-32 text-center px-4 overflow-hidden relative bg-secondary">
        {/* Full-screen Background Video */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          {/* <source src="/want_to_add_a_video_here_at_my.mp4" type="video/mp4" /> */}
          <source src="/pssgway_website__RECREATE.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <div className="max-w-5xl mx-auto z-20 relative">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
            Empowering business<br />
            <span className="flex flex-wrap justify-center items-center gap-x-4 mt-2">
              <span>with</span>
              <span className="inline-grid align-bottom relative">
                <span className="col-start-1 row-start-1 animate-[textCycle1_9s_ease-in-out_infinite] text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-accent-blue to-accent-peach">
                  hidden gems
                </span>
                <span className="col-start-1 row-start-1 animate-[textCycle2_9s_ease-in-out_infinite] text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-accent-blue to-accent-peach">
                  predictive AI
                </span>
                <span className="col-start-1 row-start-1 animate-[textCycle3_9s_ease-in-out_infinite] text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-accent-blue to-accent-peach">
                  smart insights
                </span>
              </span>
              <span className="whitespace-nowrap">of data</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 font-medium max-w-4xl mx-auto leading-relaxed">
            We empower enterprises to transform raw, fragmented data <br className="hidden md:block" />
            into actionable intelligence through modern data platforms, <br className="hidden md:block" />
            advanced analytics, and real-world Generative AI frameworks.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary hover:bg-secondary text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-primary/20 w-full sm:w-auto text-center border border-primary hover:border-secondary cursor-pointer"
            >
              Get In Touch
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white font-bold hover:text-accent-peach flex items-center group transition-colors cursor-pointer"
            >
              Explore Our Services
              <div className="ml-3 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all backdrop-blur-sm border border-white/20">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Custom inline animations for text cycling */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes textCycle1 {
            0%, 28% { opacity: 1; transform: translateY(0); }
            33%, 95% { opacity: 0; transform: translateY(-20px); }
            96%, 100% { opacity: 0; transform: translateY(20px); }
          }
          @keyframes textCycle2 {
            0%, 28% { opacity: 0; transform: translateY(20px); }
            33%, 61% { opacity: 1; transform: translateY(0); }
            66%, 100% { opacity: 0; transform: translateY(-20px); }
          }
          @keyframes textCycle3 {
            0%, 61% { opacity: 0; transform: translateY(20px); }
            66%, 95% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-20px); }
          }
        `}} />
      </section>


      {/* Module 5: Core Competencies Preview */}
      <section id="services" className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-accent-blue font-bold text-xs uppercase tracking-widest mb-3 block">Expertise</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Our Capabilities</h2>
            </div>
            <Link to="/capabilities" className="mt-6 md:mt-0 inline-flex items-center font-bold text-primary hover:text-accent-blue uppercase tracking-widest text-sm transition-colors border-b-2 border-primary pb-1 hover:border-accent-blue">
              View All Capabilities <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cards for each competency */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <h3 className="text-xl font-bold text-primary mb-4">Data Engineering & Platforms</h3>
              <p className="text-gray-600 font-medium mb-6">Designing resilient data lakes and scalable ingestion pipelines to unify siloed enterprise data.</p>
              <Link to="/capabilities" className="text-sm font-bold text-accent-blue group-hover:text-primary transition-colors">Explore Engineering &rarr;</Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <h3 className="text-xl font-bold text-primary mb-4">Advanced Analytics & BI</h3>
              <p className="text-gray-600 font-medium mb-6">Synthesizing complex data into operational intelligence through custom KPIs and automated workflows.</p>
              <Link to="/capabilities" className="text-sm font-bold text-accent-blue group-hover:text-primary transition-colors">Explore Analytics &rarr;</Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <h3 className="text-xl font-bold text-primary mb-4">Predictive Intelligence</h3>
              <p className="text-gray-600 font-medium mb-6">Deploying enterprise ML models to anticipate customer actions and flag operational risks proactively.</p>
              <Link to="/capabilities" className="text-sm font-bold text-accent-blue group-hover:text-primary transition-colors">Explore ML &rarr;</Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <h3 className="text-xl font-bold text-primary mb-4">Generative AI Frameworks</h3>
              <p className="text-gray-600 font-medium mb-6">Implementing reusable GenAI architectures for intelligent document processing and knowledge extraction.</p>
              <Link to="/capabilities" className="text-sm font-bold text-accent-blue group-hover:text-primary transition-colors">Explore GenAI &rarr;</Link>
            </div>
          </div>
        </div>
      </section>



      {/* Module 6: Case Studies (Full Width Grid) */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <Link to="/solutions" className="relative h-[500px] bg-gray-900 group overflow-hidden cursor-pointer block">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-40" alt="Automotive" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-20 h-20 rounded-full border border-white flex items-center justify-center bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all hover:scale-110">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-12 w-full transform group-hover:-translate-y-4 transition-transform duration-500">
              <span className="text-accent-blue font-bold text-xs uppercase tracking-widest mb-3 block">Automotive</span>
              <h3 className="text-white text-4xl font-bold leading-tight">Automotive After-Sales <br />Analytics Platform</h3>
            </div>
          </Link>
          <Link to="/solutions" className="relative h-[500px] bg-gray-900 group overflow-hidden cursor-pointer block">
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-40" alt="Financial Services" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-20 h-20 rounded-full border border-white flex items-center justify-center bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all hover:scale-110">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-12 w-full transform group-hover:-translate-y-4 transition-transform duration-500">
              <span className="text-accent-peach font-bold text-xs uppercase tracking-widest mb-3 block">Banking & Financial Services</span>
              <h3 className="text-white text-4xl font-bold leading-tight">Financial Document <br />Extraction Platform</h3>
            </div>
          </Link>
          <Link to="/solutions" className="relative h-[500px] bg-gray-900 group overflow-hidden cursor-pointer block">
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-40" alt="Manufacturing" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-20 h-20 rounded-full border border-white flex items-center justify-center bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all hover:scale-110">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-12 w-full transform group-hover:-translate-y-4 transition-transform duration-500">
              <span className="text-accent-red font-bold text-xs uppercase tracking-widest mb-3 block">Manufacturing</span>
              <h3 className="text-white text-4xl font-bold leading-tight">Manufacturing Operational <br />Analytics Platform</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Module 7: Insights/News Slider (Horizontal Scroll) */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Latest Insights</h2>
            <p className="text-gray-500 mt-4 text-xl font-medium">Perspectives from our global experts.</p>
          </div>
          <Link to="/insights" className="hidden sm:inline-flex items-center text-sm font-bold text-primary uppercase tracking-widest hover:text-secondary transition-colors">
            View All <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>

        {/* Horizontal scrollable container */}
        <div className="flex overflow-x-auto space-x-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto no-scrollbar snap-x">
          {/* Card 1 */}
          <div className="min-w-[340px] md:min-w-[420px] bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden group snap-start transition-shadow duration-300 flex flex-col">
            <div className="h-56 bg-gray-200 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" alt="AI" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-primary text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">Report</div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">The Generative AI Maturity Index 2026</h3>
              <p className="text-gray-600 text-base mb-8 line-clamp-3 font-medium flex-grow">A comprehensive analysis of how Fortune 500 companies are securely deploying Artificial Intelligence.</p>
              <Link to="/insights" className="text-sm font-bold text-gray-900 hover:text-primary transition-colors flex items-center">Read Article <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
            </div>
          </div>
          {/* Card 2 */}
          <div className="min-w-[340px] md:min-w-[420px] bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden group snap-start transition-shadow duration-300 flex flex-col">
            <div className="h-56 bg-gray-200 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" alt="Tech" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-accent-teal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">Blog</div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">Securing Cloud-Native Architectures</h3>
              <p className="text-gray-600 text-base mb-8 line-clamp-3 font-medium flex-grow">Five critical strategies for protecting enterprise microservices from emerging network threats.</p>
              <Link to="/insights" className="text-sm font-bold text-gray-900 hover:text-primary transition-colors flex items-center">Read Article <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
            </div>
          </div>
          {/* Card 3 */}
          <div className="min-w-[340px] md:min-w-[420px] bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden group snap-start transition-shadow duration-300 flex flex-col">
            <div className="h-56 bg-gray-200 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt="People" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-accent-blue text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">Whitepaper</div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">The Future of Remote Work Infrastructure</h3>
              <p className="text-gray-600 text-base mb-8 line-clamp-3 font-medium flex-grow">Designing resilient networks for a permanently distributed global enterprise workforce.</p>
              <Link to="/insights" className="text-sm font-bold text-gray-900 hover:text-primary transition-colors flex items-center">Read Article <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Module 8: About Passageway (Value Proposition) */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="bg-primary rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl relative">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="md:w-1/2 p-12 lg:p-20 flex flex-col justify-center text-white relative z-10">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">We're Your Partner For Innovation & Growth</h2>
            <p className="mb-10 text-xl text-gray-200 font-medium leading-relaxed">
              At Passageway, we leverage advanced data analytics and AI to solve complex industry challenges. From predictive maintenance in automotives to fraud detection in banking, our solutions drive measurable business outcomes.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <div className="text-4xl font-black text-accent-peach">3+</div>
                <div className="text-sm text-gray-300 mt-1 font-bold">Industry Verticals</div>
              </div>
              <div>
                <div className="text-4xl font-black text-accent-peach">AI</div>
                <div className="text-sm text-gray-300 mt-1 font-bold">Powered Solutions</div>
              </div>
            </div>
            <div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block bg-white text-primary font-extrabold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg cursor-pointer"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="md:w-1/2 h-80 md:h-auto bg-gray-800 relative">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&q=80" alt="Team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-50 md:opacity-0 md:bg-gradient-to-l md:from-transparent md:to-primary md:opacity-80"></div>
          </div>
        </div>
      </section>

      {/* Module 9: Industry Focus */}
      <section className="border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-gray-50 p-16 md:p-24 lg:p-32 flex flex-col justify-center order-2 lg:order-1">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4">Industry Focus</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
              Deep expertise across diverse sectors.
            </h2>
            <p className="text-xl text-gray-600 mb-12 font-medium leading-relaxed">
              We deliver purpose-built solutions for the industries that matter most to our clients — transforming data into actionable insights and strategic advantage.
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-12 border-t border-gray-200 pt-12">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-8 bg-accent-blue rounded-full shrink-0"></div>
                <div className="font-black text-gray-900 uppercase tracking-wider text-sm lg:text-base leading-tight">Automotive</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-8 bg-accent-red rounded-full shrink-0"></div>
                <div className="font-black text-gray-900 uppercase tracking-wider text-sm lg:text-base leading-tight">Manufacturing</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-8 bg-accent-peach rounded-full shrink-0"></div>
                <div className="font-black text-gray-900 uppercase tracking-wider text-sm lg:text-base leading-tight">Banking & FS</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-8 bg-accent-teal rounded-full shrink-0"></div>
                <div className="font-black text-gray-900 uppercase tracking-wider text-sm lg:text-base leading-tight">Energy & Utilities</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-8 bg-primary rounded-full shrink-0"></div>
                <div className="font-black text-gray-900 uppercase tracking-wider text-sm lg:text-base leading-tight">Digital Platforms</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-8 bg-secondary rounded-full shrink-0"></div>
                <div className="font-black text-gray-900 uppercase tracking-wider text-sm lg:text-base leading-tight">Growing Portfolio</div>
              </div>
            </div>
            <div>
              <Link to="/company" className="inline-flex items-center text-sm font-extrabold text-gray-900 hover:text-primary uppercase tracking-widest transition-colors border-b-2 border-gray-900 pb-1 hover:border-primary">
                Explore Solutions <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
          <div className="relative min-h-[500px] lg:min-h-full order-1 lg:order-2">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80" alt="Business Analytics" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Module 10: Careers Section */}
      <section id="careers" className="py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent-red font-bold text-xs uppercase tracking-widest mb-4 block">Careers</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">Join the Passageway Team</h2>
            <p className="text-xl text-gray-500 font-medium">Build your career at the intersection of data, AI, and real-world business impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="relative h-[420px] rounded-2xl overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team Culture" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">Our Culture</h3>
                <p className="text-gray-300 text-sm font-medium">A collaborative environment where innovation meets purpose.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative h-[420px] rounded-2xl overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" alt="Career Growth" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">Growth & Learning</h3>
                <p className="text-gray-300 text-sm font-medium">Continuous upskilling in ML, AI, and cutting-edge data platforms.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="relative h-[420px] rounded-2xl overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80" alt="Real Impact" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">Real-World Impact</h3>
                <p className="text-gray-300 text-sm font-medium">Work on projects that directly transform how industries operate.</p>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-secondary rounded-2xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-70"></div>
            <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-accent-blue rounded-full mix-blend-screen filter blur-3xl opacity-50"></div>
            <div className="relative z-10 mb-8 md:mb-0">
              <h3 className="text-white text-3xl md:text-4xl font-extrabold mb-3">Ready to make an impact?</h3>
              <p className="text-gray-400 text-lg font-medium">Explore open positions and join our growing team in Jaipur.</p>
            </div>
            <Link to="/careers" className="relative z-10 bg-white text-primary font-extrabold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg text-lg whitespace-nowrap">
              Explore Careers
            </Link>
          </div>
        </div>
      </section>

      {/* Module 11: Bento Promo Grid */}
      <section className="max-w-[1600px] mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Discover More</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[350px]">
          {/* Block 1 */}
          <div className="bg-primary text-white p-10 flex flex-col justify-between rounded-2xl hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-primary/20">
            <div>
              <span className="uppercase tracking-widest text-xs font-bold text-primary bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">Innovation Labs</span>
              <h3 className="text-3xl font-bold mt-8 leading-tight">Co-create the future of your industry</h3>
            </div>
            <Link to="/company" className="inline-flex items-center text-sm font-bold hover:underline uppercase tracking-widest">
              Explore Labs <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
          {/* Block 2 */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-sm relative group">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" alt="Tech" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          {/* Block 3 */}
          <div className="bg-accent-teal text-white p-10 flex flex-col justify-between rounded-2xl hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-teal-500/20">
            <div>
              <span className="uppercase tracking-widest text-xs font-bold text-accent-teal bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">Podcasts</span>
              <h3 className="text-3xl font-bold mt-8 leading-tight">Listen to Enterprise Tech Talks</h3>
            </div>
            <a href="#" className="inline-flex items-center text-sm font-bold hover:underline uppercase tracking-widest">
              Listen Now <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
          {/* Block 4 */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-sm relative group">
            <img src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&q=80" alt="Podcast" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-lg">
                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module 12: Contact Form Integration */}
      <ContactForm />
    </div>
  );
};

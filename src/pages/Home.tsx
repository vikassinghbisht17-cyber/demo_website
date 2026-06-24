import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';

type ServiceTab = 'consulting' | 'ml' | 'engineering' | 'genai';

interface TabContent {
  title: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
}

export const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ServiceTab>('consulting');

  const tabDetails: Record<ServiceTab, TabContent> = {
    consulting: {
      title: 'Business Consulting',
      description: 'We partner with organizations in the Automotive and Banking sectors to optimize operations, improve decision-making, and unlock new revenue streams through data-driven strategies and digital transformation.',
      bullets: [
        'Automotive After-Sales & Connected Vehicles',
        'Loan Management & Risk Analytics',
        'Fraud Detection & Audit Analytics'
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    ml: {
      title: 'ML & Data Science',
      description: 'Deploy production-grade machine learning models to solve predictive and classification problems. From demand forecasting to real-time anomaly detection, we turn statistical insights into automated decisions.',
      bullets: [
        'Predictive Maintenance & Fault Forecasting',
        'Customer Churn Modeling & Lifetime Value Optimization',
        'Sentiment Analysis & NLP Classification Engines'
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    engineering: {
      title: 'Data Engineering',
      description: 'Build scalable, reliable data pipelines and lakehouses. We design and implement robust ETL/ELT architectures that aggregate fragmented datasets into single sources of truth.',
      bullets: [
        'Real-time Data Streaming (Kafka, Spark, Event Streams)',
        'Cloud Lakehouse Implementations (Snowflake, Databricks, BigQuery)',
        'Modern Data Stack Orchestration (dbt, Airflow, Prefect)'
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    genai: {
      title: 'Generative AI',
      description: 'Unlock unstructured data using Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG). We build custom AI agents that securely summarize records, answer queries, and automate workflows.',
      bullets: [
        'Enterprise RAG Pipelines with Vector Database Integration',
        'Semantic Document Search & Summarization Engines',
        'Agentic Workflow Automation & LLM Guardrails'
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  };

  const currentTab = tabDetails[activeTab];

  return (
    <div className="bg-white">
      {/* Module 3: Animated Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center pt-24 pb-32 text-center px-4 overflow-hidden relative bg-secondary">
        {/* Full-screen Background Video */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/want_to_add_a_video_here_at_my.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        <div className="max-w-5xl mx-auto z-20 relative">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
            Empowering business<br />with{' '}
            <span className="inline-grid align-bottom relative">
              <span className="col-start-1 row-start-1 animate-[slideCycle_9s_ease-in-out_infinite_0s] opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-accent-blue to-accent-peach pr-2">
                hidden gems
              </span>
              <span className="col-start-1 row-start-1 animate-[slideCycle_9s_ease-in-out_infinite_3s] opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-accent-blue to-accent-peach pr-2">
                predictive AI
              </span>
              <span className="col-start-1 row-start-1 animate-[slideCycle_9s_ease-in-out_infinite_6s] opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-accent-blue to-accent-peach pr-2">
                smart insights
              </span>
            </span>
            of data
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 font-medium max-w-3xl mx-auto leading-relaxed">
            We specialize in solving complex data challenges in the Automotive and Banking industries, offering predictive analytics, machine learning, and data-driven solutions.
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

        {/* Custom inline animations for slideCycle */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slideCycle {
            0%, 25% { opacity: 1; transform: translateY(0); }
            30%, 100% { opacity: 0; transform: translateY(-20px); }
          }
        `}} />
      </section>

      {/* Module 4: Client/Partner Logo Marquee */}
      <section className="border-y border-gray-100 bg-gray-50 py-12 overflow-hidden relative">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Trusted by Global Industry Leaders</p>
        </div>
        {/* Gradient masks for smooth edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex space-x-24 items-center px-12">
            <span className="text-2xl font-black text-gray-400 grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer">TechCorp</span>
            <span className="text-2xl font-black text-gray-400 grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer">GlobalBank</span>
            <span className="text-2xl font-black text-gray-400 grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer">HealthPlus</span>
            <span className="text-2xl font-black text-gray-400 grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer">RetailMax</span>
            <span className="text-2xl font-black text-gray-400 grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer">AutoDynamics</span>
            <span className="text-2xl font-black text-gray-400 grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer">CloudSystems</span>
          </div>
          <div className="animate-marquee whitespace-nowrap flex space-x-24 items-center px-12 absolute top-0">
            <span className="text-2xl font-black text-gray-400 grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer">TechCorp</span>
            <span className="text-2xl font-black text-gray-400 grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer">GlobalBank</span>
            <span className="text-2xl font-black text-gray-400 grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer">HealthPlus</span>
            <span className="text-2xl font-black text-gray-400 grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer">RetailMax</span>
            <span className="text-2xl font-black text-gray-400 grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer">AutoDynamics</span>
            <span className="text-2xl font-black text-gray-400 grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer">CloudSystems</span>
          </div>
        </div>
      </section>

      {/* Module 5: Interactive Services Tabs */}
      <section id="services" className="py-32 bg-white max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 text-center md:text-left leading-tight">
          Our Core <br className="hidden md:block" />Competencies
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Tab Selection */}
          <div className="md:w-1/3 mb-8 md:mb-0 space-y-3">
            {(['consulting', 'ml', 'engineering', 'genai'] as ServiceTab[]).map((tab) => {
              const isActive = activeTab === tab;
              const labels: Record<ServiceTab, string> = {
                consulting: 'Business Consulting',
                ml: 'ML & Data Science',
                engineering: 'Data Engineering',
                genai: 'Generative AI',
              };
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-6 py-5 rounded-xl border-l-4 font-bold text-lg transition-all flex justify-between items-center group cursor-pointer ${
                    isActive
                      ? 'bg-gray-50 border-primary text-primary shadow-sm'
                      : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {labels[tab]}
                  <svg className={`w-5 h-5 transition-transform ${isActive ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div className="md:w-2/3 bg-gray-50 rounded-3xl p-10 md:p-14 border border-gray-100 flex flex-col justify-center min-h-[420px] transition-all duration-300">
            <span className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 text-primary">
              {currentTab.icon}
            </span>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-6">{currentTab.title}</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
              {currentTab.description}
            </p>
            <ul className="space-y-5 mb-10">
              {currentTab.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-center text-gray-800 font-bold border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <svg className="w-6 h-6 text-accent-blue mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {bullet}
                </li>
              ))}
            </ul>
            <div>
              <Link to="/company" className="inline-flex items-center font-black text-primary hover:text-secondary uppercase tracking-widest text-sm transition-colors border-b-2 border-primary pb-1">
                Explore Solutions <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Module 6: Case Studies (Full Width Grid) */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="relative h-[500px] bg-gray-900 group overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-40" alt="Banking" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-20 h-20 rounded-full border border-white flex items-center justify-center bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all hover:scale-110">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-12 w-full transform group-hover:-translate-y-4 transition-transform duration-500">
              <span className="text-accent-blue font-bold text-xs uppercase tracking-widest mb-3 block">Automotive</span>
              <h3 className="text-white text-4xl font-bold leading-tight">Connected Vehicle <br />Analytics Platform</h3>
            </div>
          </div>
          <div className="relative h-[500px] bg-gray-900 group overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-40" alt="Retail" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-20 h-20 rounded-full border border-white flex items-center justify-center bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all hover:scale-110">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-12 w-full transform group-hover:-translate-y-4 transition-transform duration-500">
              <span className="text-accent-peach font-bold text-xs uppercase tracking-widest mb-3 block">Banking & Finance</span>
              <h3 className="text-white text-4xl font-bold leading-tight">Loan Portfolio <br />Risk Management</h3>
            </div>
          </div>
          <div className="relative h-[500px] bg-gray-900 group overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-40" alt="Maintenance" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-20 h-20 rounded-full border border-white flex items-center justify-center bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all hover:scale-110">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-12 w-full transform group-hover:-translate-y-4 transition-transform duration-500">
              <span className="text-accent-red font-bold text-xs uppercase tracking-widest mb-3 block">Predictive Analytics</span>
              <h3 className="text-white text-4xl font-bold leading-tight">Fault Prediction & <br />Preventive Maintenance</h3>
            </div>
          </div>
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 mb-12 border-t border-gray-200 pt-12">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-8 bg-accent-blue rounded-full"></div>
                <div className="font-black text-gray-900 text-lg uppercase tracking-wide">Automotive</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-8 bg-accent-peach rounded-full"></div>
                <div className="font-black text-gray-900 text-lg uppercase tracking-wide">FMCG</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-8 bg-primary rounded-full"></div>
                <div className="font-black text-gray-900 text-lg uppercase tracking-wide">Finance</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-8 bg-secondary rounded-full"></div>
                <div className="font-black text-gray-900 text-lg uppercase tracking-wide">Banking</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-8 bg-accent-teal rounded-full"></div>
                <div className="font-black text-gray-900 text-lg uppercase tracking-wide">Energy Metering</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-8 bg-accent-red rounded-full"></div>
                <div className="font-black text-gray-900 text-lg uppercase tracking-wide">Sports Leagues</div>
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

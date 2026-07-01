import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';

type InsightCategory = 'all' | 'big-data' | 'data-analytics' | 'healthcare' | 'banking' | 'generative-ai';

interface InsightArticle {
  title: string;
  category: Exclude<InsightCategory, 'all'>;
  categoryLabel: string;
  source: string;
  date: string;
  description: string;
  image: string;
  link: string;
  isExternal: boolean;
}

export const Insights: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<InsightCategory>('all');

  const categories: { value: InsightCategory; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'big-data', label: 'Big Data' },
    { value: 'data-analytics', label: 'Data Analytics' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'banking', label: 'Banking' },
    { value: 'generative-ai', label: 'Generative AI' },
  ];

  const articles: InsightArticle[] = [
    {
      title: 'To Mitigate Healthcare Crisis',
      category: 'big-data',
      categoryLabel: 'Big Data',
      source: 'Economic Times',
      date: 'Sep 2020',
      description: 'How big data platforms and analytics are being leveraged to predict, prevent, and mitigate healthcare crises globally.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
      link: 'https://government.economictimes.indiatimes.com/news/healthcare/opinion-big-data-to-mitigate-healthcare-crisis/77889658',
      isExternal: true,
    },
    {
      title: 'Quick & Accessible: Top Big Data Trends',
      category: 'data-analytics',
      categoryLabel: 'Data Analytics',
      source: 'Dataquest India',
      date: 'Jan 2021',
      description: 'An analysis of the leading patterns in big data architectures and how they fuel real-time decision-making in large organizations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      link: 'https://www.dqindia.com/looking-top-trends-big-data-analytics-2021-vision/',
      isExternal: true,
    },
    {
      title: 'Predictive Analytics in Patient Care',
      category: 'healthcare',
      categoryLabel: 'Healthcare',
      source: 'Passageway Case Study',
      date: 'May 2026',
      description: 'How connected health diagnostics and predictive machine learning models optimize patient care targets and hospital resource controls.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
      link: '/#contact',
      isExternal: false,
    },
    {
      title: 'Fraud Detection in Branch Banking',
      category: 'banking',
      categoryLabel: 'Banking',
      source: 'Passageway Case Study',
      date: 'Mar 2026',
      description: 'Implementing high-performance anomaly detection to monitor transactions, secure operations, and conduct branch-wide risk profiling.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
      link: '/#contact',
      isExternal: false,
    },
    {
      title: 'Enterprise Generative AI Maturity',
      category: 'generative-ai',
      categoryLabel: 'Generative AI',
      source: 'Passageway Whitepaper',
      date: 'Apr 2026',
      description: 'A strategic guide outlining security guidelines, deployment parameters, and architectural patterns for LLMs in highly regulated industries.',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&q=80',
      link: '/#contact',
      isExternal: false,
    },
    {
      title: 'Connected Telemedicine Solutions',
      category: 'healthcare',
      categoryLabel: 'Healthcare',
      source: 'Passageway Case Study',
      date: 'Jun 2026',
      description: 'Leveraging real-time patient datasets to optimize treatment compliance, analyze claims, and predict healthcare resource needs.',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80',
      link: '/#contact',
      isExternal: false,
    },
  ];

  const filteredArticles = activeCategory === 'all'
    ? articles
    : articles.filter((art) => art.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Insights Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-gray-900 text-white min-h-[55vh] flex flex-col justify-center">
        {/* Abstract Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
            alt="Data networks"
            className="w-full h-full object-cover opacity-35 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/90"></div>
        </div>
        {/* Light Beam Glow Effect */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue rounded-full filter blur-[140px] opacity-25 pointer-events-none"></div>
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="text-accent-peach font-bold text-sm uppercase tracking-widest mb-6 block border-l-4 border-accent-peach pl-4">
              Passageway Insights
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Browse Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-blue to-accent-peach">
                Latest Updates
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl">
              Stay updated with the latest insights, innovations, and expertise brewing as we redefine Healthcare and Banking solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Filter & Insights Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Bar */}
          <div className="flex overflow-x-auto space-x-3 pb-8 mb-12 border-b border-gray-100 no-scrollbar snap-x">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-6 py-3 rounded-full text-base font-bold transition-all snap-start shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-white shadow-md shadow-primary/10'
                      : 'text-gray-500 hover:text-gray-900 bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
            {filteredArticles.map((art, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-60 bg-gray-100 overflow-hidden relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-primary text-xs font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                    {art.categoryLabel}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2 block">
                    {art.source} • {art.date}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-gray-600 text-base mb-8 font-medium leading-relaxed flex-grow">
                    {art.description}
                  </p>
                  
                  {art.isExternal ? (
                    <a
                      href={art.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-extrabold text-gray-900 group-hover:text-primary transition-colors uppercase tracking-widest mt-auto border-b-2 border-transparent group-hover:border-primary pb-0.5 w-fit"
                    >
                      Read Article{' '}
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      to={art.link}
                      onClick={() => {
                        if (art.link.startsWith('/#')) {
                          setTimeout(() => {
                            document.getElementById(art.link.substring(2))?.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        }
                      }}
                      className="inline-flex items-center text-sm font-extrabold text-gray-900 group-hover:text-primary transition-colors uppercase tracking-widest mt-auto border-b-2 border-transparent group-hover:border-primary pb-0.5 w-fit"
                    >
                      Explore Case Study{' '}
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

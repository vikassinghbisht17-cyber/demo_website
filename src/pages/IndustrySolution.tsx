import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: 'Automotive Giant Builds AI-Ready Operations Across the Supply Chain',
    description: 'Passageway helped a leading automotive manufacturer build an AI-ready workforce by embedding predictive analytics into daily operations, strengthening leadership alignment, and supporting enterprise AI adoption at scale.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop',
    bgColor: 'bg-gray-50', // Wipro style light gray block
    reverse: false,
  },
  {
    id: 2,
    title: 'Global Bank Accelerates Digital Transformation and Drives Growth',
    description: 'We partnered with a top-tier financial institution to modernize their core banking systems. By leveraging machine learning models for risk and fraud analytics, they achieved a 40% reduction in false positives and streamlined regulatory reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    bgColor: 'bg-[#f4f5f8]',
    reverse: true,
  },
  {
    id: 3,
    title: 'Smart Grid Optimization Reduces Energy Waste by 25%',
    description: 'A major energy provider utilized our predictive maintenance algorithms to monitor their grid in real-time. This proactive approach minimized downtime and drastically improved demand forecasting accuracy across the network.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    bgColor: 'bg-gray-50',
    reverse: false,
  }
];

export const IndustrySolution: React.FC = () => {
  // Always scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Top Breadcrumb / Info Bar (Wipro inspired) */}
      <div className="bg-[#0b295c] text-white py-3 px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-2">
          <Link to="/" className="hover:text-blue-200 transition-colors">&lt; Home</Link>
          <span className="text-gray-400">|</span>
          <span className="font-semibold tracking-wide">Case Studies</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hover:text-blue-200 transition-colors" aria-label="Favorite">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className="hover:text-blue-200 transition-colors" aria-label="Share">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Case Studies Zig-Zag Layout */}
      <div className="w-full">
        {caseStudies.map((study) => (
          <div key={study.id} className="flex flex-col md:flex-row w-full group">
            {/* Text Block */}
            <div className={`w-full md:w-1/2 p-10 md:p-16 lg:p-24 flex flex-col justify-center ${study.bgColor} ${study.reverse ? 'md:order-2' : 'md:order-1'}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#2e1d52] mb-6 leading-tight max-w-2xl">
                {study.title}
              </h2>
              <p className="text-lg text-[#555] leading-relaxed font-light max-w-xl">
                {study.description}
              </p>
            </div>
            
            {/* Image Block */}
            <div className={`w-full md:w-1/2 min-h-[400px] md:min-h-full overflow-hidden ${study.reverse ? 'md:order-1' : 'md:order-2'}`}>
              <img 
                src={study.image} 
                alt={study.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-[#0b295c] text-white py-24 px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-light mb-6">Ready to transform your business?</h3>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-blue-100 font-light">Let's discuss how our predictive analytics and AI solutions can drive growth in your industry.</p>
        <Link to="/#contact" className="inline-block bg-white text-[#0b295c] font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors">
          Contact Our Experts
        </Link>
      </div>
    </div>
  );
};

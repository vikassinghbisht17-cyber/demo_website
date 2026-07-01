import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: 'Manufacturing Operational Analytics Platform',
    industry: 'Manufacturing',
    challenge: 'A large manufacturing organization had critical operations data fragmented across ERP, machine-level controllers, quality management tools, and workforce sheets. Plant managers lacked real-time visibility, leading to reactive decision-making, undetected rejection trends, and sub-optimal machine OEE.',
    solution: 'We designed and built an integrated operational analytics platform unifying production, rejection rates, machine OEE, downtime reasons, and workforce metrics. Custom plant-level and console dashboards were built for real-time monitoring.',
    outcome: 'Plant managers obtained a single source of truth for proactive quality tracking and asset utilization. Enabled rapid troubleshooting of line bottlenecks. The solution handles millions of records daily with sub-second query speeds.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    bgColor: 'bg-gray-50',
    reverse: false,
  },
  {
    id: 2,
    title: 'AI-Powered Financial Document Extraction Platform',
    industry: 'Banking & Financial Services',
    challenge: 'A leading financial institution processed thousands of complex loan applications, bank statements, and credit reports daily. Manual classification and information extraction caused high underwriting turnaround times and operational errors.',
    solution: 'We engineered an intelligent document processing pipeline combining custom OCR layout models, NLP classifiers, and RAG architectures to automatically classify document types and extract 50+ key financial fields.',
    outcome: 'Transformed a multi-day manual review process into a secure, automated data ingestion flow. Achieved an 80%+ reduction in document processing turnaround times with auditable field confidence scoring.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    bgColor: 'bg-[#f4f5f8]',
    reverse: true,
  },
  {
    id: 4,
    title: 'Distributed Tender Data Engineering & AI Platform',
    industry: 'Government & Public Procurement',
    challenge: 'Government procurement portals publish tenders across hundreds of fragmented websites. Subscribing organizations needed a unified, real-time feed of opportunities but struggled with manual scraping, varying data formats, and frequent portal blockages.',
    solution: 'We engineered a distributed, self-healing scraping fleet that safely extracts data from 5,000+ portals daily. Data is ingested into a Bronze-Silver-Gold data lake using content-addressed deduplication, and made accessible via a custom Qwen-powered RAG chatbot.',
    outcome: 'Scaled ingestion from 30K to 750K tenders per day automatically. Allowed end-users to find highly relevant tenders instantly using natural language queries, completely transforming the tender discovery process.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    bgColor: 'bg-[#f4f5f8]',
    reverse: false,
  },
  {
    id: 5,
    title: 'Unified Enterprise Data & Analytics Platform',
    industry: 'Digital Platforms & Enterprise Software',
    challenge: 'A leading enterprise software provider needed to natively unify external enterprise data (like Workday, Salesforce, Splunk) with their platform core to provide deep domain analytics (HR, SecOps, CRM) without relying on external data silos.',
    solution: 'We co-engineered a native data engineering layer featuring pre-defined ETL pipelines, metadata collectors, and a robust Data Fabric. This unified data model fed directly into drag-and-drop dashboards and a conversational AI analytics engine.',
    outcome: 'Delivered packaged domain analytics apps that allowed business users to ask plain-language questions and trigger automated workflows directly within the platform, eliminating the need for third-party BI tools.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop',
    bgColor: 'bg-[#f4f5f8]',
    reverse: true,
  },
  {
    id: 6,
    title: 'Intelligent Decision Anomaly Detection System',
    industry: 'Banking & Financial Services',
    challenge: 'A financial institution struggled to identify suspicious transaction patterns and operational risks in real-time. Traditional rule-based systems generated high false-positive rates and lacked contextual explanations, requiring extensive manual review.',
    solution: 'We deployed our proprietary Decision Anomaly Detection framework, which combined real-time transaction monitoring with context-aware anomaly scoring and ML clustering techniques augmented by LLMs.',
    outcome: 'The system proactively flagged hidden fraud signals and provided natural-language alert narratives explaining exactly why an anomaly was flagged. Reduced false positives by over 40% and drastically accelerated underwriting review times.',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1200&auto=format&fit=crop',
    bgColor: 'bg-gray-50',
    reverse: false,
  }
];

export const IndustrySolution: React.FC = () => {
  useEffect(() => {
    // Handle hash scrolling if present in the URL
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Top Breadcrumb / Info Bar */}
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
          <div key={study.id} id={`case-study-${study.id}`} className="flex flex-col lg:flex-row w-full group">
            {/* Text Block */}
            <div className={`w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center ${study.bgColor} ${study.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">{study.industry}</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b295c] mb-8 leading-tight max-w-2xl">
                {study.title}
              </h2>
              <div className="space-y-6 max-w-xl">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">The Challenge</h4>
                  <p className="text-base text-gray-600 leading-relaxed font-medium">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-accent-blue mb-1">Our Solution</h4>
                  <p className="text-base text-gray-600 leading-relaxed font-medium">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-accent-peach mb-1">Outcome & Impact</h4>
                  <p className="text-base text-gray-800 leading-relaxed font-semibold">{study.outcome}</p>
                </div>
              </div>
            </div>

            {/* Image Block */}
            <div className={`w-full lg:w-1/2 min-h-[350px] lg:min-h-full overflow-hidden relative ${study.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover absolute inset-0 transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-[#0b295c] text-white py-24 px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to transform your business?</h3>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-blue-100 font-light">Let's discuss how our AI solutions can drive growth in your industry.</p>
        <Link to="/#contact" className="inline-block bg-white text-[#0b295c] font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors">
          Contact Our Experts
        </Link>
      </div>
    </div>
  );
};

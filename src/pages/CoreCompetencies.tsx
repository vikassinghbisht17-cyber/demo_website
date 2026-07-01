import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const competencies = [
  {
    id: 'engineering',
    title: 'Data Engineering & Platforms',
    subtitle: 'Building the Foundation',
    description: 'We design and implement resilient data lakes, cloud architectures, and scalable ingestion pipelines. Using our Canonical Data Models and Incremental Architecture (CDC), we unify fragmented silos into a single, trusted enterprise foundation.',
    features: [
      'Bronze-Silver-Gold Tiered Data Lakes',
      'Content-Addressed Deduplication & Lineage',
      'Self-Healing DLQs & Reconciliation',
      'Distributed High-Scale Ingestion Pipelines'
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    color: 'bg-primary',
    textColor: 'text-primary'
  },
  {
    id: 'analytics',
    title: 'Advanced Analytics & BI',
    subtitle: 'From Data to Action',
    description: 'We synthesize complex data into operational intelligence through custom KPIs, drag-and-drop dashboards, and conversational AI for BI. Our insights trigger automated workflows, closing the loop from question to action natively.',
    features: [
      'No-Code Dashboards & Self-Service BI',
      'Domain Analytics Apps (HR, SecOps, CRM)',
      'Cross-Plant Performance Scorecards',
      'Insight-to-Action Workflow Automation'
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'bg-accent-blue',
    textColor: 'text-accent-blue'
  },
  {
    id: 'ml',
    title: 'Predictive Intelligence (ML)',
    subtitle: 'Anticipating the Future',
    description: 'We deploy enterprise-grade machine learning models to anticipate customer actions, prioritize operations, and flag risks. From Customer Propensity to 4M Traceability, we turn reactive metrics into proactive intelligence.',
    features: [
      'Customer Purchase & Churn Propensity Scoring',
      'Predictive Maintenance & 4M Defect Tracing',
      'Credit Default & Delinquency Prediction',
      'Ensemble ML Models (XGBoost, Random Forest)'
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: 'bg-accent-peach',
    textColor: 'text-accent-peach'
  },
  {
    id: 'genai',
    title: 'Generative AI Frameworks',
    subtitle: 'Accelerating AI Adoption',
    description: 'We deploy five reusable enterprise AI frameworks—so our clients can adopt AI faster, safer, and with proven architecture. From Intelligent Knowledge Systems to Agentic Document bots, we securely unlock unstructured data.',
    features: [
      'Intelligent Knowledge Systems & RAG Engines',
      'Decision Anomaly Narratives & Fraud Alerts',
      'Smart Portfolio Risk Segmentations',
      'Agentic Document Processing & Automation'
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'bg-accent-red',
    textColor: 'text-accent-red'
  }
];

export const CoreCompetencies: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="bg-secondary text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle background graphics */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[100px] -mt-32 -mr-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-peach/5 rounded-full blur-[100px] -mb-32 -ml-32 pointer-events-none"></div>
        
        <div className="max-w-[1600px] mx-auto relative z-10 text-center">
          <span className="text-accent-blue font-bold text-sm uppercase tracking-widest mb-6 block">Capabilities</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Engineering Intelligence <br /> from Data
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            From distributed data pipelines and resilient data lakes to enterprise analytics and generative AI.
          </p>
        </div>
      </section>

      {/* Competencies Detailed Grid */}
      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {competencies.map((comp, index) => (
              <div key={comp.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
                
                {/* Visual/Icon Side */}
                <div className="w-full lg:w-5/12 flex justify-center">
                  <div className="relative w-full max-w-md aspect-square rounded-[3rem] bg-white shadow-2xl border border-gray-100 flex flex-col items-center justify-center p-12 group hover:-translate-y-4 transition-transform duration-500">
                    <div className={`absolute inset-0 ${comp.color} opacity-[0.03] rounded-[3rem] group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <div className={`w-28 h-28 rounded-3xl ${comp.color}/10 flex items-center justify-center mb-8`}>
                      <div className={comp.textColor}>
                        {comp.icon}
                      </div>
                    </div>
                    <h3 className="text-3xl font-extrabold text-primary text-center leading-tight mb-4">{comp.title}</h3>
                    <span className={`text-sm font-bold uppercase tracking-widest ${comp.textColor}`}>{comp.subtitle}</span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-7/12">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
                    {comp.title}
                  </h2>
                  <p className="text-xl text-gray-600 font-medium leading-relaxed mb-10">
                    {comp.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    {comp.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-accent-blue/10 flex items-center justify-center mr-4">
                          <svg className="w-3.5 h-3.5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-lg text-gray-800 font-bold leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12">
                    <Link to="/solutions" className="inline-flex items-center text-sm font-extrabold text-primary hover:text-accent-blue uppercase tracking-widest transition-colors border-b-2 border-primary pb-1 hover:border-accent-blue">
                      View Related Case Studies <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Module 5B: Proprietary GenAI Frameworks */}
      <section className="py-32 bg-[#05162e] text-white overflow-hidden relative border-y border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none -mt-40 -mr-40"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-peach/10 rounded-full blur-[120px] pointer-events-none -mb-40 -ml-40"></div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent-peach font-bold text-xs uppercase tracking-widest mb-4 block">Proprietary AI Assets</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              5 Reusable Generative AI Frameworks
            </h2>
            <p className="text-lg md:text-xl text-blue-200 font-light leading-relaxed">
              We accelerate enterprise AI adoption using proven, deployable AI frameworks built for real-world integration, compliance, and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Framework 1 */}
            <div className="group bg-[#0d233a]/50 backdrop-blur-md border border-white/5 border-t-4 border-t-accent-blue p-8 rounded-2xl shadow-lg hover:scale-105 hover:bg-[#0d233a]/80 hover:shadow-accent-blue/15 transition-all duration-500 transform flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-6 border border-accent-blue/20 group-hover:bg-accent-blue/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-accent-blue text-xs font-bold uppercase tracking-wider mb-2 block">Framework 01</span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-blue transition-colors duration-300">Intelligent Knowledge System</h3>
                <p className="text-sm text-blue-200 leading-relaxed font-light mb-6">
                  RAG-powered engine that transforms manuals, policies, and files into a living Q&A asset with cited, traceable responses.
                </p>
              </div>
              <div className="text-xs text-accent-blue font-semibold border-t border-white/5 pt-4">
                Use Case: Audit SOP Assistant
              </div>
            </div>

            {/* Framework 2 */}
            <div className="group bg-[#0d233a]/50 backdrop-blur-md border border-white/5 border-t-4 border-t-accent-peach p-8 rounded-2xl shadow-lg hover:scale-105 hover:bg-[#0d233a]/80 hover:shadow-accent-peach/15 transition-all duration-500 transform flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-accent-peach/10 rounded-xl flex items-center justify-center mb-6 border border-accent-peach/20 group-hover:bg-accent-peach/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-accent-peach" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <span className="text-accent-peach text-xs font-bold uppercase tracking-wider mb-2 block">Framework 02</span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-peach transition-colors duration-300">Decision Anomaly Detection</h3>
                <p className="text-sm text-blue-200 leading-relaxed font-light mb-6">
                  ML + LLM monitoring that spots unusual transactions and generates detailed natural-language narrative reports of findings.
                </p>
              </div>
              <div className="text-xs text-accent-peach font-semibold border-t border-white/5 pt-4">
                Use Case: Fraud & Vigilance
              </div>
            </div>

            {/* Framework 3 */}
            <div className="group bg-[#0d233a]/50 backdrop-blur-md border border-white/5 border-t-4 border-t-accent-red p-8 rounded-2xl shadow-lg hover:scale-105 hover:bg-[#0d233a]/80 hover:shadow-accent-red/15 transition-all duration-500 transform flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-accent-red/10 rounded-xl flex items-center justify-center mb-6 border border-accent-red/20 group-hover:bg-accent-red/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-accent-red text-xs font-bold uppercase tracking-wider mb-2 block">Framework 03</span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-red transition-colors duration-300">Smart Portfolio Analysis</h3>
                <p className="text-sm text-blue-200 leading-relaxed font-light mb-6">
                  Risk cluster segmentation and NPA early warnings with automated portfolio health narratives for executive dashboards.
                </p>
              </div>
              <div className="text-xs text-accent-red font-semibold border-t border-white/5 pt-4">
                Use Case: Default Prediction
              </div>
            </div>

            {/* Framework 4 */}
            <div className="group bg-[#0d233a]/50 backdrop-blur-md border border-white/5 border-t-4 border-t-accent-teal p-8 rounded-2xl shadow-lg hover:scale-105 hover:bg-[#0d233a]/80 hover:shadow-accent-teal/15 transition-all duration-500 transform flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-accent-teal/10 rounded-xl flex items-center justify-center mb-6 border border-accent-teal/20 group-hover:bg-accent-teal/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <span className="text-accent-teal text-xs font-bold uppercase tracking-wider mb-2 block">Framework 04</span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-teal transition-colors duration-300">Intelligent Computer Vision</h3>
                <p className="text-sm text-blue-200 leading-relaxed font-light mb-6">
                  Deep learning computer vision models that automate production line defect inspection and scan/verify KYC documentation.
                </p>
              </div>
              <div className="text-xs text-accent-teal font-semibold border-t border-white/5 pt-4">
                Use Case: Quality Inspection & KYC
              </div>
            </div>

            {/* Framework 5 */}
            <div className="group bg-[#0d233a]/50 backdrop-blur-md border border-white/5 border-t-4 border-t-primary p-8 rounded-2xl shadow-lg hover:scale-105 hover:bg-[#0d233a]/80 hover:shadow-primary/20 transition-all duration-500 transform flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">Framework 05</span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">Agentic AI Framework</h3>
                <p className="text-sm text-blue-200 leading-relaxed font-light mb-6">
                  Autonomous agents orchestrating multi-step document audits, loan processing pipelines, and automated reporting bots.
                </p>
              </div>
              <div className="text-xs text-primary font-semibold border-t border-white/5 pt-4">
                Use Case: Workflow Bots (Resolution OS)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary text-white py-24 text-center px-4">
        <h2 className="text-4xl font-extrabold mb-8">Ready to unify your data architecture?</h2>
        <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto font-light">
          Let's discuss how our specialized engineering and AI frameworks can accelerate your digital transformation.
        </p>
        <Link to="/#contact" className="inline-block bg-white text-primary font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-xl">
          Get In Touch
        </Link>
      </section>
    </div>
  );
};

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: 'Manufacturing Operational Analytics Platform',
    industry: 'Manufacturing',
    challenge: 'A large manufacturing organization had critical operations data fragmented across ERP, SCM (Supply Chain Management), machine-level controllers, and workforce sheets. Plant managers lacked real-time visibility, leading to reactive decision-making, undetected rejection trends, and sub-optimal machine OEE.',
    solution: 'We designed an integrated operational analytics platform built on a scalable EDB (Enterprise Data Bus). Leveraging our proprietary 4M Traceability framework (Man, Machine, Material, Method), we unified production, rejection rates, machine OEE, and workforce metrics into real-time dashboards.',
    outcome: 'Plant managers obtained a single source of truth for proactive quality tracking and asset utilization. Enabled rapid troubleshooting of line bottlenecks. The solution handles millions of records daily with sub-second query speeds.',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1200&auto=format&fit=crop',
    imagePosition: 'object-center',
    bgColor: 'bg-gray-50',
    reverse: false,
  },
  {
    id: 2,
    title: 'Customer Propensity Intelligence',
    industry: 'Sports & Entertainment',
    challenge: 'A professional sports league client needed to transition from reacting to customer behavior to predicting it. They lacked the ability to systematically identify which fans were likely to buy, at risk of churning, or ready for an upgrade.',
    solution: 'We deployed an ensemble ML scoring platform (XGBoost, Random Forest, Logistic Regression) that processes transaction history, product usage, and demographic data to assign each customer a propensity score (0–100) for specific commercial actions.',
    outcome: 'Empowered sales and CX teams to act before the customer decides. By accurately predicting purchase, churn, and upsell readiness, the platform delivered a 2–4x higher conversion lift versus traditional non-scored outreach.',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop',
    bgColor: 'bg-[#f4f5f8]',
    reverse: true,
  },
  {
    id: 3,
    title: 'Enterprise ITSM Data & Analytics Platform',
    industry: 'IT Service Management (ITSM)',
    challenge: 'A leading ITSM enterprise platform needed to unify external enterprise data (like Workday, Salesforce, and Splunk) with their native CMDB and workflow data. They lacked a native data engineering layer to provide domain-specific analytics without moving data into external silos.',
    solution: 'We co-engineered a robust Data Fabric and data engineering layer with predefined ETL pipelines. This unified data model feeds into purpose-built domain analytics apps, powering drag-and-drop dashboards, ML models, and conversational AI directly on the platform.',
    outcome: 'Business users can now ask plain-language questions and instantly trigger automated workflows from insights. Each new domain app automatically inherits a unified data model, BI capabilities, and conversational querying for free.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop',
    bgColor: 'bg-gray-50',
    reverse: false,
  },
  {
    id: 4,
    title: 'Automotive After-Sales Analytics Platform',
    industry: 'Automotive',
    challenge: 'A leading automotive OEM had limited visibility into dealer network performance, warranty claim trends, and parts demand. Reporting was fragmented across multiple systems and relied on manual Excel consolidation, making it difficult to identify underperforming dealers or forecast parts demand.',
    solution: 'We designed a dealer analytics platform integrating data from multiple DMS, warranty, and parts systems. Deliverables included dealer performance scorecards, warranty claims analytics, a parts demand forecasting model, and an after-sales revenue KPI dashboard.',
    outcome: 'Measurable improvements across the dealer network: proactive identification of warranty claim spikes, improved parts availability, and a 70% reduction in manual reporting effort. The platform is now the primary operational intelligence tool for OEM leadership.',
    image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1200&auto=format&fit=crop',
    bgColor: 'bg-[#f4f5f8]',
    reverse: true,
  },
  {
    id: 5,
    title: 'Intelligent Decision Anomaly Detection System',
    industry: 'Banking & Financial Services',
    challenge: 'A financial institution struggled to identify suspicious transaction patterns and operational risks in real-time. Traditional rule-based systems generated high false-positive rates and lacked contextual explanations, requiring extensive manual review.',
    solution: 'We deployed our proprietary Decision Anomaly Detection framework, which combined real-time transaction monitoring with context-aware anomaly scoring and ML clustering techniques augmented by LLMs.',
    outcome: 'The system proactively flagged hidden fraud signals and provided natural-language alert narratives explaining exactly why an anomaly was flagged. Reduced false positives by over 40% and drastically accelerated underwriting review times.',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1200&auto=format&fit=crop',
    bgColor: 'bg-gray-50',
    reverse: false,
  },
  {
    id: 6,
    title: 'BFSI Lending & Incentive Suite',
    industry: 'Banking, Financial Services & Insurance (BFSI)',
    challenge: 'BFSI institutions often struggle with fragmented systems across loan origination, servicing, and sales intelligence, making it difficult to optimize the full lending lifecycle and accurately forecast agent incentives.',
    solution: 'We deployed a modular digital-lending and sales-intelligence stack running on a shared data core. It features LOS and LMS apps alongside AI services for automated document extraction (KYC, financial, collateral) and agent-incentive forecasting.',
    outcome: 'Delivered faster loan turnaround with fewer manual touches, straight-through document processing at scale, and forecast-driven, accurate agent incentive payouts to optimize sales performance.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
    bgColor: 'bg-[#f4f5f8]',
    reverse: true,
  },
  {
    id: 7,
    title: 'Healthcare Market Intelligence',
    industry: 'Healthcare & Life Sciences',
    challenge: 'Pharma and medtech teams lack visibility into product penetration across specific market segments, struggling to benchmark against competitors and identify untapped growth opportunities.',
    solution: 'We developed a tailored analytics and AI engine that fuses sales, prescription, claims, and market data. The platform provides comprehensive segment penetration tracking, competitor benchmarking, and product capability assessment.',
    outcome: 'Empowered teams to turn market data into targeted growth decisions with segment-level white-space maps, head-to-head competitor share tracking, and evidence-based product capability scoring.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
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
      <Helmet>
        <title>Industry Solutions | Passageway Tech</title>
        <meta name="description" content="Discover how Passageway Tech delivers specialized data engineering and GenAI solutions across Healthcare, Manufacturing, Financial Services, and Retail." />
      </Helmet>

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
                className={`w-full h-full object-cover ${(study as any).imagePosition || 'object-center'} absolute inset-0 transform group-hover:scale-105 transition-transform duration-700 ease-in-out`}
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

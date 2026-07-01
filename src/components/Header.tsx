import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Smooth scroll helper for contact CTA
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-base font-bold transition-colors flex items-center h-full ${
      isActive ? 'text-primary' : 'text-gray-800 hover:text-primary'
    }`;

  return (
    <>
      <header className="sticky top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28 items-center">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img src="/logo-horizontal.svg" alt="Passageway" className="h-14" />
          </Link>

          {/* Center: Desktop Nav */}
          <nav className="hidden lg:flex space-x-10 h-full">
            {/* 1. Capabilities Link */}
            <NavLink to="/capabilities" className={navLinkClass}>
              Capabilities
            </NavLink>

            {/* 2. Industry Solutions Mega-Menu */}
            <div className="group h-full flex items-center cursor-pointer relative">
              <span className="text-base font-bold text-gray-800 group-hover:text-primary transition-colors flex items-center h-full">
                Industry Solutions
                <svg className="w-4 h-4 ml-1 text-gray-400 group-hover:text-primary transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute top-20 -left-64 w-screen max-w-5xl bg-white border border-gray-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-b-xl z-50 p-10 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Column 1 */}
                <div>

                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Manufacturing</h3>
                  <ul className="space-y-3 text-base font-semibold text-gray-700">
                    <li><Link to="/solutions" className="hover:text-primary transition-colors">Manufacturing Analytics</Link></li>
                    <li><Link to="/solutions" className="hover:text-primary transition-colors">4M Traceability Framework</Link></li>
                    <li><Link to="/solutions" className="hover:text-primary transition-colors">Operational KPIs</Link></li>
                  </ul>
                </div>
                {/* Column 2 */}
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Banking & Financial Services</h3>
                  <ul className="space-y-3 text-base font-semibold mb-8 text-gray-700">
                    <li><Link to="/solutions" className="hover:text-primary transition-colors">BFSI Platform Engineering</Link></li>
                    <li><Link to="/solutions" className="hover:text-primary transition-colors">Fraud Vigilance Monitors</Link></li>
                    <li><Link to="/solutions" className="hover:text-primary transition-colors">Resolution OS Orchestration</Link></li>
                    <li><Link to="/solutions" className="hover:text-primary transition-colors">Credit Default Prediction</Link></li>
                  </ul>
                </div>
                {/* Column 3 */}
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Energy & Utilities</h3>
                  <ul className="space-y-3 text-base font-semibold mb-8 text-gray-700">
                    <li><Link to="/solutions" className="hover:text-primary transition-colors">Asset Performance Monitoring</Link></li>
                    <li><Link to="/solutions" className="hover:text-primary transition-colors">Power Outage Intelligence</Link></li>
                    <li><Link to="/solutions" className="hover:text-primary transition-colors">Energy Consumption Forecasting</Link></li>
                  </ul>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Digital Platforms & Media</h3>
                  <ul className="space-y-3 text-base font-semibold text-gray-700">
                    <li><Link to="/solutions" className="hover:text-primary transition-colors">Product Recommendation Engines</Link></li>
                    <li><Link to="/solutions" className="hover:text-primary transition-colors">User Behavior Analytics</Link></li>
                    <li><Link to="/solutions" className="hover:text-primary transition-colors">Marketing Funnel Performance</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Insights */}
            <NavLink to="/insights" className={navLinkClass}>Insights</NavLink>

            {/* 4. Company */}
            <NavLink to="/company" className={navLinkClass}>Company</NavLink>

            {/* 5. Careers */}
            <NavLink to="/careers" className={navLinkClass}>Careers</NavLink>
          </nav>

          {/* Right: Get In Touch */}
          <div className="hidden lg:flex items-center">
            <a href="/#contact" onClick={handleContactClick} className="bg-primary hover:bg-secondary text-white font-bold text-base px-8 py-3.5 rounded-full transition-all">
              Get In Touch
            </a>
          </div>

          {/* Hamburger Button (Mobile Only) */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-primary focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-28 bottom-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Mobile Menu Content */}
          <div
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Links */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <nav className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Core Competency</h4>
                  <ul className="space-y-3 pl-2">

                    <li><Link to="/company" className="block text-base font-bold text-gray-800 hover:text-primary transition-colors">Banking & Finance Consulting</Link></li>
                    <li><Link to="/company" className="block text-base font-bold text-gray-800 hover:text-primary transition-colors">ML & Data Science</Link></li>
                    <li><Link to="/company" className="block text-base font-bold text-gray-800 hover:text-primary transition-colors">Data Engineering</Link></li>
                    <li><Link to="/company" className="block text-base font-bold text-gray-800 hover:text-primary transition-colors">Generative AI</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Industry Solutions</h4>
                  <ul className="space-y-3 pl-2">

                    <li><Link to="/solutions" className="block text-base font-bold text-gray-800 hover:text-primary transition-colors">BFSI Risk & Fraud</Link></li>
                    <li><Link to="/solutions" className="block text-base font-bold text-gray-800 hover:text-primary transition-colors">Energy Metering</Link></li>
                  </ul>
                </div>

                <div className="border-t border-gray-100 pt-6 space-y-4">
                  <Link to="/insights" className="block text-lg font-bold text-primary transition-colors">Insights</Link>
                  <Link to="/capabilities" className="block text-2xl font-bold text-gray-900 hover:text-primary transition-colors">Capabilities</Link>
                  <Link to="/company" className="block text-lg font-bold text-gray-800 hover:text-primary transition-colors">Company</Link>
                  <Link to="/careers" className="block text-lg font-bold text-gray-800 hover:text-primary transition-colors">Careers</Link>
                </div>
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm font-bold text-gray-600">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 2.536 3 6 0 3.464-1.343 6-3 6m0-12c-1.657 0-3 2.536-3 6 0 3.464 1.343 6 3 6" />
                </svg>
                <span>EN</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

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
                <svg className="w-4 h-4 ml-1 text-gray-400 group-hover:text-primary transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>


              <div
                role="menu"
                aria-label="Industry Solutions"
                className="fixed top-28 left-1/2 -translate-x-1/2 w-[calc(100vw-2rem)] max-w-[1240px] opacity-0 invisible scale-[0.97] -translate-y-2 blur-sm pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:translate-y-0 group-hover:blur-none group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:scale-100 group-focus-within:translate-y-0 group-focus-within:blur-none group-focus-within:pointer-events-auto transition-all duration-500 ease-out origin-top z-50"
              >
                <div className="relative rounded-3xl border border-gray-200/70 bg-white backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(15,23,42,0.25)] ring-1 ring-black/5 overflow-hidden">
                  {/* Header Area */}
                  <div className="relative px-10 py-7 bg-gradient-to-r from-primary/5 via-gray-50 to-white border-b border-gray-100">
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">Industry Solutions</h3>
                    <p className="mt-1.5 text-sm font-semibold text-gray-500 tracking-wide">
                      Enterprise AI &nbsp;•&nbsp; Data Engineering &nbsp;•&nbsp; Cloud &nbsp;•&nbsp; Analytics
                    </p>
                  </div>

                  {/* Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 px-10 py-9 gap-y-10">
                    {/* Column 1 */}
                    <div className="md:pr-8 space-y-8">
                      <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Manufacturing</h4>
                        <ul className="space-y-1">
                          <li>
                            <Link
                              to="/solutions#case-study-1"
                              role="menuitem"
                              className="group/item relative flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 -mx-3 text-[15px] font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300 hover:translate-x-1"
                            >
                              <span className="relative">
                                Manufacturing Operational Analytics Platform
                                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover/item:w-full" />
                              </span>
                              <svg className="w-4 h-4 flex-shrink-0 text-primary opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Government & Public Procurement</h4>
                        <ul className="space-y-1">
                          <li>
                            <Link
                              to="/solutions#case-study-4"
                              role="menuitem"
                              className="group/item relative flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 -mx-3 text-[15px] font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300 hover:translate-x-1"
                            >
                              <span className="relative">
                                Distributed Tender Data Engineering & AI Platform
                                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover/item:w-full" />
                              </span>
                              <svg className="w-4 h-4 flex-shrink-0 text-primary opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="md:px-8 pt-8 md:pt-0 space-y-8">
                      <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Banking & Financial Services</h4>
                        <ul className="space-y-1">
                          <li>
                            <Link
                              to="/solutions#case-study-2"
                              role="menuitem"
                              className="group/item relative flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 -mx-3 text-[15px] font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300 hover:translate-x-1"
                            >
                              <span className="relative">
                                AI-Powered Financial Document Extraction Platform
                                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover/item:w-full" />
                              </span>
                              <svg className="w-4 h-4 flex-shrink-0 text-primary opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/solutions#case-study-6"
                              role="menuitem"
                              className="group/item relative flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 -mx-3 text-[15px] font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300 hover:translate-x-1"
                            >
                              <span className="relative">
                                Intelligent Decision Anomaly Detection System
                                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover/item:w-full" />
                              </span>
                              <svg className="w-4 h-4 flex-shrink-0 text-primary opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 3 */}
                    <div className="md:pl-8 pt-8 md:pt-0 space-y-8">
                      <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Digital Platforms & Enterprise Software</h4>
                        <ul className="space-y-1">
                          <li>
                            <Link
                              to="/solutions#case-study-5"
                              role="menuitem"
                              className="group/item relative flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 -mx-3 text-[15px] font-semibold text-gray-700 hover:text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300 hover:translate-x-1"
                            >
                              <span className="relative">
                                Unified Enterprise Data & Analytics Platform
                                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover/item:w-full" />
                              </span>
                              <svg className="w-4 h-4 flex-shrink-0 text-primary opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="border-t border-gray-100 bg-gradient-to-r from-gray-50 via-white to-primary/5 px-10 py-5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Trusted across regulated, high-stakes industries</span>
                    <Link
                      to="/solutions"
                      role="menuitem"
                      className="group/cta inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-lg px-2 py-1 transition-colors duration-300"
                    >
                      Explore All Industry Solutions
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                  </div>
</div>
</div>
              

            {/* 3. Insights (Hidden for now) */}
            {/* <NavLink to="/insights" className={navLinkClass}>Insights</NavLink> */}

            {/* 4. Company */}
            <NavLink to="/company" className={navLinkClass}>Company</NavLink>

            {/* 5. Careers */}
            <NavLink to="/careers" className={navLinkClass}>Careers</NavLink>
          </nav>

          {/* Right: Get In Touch */}
          <div className="hidden lg:flex items-center">
            <a href="/#contact" onClick={handleContactClick} className="btn-modern">
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
                    <li><Link to="/solutions#case-study-1" className="block text-base font-bold text-gray-800 hover:text-primary transition-colors">Manufacturing Operational Analytics</Link></li>
                    <li><Link to="/solutions#case-study-2" className="block text-base font-bold text-gray-800 hover:text-primary transition-colors">Customer Propensity Intelligence</Link></li>
                    <li><Link to="/solutions#case-study-3" className="block text-base font-bold text-gray-800 hover:text-primary transition-colors">Enterprise ITSM Data & Analytics</Link></li>
                    <li><Link to="/solutions#case-study-4" className="block text-base font-bold text-gray-800 hover:text-primary transition-colors">Automotive After-Sales Analytics</Link></li>
                    <li><Link to="/solutions#case-study-5" className="block text-base font-bold text-gray-800 hover:text-primary transition-colors">Decision Anomaly Detection</Link></li>
                    <li><Link to="/solutions#case-study-6" className="block text-base font-bold text-gray-800 hover:text-primary transition-colors">BFSI Lending & Incentive Suite</Link></li>
                    <li><Link to="/solutions#case-study-7" className="block text-base font-bold text-gray-800 hover:text-primary transition-colors">Healthcare Market Intelligence</Link></li>
                  </ul>
                </div>

                <div className="border-t border-gray-100 pt-6 space-y-4">
                  {/* <Link to="/insights" className="block text-lg font-bold text-primary transition-colors">Insights</Link> */}
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

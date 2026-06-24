import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-24 pb-12 border-t border-gray-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-16 mb-20">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 pr-8">
            <div className="flex items-center mb-8">
              <img src="/logo-horizontal.svg" alt="Passageway" className="h-8 brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm font-medium">
              Empowering business with hidden gems of data. Specializing in advanced analytics and AI solutions for the Automotive and Banking industries.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/passageway-tech-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all border border-gray-800"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-extrabold mb-6 uppercase text-xs tracking-widest text-gray-500">Services</h4>
            <ul className="space-y-4 text-sm text-gray-300 font-semibold">
              <li><Link to="/#services" className="hover:text-white transition-colors">Business Consulting</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">ML & Data Science</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Data Engineering</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Generative AI</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold mb-6 uppercase text-xs tracking-widest text-gray-500">Industries</h4>
            <ul className="space-y-4 text-sm text-gray-300 font-semibold">
              <li><Link to="/company" className="hover:text-white transition-colors">Automotive</Link></li>
              <li><Link to="/company" className="hover:text-white transition-colors">FMCG</Link></li>
              <li><Link to="/company" className="hover:text-white transition-colors">Finance</Link></li>
              <li><Link to="/company" className="hover:text-white transition-colors">Banking</Link></li>
              <li><Link to="/company" className="hover:text-white transition-colors">Energy Metering</Link></li>
              <li><Link to="/company" className="hover:text-white transition-colors">Sports Leagues</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold mb-6 uppercase text-xs tracking-widest text-gray-500">Company</h4>
            <ul className="space-y-4 text-sm text-gray-300 font-semibold">
              <li><Link to="/company" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link to="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold mb-6 uppercase text-xs tracking-widest text-gray-500">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-300 font-semibold">
              <li><a href="mailto:contact@pssgway.com" className="hover:text-white transition-colors">contact@pssgway.com</a></li>
              <li><a href="tel:+917742543582" className="hover:text-white transition-colors">+91-7742543582</a></li>
              <li><span className="text-gray-400">Jaipur, Rajasthan, India</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-bold tracking-wide">
          <p>&copy; {new Date().getFullYear()} Passageway Tech Private Limited. All rights reserved.</p>
          <div className="mt-6 md:mt-0 flex space-x-6">
            <a href="mailto:contact@pssgway.com" className="hover:text-gray-300 cursor-pointer transition-colors">contact@pssgway.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

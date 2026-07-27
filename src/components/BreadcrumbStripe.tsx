import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const routeNames: Record<string, string> = {
  '/company': 'Company',
  '/capabilities': 'Capabilities',
  '/careers': 'Careers',
  '/insights': 'Insights',
  '/solutions': 'Industry Solutions',
};

export const BreadcrumbStripe: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  if (currentPath === '/') {
    return null;
  }

  const pageName = routeNames[currentPath] || 'Page';

  return (
    <div className="bg-[#0b295c] text-white py-3 px-4 sm:px-6 lg:px-8 relative z-40">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center text-sm font-semibold tracking-wide">
        <div className="flex items-center space-x-2">
          <Link to="/" className="hover:text-blue-200 transition-colors flex items-center">
            <span className="mr-1">&lt;</span> Home
          </Link>
          <span className="text-gray-400 font-light">|</span>
          <span className="font-bold text-white tracking-wide">{pageName}</span>
        </div>
        
      </div>
    </div>
  );
};

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
        <div className="flex items-center space-x-4">
          <button className="hover:text-blue-200 transition-colors" aria-label="Favorite">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className="hover:text-white transition-colors" aria-label="Share">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

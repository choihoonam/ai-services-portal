
import React from 'react';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onApplicationClick?: () => void;
  onHomeClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchQuery, setSearchQuery, onApplicationClick, onHomeClick }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div 
          className="flex items-center gap-2.5 group cursor-pointer"
          onClick={onHomeClick}
        >
          {/* Custom "A" Logo replicating the attached image */}
          <div className="w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#4a4a4a]" fill="currentColor">
              {/* The "A" shape with rounded ends */}
              <path 
                d="M50 15 L85 85 C86 87 85 90 82 90 L70 90 C67 90 65 88 64 86 L50 55 L36 86 C35 88 33 90 30 90 L18 90 C15 90 14 87 15 85 L50 15 Z" 
                className="fill-current"
              />
              {/* The centered dot/circle */}
              <circle cx="50" cy="62" r="10" className="fill-current" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
            AI Services
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
          <button 
            onClick={onHomeClick}
            className="text-blue-600 border-b-2 border-blue-600 pb-0.5 hover:text-blue-700 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={onApplicationClick}
            className="hover:text-gray-900 transition-colors"
          >
            신규 과제 신청
          </button>
        </div>
      </div>
      
      <div className="relative w-64 md:w-80">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
        />
        <svg 
          className="absolute left-3.5 top-2.5 h-4 w-4 text-gray-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;


import React from 'react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  onTogglePin: (id: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onTogglePin }) => {
  const getCategoryIcon = (id: string) => {
    // Default category themes
    const themes: Record<string, string> = {
      '채널': 'bg-[#1d63ed]',
      '대고객': 'bg-purple-600',
      '보험금': 'bg-emerald-600',
      '경영지원': 'bg-amber-500',
    };
    
    // 1. Special case for WIZ (AI 지식검색)
    if (id === 'wiz') return (
      <div className="w-16 h-16 bg-[#1d63ed] rounded-full flex flex-col items-center justify-center text-white shadow-sm">
        <div className="relative">
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
             <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.5 3c1.557 0 3.046.727 4 2.015Q12.454 3.727 14.5 3c2.786 0 5.25 2.322 5.25 5.25 0 3.924-2.438 7.11-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001z" />
          </svg>
          <div className="absolute -top-1 -right-1 text-[10px] font-black italic">WIZ</div>
        </div>
        <div className="font-black text-sm -mt-1 tracking-tight">WIZ</div>
      </div>
    );

    // 2. Special case for GFC AI써치 (ID: '1') - Orange
    if (id === '1') return (
      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-sm">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    );

    // 3. Special case for AI지급심사 (ID: '3') - Mascot character icon from image
    if (id === '3') return (
      <div className="w-16 h-16 bg-[#00c2cb] rounded-full flex items-center justify-center shadow-md relative overflow-hidden">
        {/* The character mascot body */}
        <div className="w-11 h-11 bg-white rounded-full flex flex-col items-center justify-center relative z-10 shadow-inner">
          {/* Eyes */}
          <div className="flex gap-2 mb-0.5">
            <div className="w-1 h-1 bg-blue-900 rounded-full opacity-60"></div>
            <div className="w-1 h-1 bg-blue-900 rounded-full opacity-60"></div>
          </div>
          {/* Mouth */}
          <div className="w-1.5 h-1 bg-blue-900 rounded-full opacity-40"></div>
          
          {/* Fins/Ears */}
          <div className="absolute -left-1 top-4 w-2.5 h-2.5 bg-blue-500 rounded-full rotate-[-30deg]"></div>
          <div className="absolute -right-1 top-4 w-2.5 h-2.5 bg-blue-500 rounded-full rotate-[30deg]"></div>
        </div>
        {/* Soft glow/light inside the cyan circle */}
        <div className="absolute inset-2 bg-white/20 rounded-full blur-sm"></div>
      </div>
    );

    // 4. Special case for AI CX글쓰기 (ID: '4') - Replicating the attached "CX" image
    if (id === '4') return (
      <div className="w-16 h-16 bg-gradient-to-br from-[#0033ff] to-[#33ccff] rounded-2xl flex items-center justify-center text-white shadow-md border border-white/20">
        <span className="text-[28px] font-black tracking-tighter leading-none select-none">CX</span>
      </div>
    );

    // 5. Special case for 보험상품 비교 (ID: '5') - Teal
    if (id === '5') return (
      <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white shadow-sm">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
    );

    // 6. Special case for 재무심사Agent (ID: '6') - Replicating the attached hexagonal stack image
    if (id === '6') return (
      <div className="w-16 h-16 bg-gradient-to-br from-[#00c6fb] to-[#005bea] rounded-2xl flex items-center justify-center text-white shadow-md border border-white/20">
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hexagon outline */}
          <path d="M12 2L20.6603 7V17L12 22L3.33975 17V7L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
          {/* Internal stack lines */}
          <path d="M7 9.5H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M7 12.5H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M7 15.5H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    );
    
    const bgColor = themes[service.category] || 'bg-gray-400';
    return (
      <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center text-white shadow-sm`}>
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    );
  };

  return (
    <div className="relative group bg-white pt-8 pb-5 px-6 rounded-[24px] shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-[0_20px_40px_-15px_rgba(29,99,237,0.15)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col items-center text-center h-full cursor-pointer">
      <button 
        onClick={(e) => { e.stopPropagation(); onTogglePin(service.id); }}
        className={`absolute top-4 right-4 p-1.5 transition-all z-10 ${
          service.isPinned 
          ? 'text-[#333d4b]' 
          : 'text-gray-200 hover:text-gray-400'
        }`}
      >
        <svg className="w-7 h-7 transform rotate-[20deg]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 12V4h1l1-1H6l1 1h1v8l-2 3v1h5v4l1 1 1-1v-4h5v-1l-2-3z" />
        </svg>
      </button>

      <div className="mb-7 transition-transform duration-300 group-hover:scale-110">
        {getCategoryIcon(service.id)}
      </div>

      <div className="mb-3">
        <h3 className="text-[20px] font-bold text-[#333d4b] group-hover:text-[#1d63ed] transition-colors">
          {service.title}
        </h3>
      </div>

      <p className="text-[14px] text-[#8b95a1] mb-6 leading-[1.6] max-w-[240px] break-keep group-hover:text-[#475467] transition-colors">
        {service.description}
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {service.tags.map((tag) => (
          <span 
            key={tag} 
            className="text-[13px] font-medium px-3.5 py-1.5 rounded-xl bg-[#f0f2ff] text-[#5c6eff] group-hover:bg-[#1d63ed] group-hover:text-white transition-all duration-300"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-auto w-full flex items-center justify-between pt-3 border-t border-gray-50 group-hover:border-blue-50 transition-colors">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white border border-[#ff4d8f40] flex items-center justify-center shadow-sm">
             <div className="w-5 h-5 rounded-full bg-[#ff4d8f20] flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-[#ff4d8f]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM12 14c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z" />
                </svg>
             </div>
          </div>
          <span className="text-[13px] font-medium text-[#8b95a1] group-hover:text-[#475467] transition-colors">{service.provider}</span>
        </div>

        <div className="flex items-center gap-1 text-[#adb5bd] group-hover:text-[#1d63ed] transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span className="text-[12px] font-bold tracking-tight">{service.userCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

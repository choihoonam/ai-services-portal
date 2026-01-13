
import React, { useState } from 'react';

const ApplicationSection: React.FC = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);

  const cards = [
    {
      title: '업무 목적 적합성',
      description: '도입하고자 하는 업무의 목적에 AI 기술이 적절하게 활용되는지 확인합니다.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: '보안 및 개인정보',
      description: '데이터 취급 과정에서 보안 이슈나 개인정보 노출 위험이 없는지 철저히 검토합니다.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: '시스템 영향도',
      description: '기존 운영 중인 시스템과의 연동 및 인프라 부하 등 기술적 영향을 분석합니다.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    }
  ];

  const contactInfo = [
    { label: 'CPC', dept: 'AI기획팀', name: '오OO프로', email: 'oh@company.com' },
    { label: 'FC/전략본부', dept: 'AI추진팀', name: '박OO프로', email: 'park@company.com' },
    { label: '독립', dept: 'AI기획팀', name: '도OO프로', email: 'do@company.com' },
  ];

  return (
    <section className="mt-20 pt-16 relative">
      <div className="text-center mb-16">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-blue-600 text-[13px] font-black tracking-widest uppercase">
            Process & Application
          </div>
          
          <h2 className="text-[48px] md:text-[56px] font-black text-[#1d2939] mb-4 tracking-tight leading-tight">
            AI 과제 <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">신청</span>
          </h2>

          <p className="mt-4 text-[18px] md:text-[20px] text-[#475467] leading-relaxed font-medium mb-10">
            AI 서비스는 담당자와 사전 협의 후 <span className="text-[#1d63ed] font-bold">도입 여부를 최종 결정</span>합니다.
          </p>

          {/* Long horizontal line below the text as requested */}
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-12 opacity-60"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white/80 backdrop-blur-sm p-10 rounded-[32px] border border-white/50 shadow-sm flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-[#f0f2ff] text-[#5c6eff] flex items-center justify-center mb-8 shadow-inner transition-transform group-hover:scale-110">
              {card.icon}
            </div>
            <h3 className="text-[20px] font-bold text-[#1d2939] mb-4 group-hover:text-[#1d63ed] transition-colors">{card.title}</h3>
            <p className="text-[15px] text-[#8b95a1] leading-relaxed break-keep">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Main Action Container */}
      <div className="rounded-[40px] p-12 md:p-16 text-center max-w-6xl mx-auto relative">
        {/* Background Layer with Overflow Control */}
        <div className="absolute inset-0 bg-[#f0f4ff] rounded-[40px] overflow-hidden -z-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative z-10">
          <p className="text-[18px] md:text-[22px] font-bold text-[#1d2939] leading-relaxed mb-1">
            위 항목들을 <span className="text-[#5c6eff] underline underline-offset-4 decoration-2">AI 거버넌스 체계</span>에 따라
          </p>
          <p className="text-[18px] md:text-[22px] font-bold text-[#1d2939] leading-relaxed mb-12">
            심도 있게 검토한 후 최적의 서비스를 제공해 드립니다.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 text-[15px] font-bold text-[#475467] opacity-60">
               <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
               AI 신규 과제 접수 및 문의
               <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
            </div>

            <div className="relative">
              <button 
                onClick={() => setShowContactPopup(!showContactPopup)}
                className={`group relative flex items-center gap-3 px-12 py-5 bg-white text-[18px] font-black rounded-full shadow-lg shadow-blue-900/10 transition-all hover:scale-105 active:scale-95 ${
                  showContactPopup ? 'ring-2 ring-blue-500 text-blue-600' : 'text-[#1d2939]'
                }`}
              >
                <svg className={`w-5 h-5 transition-colors ${showContactPopup ? 'text-blue-500' : 'text-blue-400 group-hover:text-blue-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>담당자 연락</span>
              </button>

              {showContactPopup && (
                <>
                  <div 
                    className="fixed inset-0 z-40 bg-black/5 backdrop-blur-[1px]" 
                    onClick={() => setShowContactPopup(false)}
                  ></div>
                  
                  <div className="absolute bottom-full mb-8 left-1/2 -translate-x-1/2 w-[340px] bg-white rounded-[32px] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] border border-blue-50 p-7 z-50 animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300">
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                        <div className="flex flex-col text-left">
                           <span className="text-[14px] font-black text-[#1d2939]">주요 담당자 리스트</span>
                           <span className="text-[11px] text-[#8b95a1] font-medium tracking-tight">AI 거버넌스 및 과제 신청 문의</span>
                        </div>
                        <button 
                          onClick={() => setShowContactPopup(false)} 
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="flex flex-col gap-4">
                        {contactInfo.map((info, i) => (
                          <div key={i} className="flex flex-col group/item p-3 rounded-2xl hover:bg-blue-50/50 transition-colors text-left border border-transparent hover:border-blue-100/50">
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="px-2 py-0.5 text-[9px] font-black bg-blue-100 text-blue-600 rounded uppercase tracking-wider">{info.label}</span>
                              <span className="text-[12px] font-bold text-gray-400">{info.dept}</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                              <span className="text-[16px] font-black text-[#1d2939]">{info.name}</span>
                              <span className="text-[12px] text-[#5c6eff] font-medium opacity-0 group-hover/item:opacity-100 transition-opacity">연락하기</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Tooltip arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white"></div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;

'use client';

import React, { useState } from 'react';
import { HiAdjustmentsHorizontal, HiMagnifyingGlass, HiChatBubbleOvalLeft } from 'react-icons/hi2';

const SearchBarFiltering = () => {
  const [activeTab, setActiveTab] = useState('keyword');

  const tabs = [
    { id: 'filter', label: 'Filter Manual', icon: <HiAdjustmentsHorizontal className="w-5 h-5" /> },
    { id: 'keyword', label: 'Keyword', icon: <HiMagnifyingGlass className="w-5 h-5" /> },
    { id: 'tanya', label: 'Tanya Seeri', icon: <HiChatBubbleOvalLeft className="w-5 h-5" /> },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-[2.5rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] p-5 md:p-7 border border-gray-100 flex flex-col gap-6">
        {/* Tabs section */}
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-[15px] font-bold transition-all duration-300 cursor-pointer ${activeTab === tab.id
                  ? 'bg-[#1152a1] text-white shadow-lg shadow-blue-900/20 active:scale-95'
                  : 'bg-white text-[#1152a1] border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 active:scale-95'
                }`}
            >
              {tab.icon}
              <span className="leading-none">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Search input section */}
        <div className="relative">
          <div className="flex items-center bg-white rounded-2xl p-2.5 border border-gray-100 transition-all duration-300 focus-within:ring-4 focus-within:ring-blue-50 focus-within:border-[#1152a1]/30 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            {/* Left Icon (Search Circle) */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1152a1] text-white shrink-0 ml-1 shadow-md shadow-blue-900/20">
              <HiMagnifyingGlass className="w-6 h-6" />
            </div>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Cari properti impian"
              className="w-full px-5 bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-300 text-lg font-medium tracking-tight"
            />

            {/* Right Search Button (Square rounded) */}
            <button className="flex items-center justify-center w-12 h-11 rounded-xl bg-[#F0F2F5] hover:bg-[#E2E6EC] text-[#868B98] transition-all duration-200 cursor-pointer mr-1 active:scale-90">
              <HiMagnifyingGlass className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBarFiltering;

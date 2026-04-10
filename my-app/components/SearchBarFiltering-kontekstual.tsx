'use client';

import React, { useCallback, useState } from 'react';
import { Inter } from 'next/font/google';
import {
  HiAdjustmentsHorizontal,
  HiMagnifyingGlass,
  HiChatBubbleOvalLeft,
} from 'react-icons/hi2';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export type SearchMode = 'filter' | 'keyword' | 'tanya';

export interface SearchBarFilteringKontekstualProps {
  /** Tab awal; default `keyword` */
  defaultMode?: SearchMode;
  /** Dipanggil setelah mode tab berganti */
  onModeChange?: (mode: SearchMode) => void;
  /** Dipanggil saat pengguna menjalankan pencarian (Enter / tombol kiri / tombol kanan) */
  onSearch?: (query: string) => void;
  /** Placeholder input; default sesuai copy Seerumah */
  searchPlaceholder?: string;
}

const TABS: { id: SearchMode; label: string; icon: React.ReactNode }[] = [
  {
    id: 'filter',
    label: 'Filter Manual',
    icon: <HiAdjustmentsHorizontal className="h-5 w-5 shrink-0" aria-hidden />,
  },
  {
    id: 'keyword',
    label: 'Keyword',
    icon: <HiMagnifyingGlass className="h-5 w-5 shrink-0" aria-hidden />,
  },
  {
    id: 'tanya',
    label: 'Tanya Seeri',
    icon: <HiChatBubbleOvalLeft className="h-5 w-5 shrink-0" aria-hidden />,
  },
];

export default function SearchBarFilteringKontekstual({
  defaultMode = 'keyword',
  onModeChange,
  onSearch,
  searchPlaceholder = 'Cari properti impian',
}: SearchBarFilteringKontekstualProps) {
  const [activeTab, setActiveTab] = useState<SearchMode>(defaultMode);
  const [query, setQuery] = useState('');

  const runSearch = useCallback(() => {
    onSearch?.(query.trim());
  }, [onSearch, query]);

  const selectTab = (mode: SearchMode) => {
    setActiveTab(mode);
    onModeChange?.(mode);
  };

  return (
    <div
      className={[
        inter.className,
        'w-[730px] max-w-full',
        'rounded-[15px] bg-white p-5',
        'shadow-[0px_1px_3px_rgba(0,0,0,0.1)]',
        'transition-all duration-200 ease-in-out',
        'hover:shadow-[0px_4px_12px_rgba(0,0,0,0.15)]',
      ].join(' ')}
    >
      <div
        className="mb-4 flex flex-wrap gap-3"
        role="tablist"
        aria-label="Mode pencarian"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => selectTab(tab.id)}
              className={[
                'inline-flex items-center gap-2 rounded-[50px] px-6 py-3',
                'text-base font-bold leading-none transition-all duration-200 ease-in-out',
                'active:scale-[0.98]',
                isActive
                  ? 'border border-transparent bg-[#1957A0] text-white'
                  : 'border border-[#CCCCCC] bg-[#F9FAFB] text-[#1957A0] hover:bg-[#F1F5F9]',
              ].join(' ')}
            >
              <span className={isActive ? 'text-white' : 'text-[#1957A0]'}>{tab.icon}</span>
              <span className={isActive ? 'text-white' : 'text-[#1957A0]'}>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div
        className={[
          'flex h-[60px] items-center gap-3 rounded-[17px] border border-[#E2E8F0] bg-white px-[14px]',
          'transition-all duration-200 ease-in-out',
          'focus-within:border-transparent focus-within:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]',
        ].join(' ')}
      >
        <button
          type="button"
          className={[
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1957A0] text-white',
            'transition-all duration-200 ease-in-out',
            'hover:brightness-110 active:scale-95',
          ].join(' ')}
          aria-label="Cari"
          onClick={runSearch}
        >
          <HiMagnifyingGlass className="h-5 w-5" aria-hidden />
        </button>

        <input
          type="search"
          name="search-property"
          placeholder={searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              runSearch();
            }
          }}
          className={[
            'min-w-0 flex-1 border-0 bg-transparent p-0 text-base font-normal text-[#1E293B]',
            'placeholder:text-[#94A3B8] placeholder:text-base placeholder:font-medium',
            'focus:outline-none',
          ].join(' ')}
        />

        <button
          type="button"
          className={[
            'flex h-10 min-w-10 shrink-0 items-center justify-center rounded-lg bg-[#EBEEF2] px-3',
            'transition-all duration-200 ease-in-out',
            'hover:bg-[#E2E6EB] active:scale-95',
          ].join(' ')}
          aria-label="Cari lanjutan"
          onClick={runSearch}
        >
          <HiMagnifyingGlass className="h-5 w-5 text-[#555555]" aria-hidden />
        </button>
      </div>
    </div>
  );
}

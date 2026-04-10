'use client';

import Link from 'next/link';
import { FaBookmark } from 'react-icons/fa';
import { HiBars3, HiMegaphone, HiOutlineHeart } from 'react-icons/hi2';

const BRAND_BLUE = '#1957A0';
const BRAND_YELLOW = '#F5C400';

function SeerumahLogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M24 5 43 23v20H5V23L24 5Z"
        stroke={BRAND_YELLOW}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <circle cx="24" cy="28" r="10" fill={BRAND_BLUE} />
      <ellipse cx="24" cy="28" rx="5.5" ry="3.8" fill="white" />
      <circle cx="24" cy="28" r="2.2" fill={BRAND_BLUE} />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E7EB] bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 text-[#111827] transition-opacity hover:opacity-90"
          aria-label="Seerumah beranda"
        >
          <SeerumahLogoMark className="h-10 w-10 sm:h-11 sm:w-11" />
          <span className="font-sans text-xl font-medium tracking-tight sm:text-2xl">
            <span className="lowercase">seer</span>
            <span className="lowercase" style={{ color: BRAND_YELLOW }}>
              u
            </span>
            <span className="lowercase">mah</span>
          </span>
        </Link>

        <nav
          className="flex flex-wrap items-center justify-end gap-3 sm:gap-5 md:gap-7 lg:gap-8"
          aria-label="Navigasi utama"
        >
          <Link
            href="/pasang-iklan"
            className="inline-flex items-center gap-2 font-bold transition-opacity hover:opacity-85"
            style={{ color: BRAND_BLUE }}
          >
            <HiMegaphone className="h-5 w-5 shrink-0" aria-hidden />
            <span className="hidden text-sm sm:inline md:text-base whitespace-nowrap">
              Pasang Iklan Sekarang
            </span>
            <span className="text-sm sm:hidden whitespace-nowrap">Pasang Iklan</span>
          </Link>

          <Link
            href="/artikel"
            className="inline-flex items-center gap-2 text-sm font-normal text-[#111827] transition-colors hover:text-[#374151] md:text-base"
          >
            <FaBookmark className="h-[18px] w-[18px] shrink-0 text-[#111827]" aria-hidden />
            <span className="whitespace-nowrap">Artikel</span>
          </Link>

          <Link
            href="/favorit"
            className="inline-flex items-center gap-2 text-sm font-normal text-[#111827] transition-colors hover:text-[#374151] md:text-base"
          >
            <HiOutlineHeart className="h-5 w-5 shrink-0 text-[#111827]" aria-hidden />
            <span className="whitespace-nowrap">Favorit</span>
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EBEEF2] text-[#111827] transition-colors hover:bg-[#E2E6EB] active:scale-[0.98]"
            aria-label="Buka menu"
            aria-expanded="false"
          >
            <HiBars3 className="h-6 w-6" aria-hidden />
          </button>
        </nav>
      </div>
    </header>
  );
}

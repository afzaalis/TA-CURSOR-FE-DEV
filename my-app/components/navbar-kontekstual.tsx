'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Heart, Megaphone, Menu, X } from 'lucide-react';
import { MdBook } from 'react-icons/md';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
});

const ICON_SIZE = 20;

type NavbarKontekstualProps = {
  transparentOnTop?: boolean;
};

export default function NavbarKontekstual({
  transparentOnTop = false,
}: NavbarKontekstualProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const menuRootRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    if (!transparentOnTop) {
      setIsAtTop(false);
      return;
    }
    const onScroll = () => setIsAtTop(window.scrollY <= 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOnTop]);

  useEffect(() => {
    if (!menuOpen) return;
    const onPointer = (e: MouseEvent | PointerEvent) => {
      const el = menuRootRef.current;
      if (el && !el.contains(e.target as Node)) closeMenu();
    };
    document.addEventListener('pointerdown', onPointer);
    return () => document.removeEventListener('pointerdown', onPointer);
  }, [menuOpen, closeMenu]);

  const linkBase =
    'inline-flex items-center gap-2 transition-all duration-200 ease-in-out hover:opacity-80';
  /** Poppins semibold 16px untuk label menu */
  const menuText = 'text-base font-semibold leading-normal';
  const isTransparentState = transparentOnTop && isAtTop && !menuOpen;
  const menuTextColor = isTransparentState ? "text-white" : "text-[#1E293B]";
  const ctaColor = isTransparentState ? "text-white" : "text-[#1957A0]";
  const iconNeutralColor = isTransparentState ? "text-white" : "text-[#64748B]";

  const hamburgerBtnClass =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-200 ease-in-out active:scale-[0.98]";

  const mobileLinks = (
    <div className="flex flex-col gap-3">
      <Link
        href="/pasang-iklan"
        className={`${linkBase} ${menuText} ${ctaColor}`}
        onClick={closeMenu}
      >
        <Megaphone
          size={ICON_SIZE}
          strokeWidth={2}
          className={`shrink-0 ${ctaColor}`}
          aria-hidden
        />
        Pasang Iklan Sekarang
      </Link>
      <Link
        href="/artikel"
        className={`${linkBase} ${menuText} ${menuTextColor}`}
        onClick={closeMenu}
      >
        <MdBook className={`h-5 w-5 shrink-0 ${menuTextColor}`} aria-hidden />
        Artikel
      </Link>
      <Link
        href="/favorit"
        className={`${linkBase} ${menuText} ${menuTextColor}`}
        onClick={closeMenu}
      >
        <Heart
          size={ICON_SIZE}
          strokeWidth={2}
          className={`shrink-0 ${iconNeutralColor}`}
          aria-hidden
        />
        Favorit
      </Link>
    </div>
  );

  return (
    <header
      className={`${poppins.className} z-50 w-full transition-all duration-300 ${
        transparentOnTop ? "fixed left-0 top-0" : "sticky top-0"
      } ${
        isTransparentState
          ? "border-b border-transparent bg-transparent shadow-none"
          : "border-b border-[#E5E7EB] bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div ref={menuRootRef} className="w-full">
        <div className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-10">
          <Link
            href="/"
            className={`${linkBase} shrink-0`}
            aria-label="Seerumah beranda"
            onClick={closeMenu}
          >
            {/* width/height intrinsik untuk ratio; tampilan diatur lebar/tinggi via className.
                unoptimized: hindari kegagalan pipeline Sharp/Turbopack pada PNG lokal (kotak pink). */}
            <Image
              src={
                isTransparentState
                  ? "/images/seerumah-light.webp"
                  : "/images/logo.png"
              }
              alt="Seerumah"
              width={320}
              height={80}
              className="h-10 w-auto max-h-12 max-w-[min(260px,calc(100vw-8rem))] object-contain object-left transition sm:h-12"
              priority
              unoptimized
            />
          </Link>

          <div className="relative flex items-center">
            <nav
              className="hidden items-center gap-6 md:flex lg:gap-8"
              aria-label="Navigasi utama"
            >
              <Link
                href="/pasang-iklan"
                className={`${linkBase} ${menuText} ${ctaColor}`}
              >
                <Megaphone
                  size={ICON_SIZE}
                  strokeWidth={2}
                  className={`shrink-0 ${ctaColor}`}
                  aria-hidden
                />
                <span className="whitespace-nowrap">Pasang Iklan Sekarang</span>
              </Link>

              <Link
                href="/artikel"
                className={`${linkBase} ${menuText} ${menuTextColor}`}
              >
                <MdBook className={`h-5 w-5 shrink-0 ${menuTextColor}`} aria-hidden />
                <span className="whitespace-nowrap">Artikel</span>
              </Link>

              <Link
                href="/favorit"
                className={`${linkBase} ${menuText} ${menuTextColor}`}
              >
                <Heart
                  size={ICON_SIZE}
                  strokeWidth={2}
                  className={`shrink-0 ${iconNeutralColor}`}
                  aria-hidden
                />
                <span className="whitespace-nowrap">Favorit</span>
              </Link>

              <button
                type="button"
                className={`${hamburgerBtnClass} hidden md:flex ${
                  isTransparentState
                    ? "bg-white/20 text-white hover:bg-white/30"
                    : "bg-[#F3F4F6] text-[#1F2937] hover:bg-[#E5E7EB]"
                }`}
                aria-label="Menu"
              >
                <Menu size={ICON_SIZE} strokeWidth={2} aria-hidden />
              </button>
            </nav>

            <button
              type="button"
              className={`${hamburgerBtnClass} md:hidden ${
                isTransparentState
                  ? "bg-white/20 text-white hover:bg-white/30"
                  : "bg-[#F3F4F6] text-[#1F2937] hover:bg-[#E5E7EB]"
              }`}
              aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={menuOpen}
              aria-haspopup="true"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <X size={ICON_SIZE} strokeWidth={2} aria-hidden />
              ) : (
                <Menu size={ICON_SIZE} strokeWidth={2} aria-hidden />
              )}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div
            className="border-t border-[#E5E7EB] bg-white px-5 py-4 sm:px-6 md:hidden"
            role="dialog"
            aria-label="Menu mobile"
          >
            {mobileLinks}
          </div>
        ) : null}
      </div>
    </header>
  );
}


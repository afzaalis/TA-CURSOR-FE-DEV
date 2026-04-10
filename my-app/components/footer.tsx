'use client';

import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white font-poppins w-full border-t border-gray-200">
      <div className="container mx-auto px-3 sm:px-6 lg:px-10 py-10">


        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          {/* Left Section - Logo & Contact */}
          <div className="lg:col-span-2">
            {/* Logo */}
            {/* <Image src="/images/logo.png" alt="seerumah" width={200} height={200} /> */}
            {/* Address/Description */}
            <p className="text-sm text-gray-700 mb-6 leading-relaxe mt-4">
              Jalan Telekomunikasi, Terusan Buah Batu,
              Sukapura, Dayeuhkolot, Kabupaten Bandung, Jawa Barat, 40257,
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/seerumah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#1957A0] hover:text-[#144785] transition text-xl"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="mailto:info@seerumah.com"
                aria-label="Email"
                className="text-[#1957A0] hover:text-[#144785] transition text-xl"
              >
                <HiOutlineMail />
              </Link>
              <Link
                href="https://www.instagram.com/seerumahdotcom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#1957A0] hover:text-[#144785] transition text-xl"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://twitter.com/seerumah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-[#1957A0] hover:text-[#144785] transition text-xl"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://www.youtube.com/@seerumah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-[#1957A0] hover:text-[#144785] transition text-xl"
              >
                <FaYoutube />
              </Link>
              <Link
                href="https://www.tiktok.com/@seerumah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-[#1957A0] hover:text-[#144785] transition text-xl"
              >
                <FaTiktok />
              </Link>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Column 1: Perusahaan */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-sm">Perusahaan</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/tentang-kami"
                    className="text-sm text-gray-700 hover:text-[#1957A0] transition-colors"
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tentang-seerumah"
                    className="text-sm text-gray-700 hover:text-[#1957A0] transition-colors"
                  >
                    Tentang Seerumah
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hubungi-kami"
                    className="text-sm text-gray-700 hover:text-[#1957A0] transition-colors"
                  >
                    Hubungi Kami
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://artikel.seerumah.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 hover:text-[#1957A0] transition-colors"
                  >
                    Artikel
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Perusahaan (Legal) */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-sm">Perusahaan</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/legal/"
                    className="text-sm text-gray-700 hover:text-[#1957A0] transition-colors"
                  >
                    Kebijakan Privasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/"
                    className="text-sm text-gray-700 hover:text-[#1957A0] transition-colors"
                  >
                    Syarat Penggunaan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/"
                    className="text-sm text-gray-700 hover:text-[#1957A0] transition-colors"
                  >
                    Syarat Penggunaan Agen
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Temukan */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-sm">Temukan</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/listingrumah"
                    className="text-sm text-gray-700 hover:text-[#1957A0] transition-colors"
                  >
                    Rumah Terdekat
                  </Link>
                </li>
                {/* <li>
                  <Link 
                    href="/listingrumah?sort=popular" 
                    className="text-sm text-gray-700 hover:text-[#1957A0] transition-colors"
                  >
                    Rumah Terpopuler
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/perumahan"
                    className="text-sm text-gray-700 hover:text-[#1957A0] transition-colors"
                  >
                    Perumahan
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Layanan */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-sm">Layanan</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/paket-iklan"
                    className="text-sm text-gray-700 hover:text-[#1957A0] transition-colors"
                  >
                    Pasang Iklan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/titip-cari"
                    className="text-sm text-gray-700 hover:text-[#1957A0] transition-colors"
                  >
                    Titip Cari
                  </Link>
                </li>
                <li>
                  <Link
                    href="/simulasi-kpr"
                    className="text-sm text-gray-700 hover:text-[#1957A0] transition-colors"
                  >
                    Simulasi KPR
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tanya-seeri"
                    className="text-sm text-gray-700 hover:text-[#1957A0] transition-colors"
                  >
                    Tanya Seeri
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pusat-bantuan"
                    className="text-sm text-gray-700 hover:text-[#1957A0] transition-colors"
                  >
                    Pusat Bantuan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/selasar"
                    className="text-sm text-gray-700 hover:text-[#1957A0] transition-colors"
                  >
                    Selasar Seerumah
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 mb-6" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            © 2026 PT Technology Estate Development - Your Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
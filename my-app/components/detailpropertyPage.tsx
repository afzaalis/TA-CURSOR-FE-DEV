"use client";

import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { useState } from "react";
import {
  Bath,
  BedDouble,
  ChevronLeft,
  ChevronRight,
  LandPlot,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "@/components/footer";
import NavbarKontekstual from "@/components/navbar-kontekstual";
import PropertyCardKontekstual, {
  type PropertyData,
  formatPropertyPriceIdr,
} from "@/components/property/property-card-kontekstual";
import SimulasiCicilanKpr from "@/components/simulasi-cicilan-kpr";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const GALLERY = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
];

const HARGA = 850_000_000;

const RELATED: PropertyData[] = Array.from({ length: 6 }, (_, i) => ({
  id: `rel-${i + 1}`,
  isPromoted: true,
  price: 700_000_000 + i * 12_000_000,
  status: "Primary",
  title: "Perumahan Cherry Field Tipe A",
  location: {
    city: i % 2 === 0 ? "Bandung Kota" : "Kab. Bandung",
    district: i % 2 === 0 ? "Antapani" : "Cileunyi",
  },
  facilities: {
    bed: 3,
    bath: 2,
    landArea: "120 m²",
    buildingArea: "90 m²",
  },
  agent: {
    name: "Agen Demo",
    photo: "/images/logo.png",
  },
  imageSrc:
    i % 2 === 0
      ? "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1000&q=80"
      : "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=80",
  installmentBadges: ["8,2 Jt/bln", "5 thn"],
}));

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className={`${poppins.className} mb-4 text-lg font-bold uppercase tracking-[0.08em] text-[#1E293B] sm:text-xl`}
    >
      {children}
    </h2>
  );
}

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-[#E8ECF2] py-2.5 text-sm last:border-0">
      <span className="text-[#64748B]">{label}</span>
      <span className="font-semibold text-[#1E293B]">{value}</span>
    </div>
  );
}

function FacilityItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-[#E8ECF2] bg-[#F8FAFC] px-3 py-2 text-xs font-medium text-[#1E293B]">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1957A0]" aria-hidden />
      {label}
    </div>
  );
}

export default function DetailPropertyPage() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div
      className={`flex min-h-screen flex-col bg-[#F7F8FA] font-sans text-[#1E293B] ${poppins.className}`}
    >
      <NavbarKontekstual />

      <nav
        className="border-b border-[#E5E7EB] bg-white"
        aria-label="Kategori properti"
      >
        <div className="mx-auto flex max-w-[1440px] justify-center gap-8 px-5 py-3 sm:gap-12 md:gap-16">
          {(
            [
              ["Beli", "/"],
              ["Jual", "/"],
              ["Sewa", "/"],
            ] as const
          ).map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-semibold text-[#1957A0] transition hover:opacity-80 sm:text-base"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      <main className="flex-1">
        <div className="mx-auto max-w-[1440px] px-5 py-8 lg:px-10">
          <section className="mb-10 grid gap-6 lg:grid-cols-[1fr_min(360px,100%)] lg:gap-10">
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_112px] lg:items-start">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-200 lg:min-h-0">
                <Image
                  src={GALLERY[activeImage] ?? GALLERY[0]}
                  alt="Foto properti"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  priority
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 lg:flex lg:w-28 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0">
                {GALLERY.slice(0, 3).map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 transition lg:h-[calc((100%-0.5rem)/4)] lg:min-h-[72px] lg:w-full ${
                      activeImage === i
                        ? "border-[#1957A0] ring-2 ring-[#1957A0]/20"
                        : "border-transparent opacity-90 hover:opacity-100"
                    }`}
                    aria-label={`Tampilkan foto ${i + 1}`}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 112px, 112px"
                    />
                  </button>
                ))}
                <button
                  type="button"
                  className="relative flex h-20 w-28 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-black/60 text-lg font-bold text-white lg:h-[calc((100%-0.5rem)/4)] lg:min-h-[72px] lg:w-full"
                  aria-label="Lihat foto lainnya"
                >
                  <Image
                    src={GALLERY[3] ?? GALLERY[0]}
                    alt=""
                    fill
                    className="object-cover opacity-50"
                    sizes="(max-width: 1024px) 112px, 112px"
                  />
                  <span className="relative z-10">+10</span>
                </button>
              </div>
            </div>

            <aside className="lg:pt-2">
              <div className="rounded-2xl border border-[#E8ECF2] bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                <p className="mb-1 text-2xl font-bold italic text-[#1957A0] sm:text-[26px]">
                  {formatPropertyPriceIdr(HARGA)}
                </p>
                <h1 className="mb-2 text-lg font-bold text-[#1E293B] sm:text-xl">
                  Perumahan Cherry Field Tipe A
                </h1>
                <p className="mb-6 text-sm text-[#64748B]">
                  Bandung Kota, Antapani
                </p>
                <div className="mb-6 flex flex-wrap gap-4 text-sm text-[#1E293B]">
                  <span className="flex items-center gap-1.5">
                    <BedDouble className="h-4 w-4 text-[#1957A0]" aria-hidden />
                    <span className="font-semibold">3</span> KT
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath className="h-4 w-4 text-[#1957A0]" aria-hidden />
                    <span className="font-semibold">2</span> KM
                  </span>
                  <span className="flex items-center gap-1.5">
                    <LandPlot className="h-4 w-4 text-[#1957A0]" aria-hidden />
                    <span className="font-semibold">120 m²</span>
                  </span>
                </div>
                <div className="border-t border-[#E8ECF2] pt-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[#E8ECF2] bg-zinc-100">
                      <Image
                        src="/images/logo.png"
                        alt=""
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-[#64748B]">Agen properti</p>
                      <p className="font-bold text-[#1E293B]">Lestari Najwa</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#FDE047] py-3.5 text-sm font-bold text-[#1E293B] shadow-sm transition hover:brightness-95"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden />
                    Ajukan Pertanyaan
                  </button>
                  <a
                    href="https://wa.me/6280000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#E8ECF2] bg-white py-3.5 text-sm font-bold text-[#1E293B] transition hover:bg-[#F8FAFC]"
                  >
                    <FaWhatsapp className="h-5 w-5 text-[#25D366]" aria-hidden />
                    WhatsApp Agen Properti
                  </a>
                </div>
              </div>
            </aside>
          </section>

          <div className="space-y-10 rounded-2xl bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <section>
              <SectionTitle>Deskripsi properti</SectionTitle>
              <p className="text-sm leading-relaxed text-[#475569]">
                Rumah siap huni di kawasan strategis dengan akses mudah ke
                jalan utama dan fasilitas umum. Lingkungan asri, one gate system,
                serta taman bermain untuk keluarga. Cocok untuk pasangan muda
                maupun investasi jangka panjang dengan potensi kenaikan nilai
                aset yang stabil di wilayah ini.
              </p>
            </section>

            <section>
              <SectionTitle>Spesifikasi properti</SectionTitle>
              <div className="grid gap-0 sm:grid-cols-2 sm:gap-x-12">
                <div>
                  <SpecItem label="Kamar tidur" value="3" />
                  <SpecItem label="Kamar mandi" value="2" />
                  <SpecItem label="Carport" value="1 mobil" />
                  <SpecItem label="Luas tanah" value="120 m²" />
                  <SpecItem label="Luas bangunan" value="90 m²" />
                </div>
                <div>
                  <SpecItem label="Sertifikat" value="SHM" />
                  <SpecItem label="Daya listrik" value="2200 VA" />
                  <SpecItem label="Jumlah lantai" value="2" />
                  <SpecItem label="Kondisi properti" value="Baru" />
                </div>
              </div>
            </section>

            <section>
              <SectionTitle>Tentang properti</SectionTitle>
              <div className="max-w-2xl">
                <SpecItem label="Lebar jalan" value="6 m" />
                <SpecItem label="Hook" value="Tidak" />
                <SpecItem label="Tahun bangun" value="2022" />
                <SpecItem label="Tipe properti" value="Rumah" />
                <SpecItem label="Tipe iklan" value="Dijual" />
                <SpecItem label="ID iklan" value="SR-2024-08921" />
              </div>
            </section>

            <section>
              <SectionTitle>Interior &amp; exterior</SectionTitle>
              <div className="max-w-2xl">
                <SpecItem label="Kondisi" value="Bagus" />
                <SpecItem label="Perabotan" value="Tidak termasuk" />
                <SpecItem label="Peralatan" value="Partial" />
                <SpecItem label="Hadap" value="Timur" />
                <SpecItem label="Konsep & gaya rumah" value="Modern minimalis" />
              </div>
            </section>

            <section>
              <SectionTitle>Fasilitas rumah &amp; fasilitas perumahan</SectionTitle>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                {[
                  "Listrik PLN",
                  "Air PDAM",
                  "One gate",
                  "Taman bermain",
                  "Security 24 jam",
                  "Mushola",
                  "Jogging track",
                  "Area komersial",
                ].map((label) => (
                  <FacilityItem key={label} label={label} />
                ))}
              </div>
            </section>

            <section>
              <SectionTitle>Peta lokasi properti</SectionTitle>
              <div className="aspect-[21/9] min-h-[280px] w-full overflow-hidden rounded-xl border border-[#E8ECF2] bg-[#E8F4FC]">
                <iframe
                  title="Peta lokasi properti"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.349335739937!2d107.629127!3d-6.917464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7c9b8b8b8b9%3A0x1!2sBandung!5e0!3m2!1sid!2sid!4v1"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="max-w-3xl">
              <SimulasiCicilanKpr
                hargaProperti={HARGA}
                variant="detail"
                persenMaks={100}
              />
            </section>
          </div>

          <section className="mt-12">
            <div className="mb-6 flex items-center justify-between">
              <h2
                className={`${poppins.className} text-[25px] font-semibold uppercase tracking-[0.06em] text-[#555555]`}
              >
                Perumahan populer
              </h2>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Sebelumnya perumahan populer"
                  className="rounded-full border border-[#E2E8F0] p-1.5 text-[#64748B] transition hover:bg-[#F8FAFC]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Berikutnya perumahan populer"
                  className="rounded-full border border-[#E2E8F0] p-1.5 text-[#64748B] transition hover:bg-[#F8FAFC]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto pb-2">
              <div className="flex min-w-min gap-4">
                {RELATED.map((card) => (
                  <div key={card.id} className="w-[196px] shrink-0">
                    <PropertyCardKontekstual data={card} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

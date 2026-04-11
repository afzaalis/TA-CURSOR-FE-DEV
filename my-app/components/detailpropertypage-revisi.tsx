"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { useState } from "react";
import {
  Bath,
  BedDouble,
  ChevronLeft,
  ChevronRight,
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
  weight: ["400", "500", "600", "700"],
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

const FASILITAS_RUMAH = ["Listrik PLN", "Air PDAM"];

const FASILITAS_PERUMAHAN = [
  "One gate",
  "Taman bermain",
  "Security 24 jam",
  "Mushola",
  "Jogging track",
  "Area komersial",
];

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
    <div className="flex items-center gap-2 rounded-lg border border-[#E8ECF2] bg-white px-3 py-2 text-xs font-medium text-[#1E293B]">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1957A0]" aria-hidden />
      {label}
    </div>
  );
}

function AgentPropertyCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-[#E8ECF2] bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] ${className}`}
    >
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
        className="mb-3 flex w-full items-center justify-center rounded-xl bg-[#FFCA00] py-3.5 text-sm font-bold text-[#323232] transition hover:brightness-[0.98]"
      >
        Ajukan Pertanyaan
      </button>
      <a
        href="https://wa.me/6280000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#555555] bg-white py-3.5 text-sm font-bold text-[#555555] transition hover:bg-[#FAFAFA]"
      >
        <FaWhatsapp className="h-5 w-5 text-[#555555]" aria-hidden />
        WhatsApp Agen Properti
      </a>
    </div>
  );
}

/** Layout revisi: agen sticky hanya di blok harga→fasilitas; peta & KPR di luar track sticky. */
export default function DetailPropertyPageRevisi() {
  const [activeImage, setActiveImage] = useState(0);

  const thumbButtonClass = (active: boolean) =>
    `relative shrink-0 overflow-hidden rounded-xl border-2 transition lg:min-h-0 lg:w-full lg:flex-1 lg:basis-0 aspect-[5/4] w-[104px] sm:w-[120px] lg:aspect-auto ${
      active
        ? "border-[#1957A0] ring-2 ring-[#1957A0]/20"
        : "border-transparent hover:opacity-100 opacity-90"
    }`;

  return (
    <div
      className={`flex min-h-screen flex-col bg-[#FFFFFF] text-[#1E293B] antialiased ${poppins.className}`}
    >
      <NavbarKontekstual />

      <main className="flex-1">
        <div className="mx-auto max-w-[1440px] px-5 py-8 lg:px-10">
          {/* Section 1: foto utama ~3/4 + kolom 3 thumbnail (terakhir: Selengkapnya →) */}
          <section
            className="mb-8 lg:mb-10"
            aria-label="Galeri foto properti"
          >
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,3fr)_minmax(132px,26%)] lg:items-stretch lg:gap-3">
              <div className="relative aspect-[16/10] w-full min-h-0 overflow-hidden rounded-2xl border border-[#E8ECF2] bg-[#FFFFFF]">
                <Image
                  src={GALLERY[activeImage] ?? GALLERY[0]}
                  alt="Foto properti"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 72vw"
                  priority
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 lg:h-full lg:min-h-0 lg:max-h-none lg:flex-col lg:gap-2 lg:overflow-hidden lg:pb-0">
                {GALLERY.slice(0, 2).map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={thumbButtonClass(activeImage === i)}
                    aria-label={`Tampilkan foto ${i + 1}`}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 120px, 20vw"
                    />
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setActiveImage(2)}
                  className={thumbButtonClass(activeImage === 2)}
                  aria-label="Lihat foto selengkapnya"
                >
                  <Image
                    src={GALLERY[2] ?? GALLERY[0]}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 120px, 20vw"
                  />
                  <span className="absolute inset-0 z-10 flex items-center justify-center gap-0.5 bg-black/55 px-2 text-xs font-semibold text-white sm:text-sm">
                    Selengkapnya
                    <ChevronRight
                      className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                      aria-hidden
                    />
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* Section 2+: harga & judul (kiri) | kartu agen sticky (kanan) */}
          <div className="mb-8 lg:mb-10 lg:grid lg:grid-cols-[1fr_min(360px,100%)] lg:items-start lg:gap-10">
            <div className="min-w-0 space-y-8">
              <section className="py-1">
                <p className="mb-4 text-2xl font-bold italic text-[#1957A0] sm:mb-5 sm:text-[26px]">
                  {formatPropertyPriceIdr(HARGA)}
                </p>
                <div className="flex flex-col gap-8 sm:flex-row sm:items-stretch sm:justify-between sm:gap-10">
                  <div className="min-w-0 flex-1">
                    <h1 className="mb-2 text-lg font-bold text-[#1E293B] sm:text-xl">
                      Perumahan Cherry Field Tipe A
                    </h1>
                    <p className="text-sm text-[#64748B]">
                      Bandung Kota, Antapani
                    </p>
                    <p className="text-sm text-[#64748B]">
                      Ted. Estate Indonesia
                    </p>
                  </div>
                  <div
                    className="flex shrink-0 items-stretch justify-center gap-10 text-[#555555] sm:justify-end sm:gap-12 lg:gap-16"
                    aria-label="Ringkasan KT, KM, dan luas"
                  >
                    <div className="flex min-h-[3.5rem] flex-col items-center justify-between self-stretch sm:min-h-0">
                      <span className="text-lg font-bold leading-none sm:text-xl">
                        3
                      </span>
                      <BedDouble
                        className="h-6 w-6 shrink-0 sm:h-7 sm:w-7"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                      <span className="sr-only">kamar tidur</span>
                    </div>
                    <div className="flex min-h-[3.5rem] flex-col items-center justify-between self-stretch sm:min-h-0">
                      <span className="text-lg font-bold leading-none sm:text-xl">
                        2
                      </span>
                      <Bath
                        className="h-6 w-6 shrink-0 sm:h-7 sm:w-7"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                      <span className="sr-only">kamar mandi</span>
                    </div>
                    <div className="flex min-h-[3.5rem] flex-col items-center justify-between self-stretch sm:min-h-0">
                      <span className="text-lg font-bold leading-none sm:text-xl">
                        120
                      </span>
                      <span className="text-sm font-semibold leading-none sm:text-base">
                        m²
                      </span>
                      <span className="sr-only">luas tanah</span>
                    </div>
                  </div>
                </div>
              </section>

              <AgentPropertyCard className="lg:hidden" />

              <div className="space-y-10 py-2">
                <section>
                  <SectionTitle>Deskripsi properti</SectionTitle>
                  <p className="max-w-2xl text-sm leading-relaxed text-[#475569]">
                    Rumah siap huni di kawasan strategis dengan akses mudah ke
                    jalan utama dan fasilitas umum. Lingkungan asri, one gate
                    system, serta taman bermain untuk keluarga. Cocok untuk
                    pasangan muda maupun investasi jangka panjang dengan potensi
                    kenaikan nilai aset yang stabil di wilayah ini.
                  </p>
                </section>

                <section>
                  <SectionTitle>Spesifikasi properti</SectionTitle>
                  <div className="max-w-2xl">
                    <SpecItem label="Kamar tidur" value="3" />
                    <SpecItem label="Kamar mandi" value="2" />
                    <SpecItem label="Carport" value="1 mobil" />
                    <SpecItem label="Luas tanah" value="120 m²" />
                    <SpecItem label="Luas bangunan" value="90 m²" />
                    <SpecItem label="Sertifikat" value="SHM" />
                    <SpecItem label="Daya listrik" value="2200 VA" />
                    <SpecItem label="Jumlah lantai" value="2" />
                    <SpecItem label="Kondisi properti" value="Baru" />
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
                  <SectionTitle>Interior properti</SectionTitle>
                  <div className="max-w-2xl">
                    <SpecItem label="Kondisi" value="Bagus" />
                    <SpecItem label="Perabotan" value="Tidak termasuk" />
                    <SpecItem label="Peralatan" value="Partial" />
                    <SpecItem label="Hadap" value="Timur" />
                    <SpecItem label="Konsep & gaya rumah" value="Modern minimalis" />
                  </div>
                </section>

                <section>
                  <SectionTitle>Fasilitas rumah</SectionTitle>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                    {FASILITAS_RUMAH.map((label) => (
                      <FacilityItem key={label} label={label} />
                    ))}
                  </div>
                </section>

                <section>
                  <SectionTitle>Fasilitas perumahan</SectionTitle>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                    {FASILITAS_PERUMAHAN.map((label) => (
                      <FacilityItem key={label} label={label} />
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/*
              Kolom kanan = track sticky: setinggi konten kiri (harga → fasilitas).
              Kartu ikut scroll naik/turun dalam batas ini; berhenti saat peta (di luar grid).
            */}
            <aside
              className="relative hidden min-h-0 lg:block"
              aria-label="Kontak agen"
            >
              <div className="sticky top-24 z-10 pb-8 pt-0">
                <AgentPropertyCard />
              </div>
            </aside>
          </div>

          {/* Peta: lebar selaras kolom konten (max-w-2xl) seperti deskripsi & spesifikasi */}
          <section className="mb-8 lg:mb-10">
            <div className="max-w-2xl">
              <SectionTitle>Peta lokasi properti</SectionTitle>
              <div className="aspect-[4/3] w-full min-h-[240px] overflow-hidden rounded-lg bg-[#FFFFFF] sm:aspect-[16/10] sm:min-h-[280px]">
                <iframe
                  title="Peta lokasi properti"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.349335739937!2d107.629127!3d-6.917464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7c9b8b8b8b9%3A0x1!2sBandung!5e0!3m2!1sid!2sid!4v1"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        </div>

        {/* 6. Simulasi KPR — lebar penuh relatif terhadap viewport (di luar kolom agen) */}
        <section className="border-y border-[#E8ECF2] bg-[#FFFFFF] py-10">
          <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-10">
            <SimulasiCicilanKpr
              hargaProperti={HARGA}
              variant="detail"
              persenMaks={100}
              className="w-full max-w-none"
            />
          </div>
        </section>

        <div className="mx-auto max-w-[1440px] px-5 py-12 lg:px-10">
          <section>
            <div className="mb-6 flex items-center justify-between">
              <h2
                id="perumahan-populer-heading"
                className={`${poppins.className} text-[25px] font-semibold uppercase tracking-[0.06em] text-[#555555]`}
              >
                Perumahan populer
              </h2>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Sebelumnya perumahan populer"
                  className="rounded-full border border-[#E2E8F0] bg-white p-1.5 text-[#64748B] transition hover:bg-[#FAFAFA]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Berikutnya perumahan populer"
                  className="rounded-full border border-[#E2E8F0] bg-white p-1.5 text-[#64748B] transition hover:bg-[#FAFAFA]"
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

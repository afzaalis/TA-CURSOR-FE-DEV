import Image from "next/image";
import { Inter } from "next/font/google";
import SearchBarFilteringTerstruktur from "@/components/SearchBarFiltering-terstruktur";

// Import types & sub-components
import type { HomepageKontekstualProps } from "./homepage/homepage-kontekstual.types";
import { MOCK_HOMEPAGE_CARDS } from "./homepage/homepage-kontekstual.utils";
import PropertyRow from "./homepage/homepage-property-row";

// Re-export MOCK_HOMEPAGE_CARDS as cards agar tidak memutus dependensi app/page.tsx
export const cards = MOCK_HOMEPAGE_CARDS;
export type { HomepageKontekstualProps } from "./homepage/homepage-kontekstual.types";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function HomepageKontekstual({
  heroTitle = "Temukan Hunian Impian Anda",
  heroSubtitle = "di Lokasi Terbaik",
  heroDescription = "Cari dari beragam listing properti terbaik dengan filter yang interaktif dan akses layanan sewa, jual, hingga pasang iklan lebih cepat.",
  propertyData = MOCK_HOMEPAGE_CARDS,
}: HomepageKontekstualProps) {
  return (
    <main className={`${inter.className} flex-1 bg-white`}>
      <section className="bg-[linear-gradient(180deg,#0080CF_25%,#5BADE0_63%,#FFFFFF_100%)] pb-[60px] pt-[104px]">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <h1 className="text-center text-[40px] font-bold leading-tight text-white">
            {heroTitle}
          </h1>
          <p className="text-center text-[32px] font-bold leading-tight text-[#FDE047]">
            {heroSubtitle}
          </p>
          <p className="mx-auto mt-3 max-w-[600px] text-center text-sm font-normal text-white/90">
            {heroDescription}
          </p>
          <div className="mx-auto mt-6 w-full max-w-[760px]">
            <SearchBarFilteringTerstruktur />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-5 py-12 lg:px-10">
        <PropertyRow title="Properti Terpopuler" items={propertyData} />
        <PropertyRow title="Rumah Secondary" items={propertyData} />
        <PropertyRow title="Sewa Properti" items={propertyData} />

        <section className="mb-12">
          <Image
            src="/images/testimonial.png"
            alt="Banner terpercaya seerumah"
            width={2000}
            height={540}
            className="h-auto w-full rounded-2xl object-cover"
            priority={false}
          />
        </section>

        <PropertyRow title="Tanah Potensial" items={propertyData} />

        <section className="mb-12">
          <Image
            src="/images/Simulasi-KPR.png"
            alt="Banner simulasi KPR Seerumah"
            width={2000}
            height={540}
            className="h-auto w-full rounded-2xl object-cover"
            priority={false}
          />
        </section>
      </div>
    </main>
  );
}

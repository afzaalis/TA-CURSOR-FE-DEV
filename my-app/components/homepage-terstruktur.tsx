import Image from "next/image";
import { Inter } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Poppins } from "next/font/google";
import PropertyCardKontekstual, {
  type PropertyData,
} from "@/components/property/property-card-kontekstual";
import SearchBarFilteringTerstruktur from "@/components/SearchBarFiltering-terstruktur";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const cards: PropertyData[] = Array.from({ length: 6 }, (_, i) => ({
  id: `prop-${i + 1}`,
  isPromoted: true,
  price: 700_000_000 + i * 15_000_000,
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

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2
        className={`${poppins.className} text-[25px] font-semibold leading-tight text-[#555555]`}
      >
        {title}
      </h2>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label={`Sebelumnya ${title}`}
          className="rounded-full border border-[#E2E8F0] p-1.5 text-[#64748B] transition hover:bg-[#F8FAFC]"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label={`Berikutnya ${title}`}
          className="rounded-full border border-[#E2E8F0] p-1.5 text-[#64748B] transition hover:bg-[#F8FAFC]"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function PropertyRow({ title }: { title: string }) {
  return (
    <section className="mb-12">
      <SectionHeader title={title} />
      <div className="overflow-x-auto pb-2">
        <div className="grid min-w-[1260px] grid-cols-6 gap-4">
        {cards.map((card) => (
          <div key={`${title}-${card.id}`} className="w-[196px]">
            <PropertyCardKontekstual data={card} />
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default function HomepageTerstruktur() {
  return (
    <main className={`${inter.className} flex-1 bg-white`}>
      <section className="bg-[linear-gradient(180deg,#0080CF_25%,#5BADE0_63%,#FFFFFF_100%)] pb-[60px] pt-[104px]">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <h1 className="text-center text-[40px] font-bold leading-tight text-white">
            Temukan Hunian Impian Anda
          </h1>
          <p className="text-center text-[32px] font-bold leading-tight text-[#FDE047]">
            di Lokasi Terbaik
          </p>
          <p className="mx-auto mt-3 max-w-[600px] text-center text-sm font-normal text-white/90">
            Cari dari beragam listing properti terbaik dengan filter yang
            interaktif dan akses layanan sewa, jual, hingga pasang iklan lebih
            cepat.
          </p>
          <div className="mx-auto mt-6 w-full max-w-[760px]">
            <SearchBarFilteringTerstruktur />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-5 py-12 lg:px-10">
        <PropertyRow title="Properti Terpopuler" />
        <PropertyRow title="Rumah Secondary" />
        <PropertyRow title="Sewa Properti" />

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

        <PropertyRow title="Tanah Potensial" />

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


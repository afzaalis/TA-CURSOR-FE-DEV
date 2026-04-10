import Image from "next/image";
import PropertyCardKontekstual, {
  type PropertyData,
} from "@/components/property/property-card-kontekstual";
import SearchBarFilteringKontekstual from "@/components/SearchBarFiltering-kontekstual";

const baseProperty: PropertyData = {
  id: "prop-001",
  isPromoted: true,
  price: 700_000_000,
  status: "Primary",
  title: "Perumahan Cherry Field Tipe A",
  location: {
    city: "Bandung Kota",
    district: "Antapani",
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
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1000&q=80",
  installmentBadges: ["6,8 Jt/bln (15 th)", "9,2 Jt/bln (10 th)"],
};

const sectionTitles = [
  "Properti Terpopuler",
  "Rekomendasi Perumahan",
  "Rumah Secondary",
  "Sewa Properti",
  "Tanah Potensial",
];

function createMockProperties(prefix: string, count: number): PropertyData[] {
  return Array.from({ length: count }, (_, i) => ({
    ...baseProperty,
    id: `${prefix}-${i + 1}`,
    title: `${baseProperty.title} ${String.fromCharCode(65 + (i % 5))}`,
    price: baseProperty.price + i * 25_000_000,
    location: {
      city: i % 2 === 0 ? "Bandung Kota" : "Kab. Bandung",
      district: i % 2 === 0 ? "Antapani" : "Cileunyi",
    },
    imageSrc:
      i % 2 === 0
        ? "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1000&q=80"
        : "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=80",
  }));
}

export default function HomepageSederhana() {
  const sections = sectionTitles.map((title, idx) => ({
    title,
    items: createMockProperties(`sec-${idx + 1}`, 5),
  }));

  return (
    <main className="flex-1">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0E7AC5] via-[#4BB2EA] to-[#DDF3FF]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center px-4 pb-14 pt-8 sm:px-6 md:pb-20 lg:px-10">
          <h1 className="max-w-3xl text-center text-3xl font-bold leading-tight text-white drop-shadow md:text-4xl">
            Temukan Hunian Impian Anda
          </h1>
          <p className="mt-2 text-center text-lg font-semibold text-[#FFD54A] md:text-2xl">
            di Lokasi Terbaik
          </p>

          <div className="mt-6 w-full max-w-[760px]">
            <SearchBarFilteringKontekstual />
          </div>

          <div className="mt-6 grid w-full max-w-[860px] grid-cols-4 gap-2 rounded-2xl bg-white/90 p-3 shadow-md sm:grid-cols-8">
            {["Cari", "Agen", "Perumahan", "Peta", "KPR", "Diskusi", "Seeri", "Lainnya"].map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  className="rounded-lg border border-[#E5E7EB] bg-white px-2 py-2 text-xs font-medium text-[#1957A0] transition hover:bg-[#F8FAFC]"
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] space-y-10 px-4 py-8 sm:px-6 lg:px-10">
        {sections.map((section) => (
          <div key={section.title} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold uppercase tracking-[0.14em] text-zinc-700">
                {section.title}
              </h2>
              <button
                type="button"
                className="text-xs font-semibold uppercase tracking-wider text-[#1957A0] hover:underline"
              >
                Lihat Semua
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {section.items.map((property, idx) => (
                <PropertyCardKontekstual
                  key={property.id}
                  data={property}
                  activeImageIndex={idx % 3}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="relative overflow-hidden rounded-2xl bg-[#0B4C89]">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80"
            alt="Banner promosi Seerumah"
            width={1600}
            height={420}
            className="h-44 w-full object-cover opacity-45 sm:h-56"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-6 text-white sm:px-10">
            <p className="text-2xl font-bold sm:text-3xl">
              Terpercaya dan Terpakai oleh Ribuan Agen Properti
            </p>
            <p className="mt-2 text-sm text-white/90 sm:text-base">
              Akses pasar lebih luas dengan fitur unggulan Seerumah.
            </p>
            <button
              type="button"
              className="mt-5 w-fit rounded-lg bg-[#FFD54A] px-4 py-2 text-sm font-semibold text-[#1E293B] transition hover:brightness-95"
            >
              Mulai Sekarang
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}


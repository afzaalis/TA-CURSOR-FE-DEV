import { type PropertyData } from "@/components/property/property-card-kontekstual";

export const MOCK_HOMEPAGE_CARDS: PropertyData[] = Array.from({ length: 6 }, (_, i) => ({
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
  imageSrc: "/images/dummyrumahasli.png",
  installmentBadges: ["8,2 Jt/bln", "5 thn"],
}));

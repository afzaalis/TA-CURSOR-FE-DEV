import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarKontekstual from "@/components/navbar-kontekstual";
import PropertyCard from "@/components/property-card";
import PropertiCardTerstruktur from "@/components/properti-card-terstruktur";
import PropertyCardKontekstual, {
  type PropertyData,
  formatPropertyPriceIdr,
} from "@/components/property/property-card-kontekstual";
import SearchBarFiltering from "@/components/SearchBarFiltering";
import SearchBarFilteringKontekstual from "@/components/SearchBarFiltering-kontekstual";
import SearchBarFilteringTerstruktur from "@/components/SearchBarFiltering-terstruktur";
import NavbarTerstruktur from "@/components/navbar-terstruktur";


const mockProperty: PropertyData = {
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
    landArea: "XX m²",
    buildingArea: "XX m²",
  },
  agent: {
    name: "Agen Demo",
    photo: "/images/logo.png",
  },
  imageSrc:
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
  installmentBadges: ["X Jt/bln (X th)", "X Jt/bln (X th)"],
};

/** Data sama untuk PropertyCard & PropertiCardTerstruktur (uncomment di bawah untuk melihat). */
const mockFlatCardProps = {
  imageSrc: mockProperty.imageSrc,
  imageAlt: mockProperty.title,
  priceLabel: formatPropertyPriceIdr(mockProperty.price),
  installmentBadges: mockProperty.installmentBadges,
  title: mockProperty.title,
  location: `${mockProperty.location.city}, ${mockProperty.location.district}`,
  landArea: mockProperty.facilities.landArea,
  buildingArea: mockProperty.facilities.buildingArea,
  bedrooms: String(mockProperty.facilities.bed),
  bathrooms: String(mockProperty.facilities.bath),
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans">
      {/* Navbar: versi awal (opsional) */}
      {/* <Navbar /> */}

      {/* Navbar: versi terstruktur (opsional; referensi) */}
      {/* <NavbarTerstruktur /> */}

      {/* Navbar: versi kontekstual (aktif) */}
      <NavbarKontekstual />

      <main className="flex flex-1 flex-col items-center justify-center gap-12 px-4 py-20 bg-gradient-to-b from-blue-50/50 to-white">
        {/* --- Search bar: versi sebelumnya — uncomment untuk melihat --- */}
        {/* <SearchBarFiltering /> */}

        {/* --- Search bar: versi kontekstual (aktif; props onSearch / onModeChange opsional) --- */}
        <SearchBarFilteringKontekstual />

        {/* --- Search bar: versi terstruktur — uncomment import + baris di atas untuk bandingkan --- */}
        {/* <SearchBarFilteringTerstruktur /> */}

        {/* --- Kartu properti: PropertyCard (versi awal) — uncomment untuk melihat --- */}
        {/* <PropertyCard {...mockFlatCardProps} /> */}

        {/* --- Kartu properti: PropertiCardTerstruktur — uncomment untuk melihat --- */}
        {/* <PropertiCardTerstruktur {...mockFlatCardProps} totalImages={5} activeImageIndex={0} /> */}

        {/* --- Kartu properti: PropertyCardKontekstual (aktif) --- */}
        <PropertyCardKontekstual data={mockProperty} activeImageIndex={0} />
      </main>
      <Footer />
    </div>
  );
}

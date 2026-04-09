import Footer from "@/components/footer";
import PropertyCardKontekstual, {
  type PropertyData,
} from "@/components/property/property-card-kontekstual";
import SearchBarFiltering from "@/components/SearchBarFiltering";

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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans">
      <main className="flex flex-1 flex-col items-center justify-center gap-12 px-4 py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <SearchBarFiltering />
        <PropertyCardKontekstual data={mockProperty} activeImageIndex={0} />
      </main>
      <Footer />
    </div>
  );
}

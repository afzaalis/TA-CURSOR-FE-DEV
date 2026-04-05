import Footer from "@/components/footer";
import PropertyCard from "@/components/property-card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <PropertyCard
          imageSrc="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80"
          priceLabel="Rp. 700 Juta"
          title="Perumahan Cherry Field Tipe A"
          location="Bandung Kota, Antapani"
          landArea="XX m²"
          buildingArea="XX m²"
          bedrooms="XX"
          bathrooms="XX"
        />
      </main>
      <Footer />
    </div>
  );
}

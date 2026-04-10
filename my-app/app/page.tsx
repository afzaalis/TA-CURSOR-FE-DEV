import Footer from "@/components/footer";
import HomepageSederhana from "@/components/homepage-sederhana";
import HomepageTerstruktur from "@/components/homepage-terstruktur";
import NavbarKontekstual from "@/components/navbar-kontekstual";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F8FA] font-sans text-zinc-800">
      <NavbarKontekstual transparentOnTop />
      {/* <NavbarKontekstual  /> */}

      {/* Homepage sederhana */}
      {/* <HomepageSederhana /> */}

      {/* Homepage terstruktur (aktif) */}
      <HomepageTerstruktur />
      <Footer />
    </div>
  );
}

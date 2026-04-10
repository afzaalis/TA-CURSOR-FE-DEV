import Footer from "@/components/footer";
import HomepageSederhana from "@/components/homepage-sederhana";
import HomepageKontekstual from "@/components/homepage-kontekstual";
import NavbarKontekstual from "@/components/navbar-kontekstual";
import HomepageTerstruktur from "@/components/homepage-terstruktur";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F8FA] font-sans text-zinc-800">
      <NavbarKontekstual transparentOnTop />
      {/* <NavbarKontekstual  /> */}

      {/* Homepage sederhana */}
      {/* <HomepageSederhana /> */}

      {/* Homepage kontekstual — varian prompt Figma (aktif) */}
      <HomepageKontekstual />
      {/* <HomepageTerstruktur/> */}
      <Footer />
    </div>
  );
}

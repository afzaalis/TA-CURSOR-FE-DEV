import Footer from "@/components/footer";
import HomepageSederhana from "@/components/homepage-sederhana";
import HomepageKontekstual, { cards } from "@/components/homepage-kontekstual";
import NavbarKontekstual from "@/components/navbar-kontekstual";
import HomepageTerstruktur from "@/components/homepage-terstruktur";
import PropertyCardKontekstual from "@/components/property/property-card-kontekstual";
import PropertyCard from "@/components/property-card";
import PropertiCardTerstruktur from "@/components/properti-card-terstruktur";
import SearchBarFiltering from "@/components/SearchBarFiltering";
import SearchBarFilteringTerstruktur from "@/components/SearchBarFiltering-terstruktur";
import SearchBarFilteringKontekstual from "@/components/SearchBarFiltering-kontekstual";
import Navbar from "@/components/navbar";
import NavbarTerstruktur from "@/components/navbar-terstruktur";

import DetailPropertyPage from "@/components/detailpropertyPage";
import DetailPropertiTerstruktur from "@/components/detailproperti-terstruktur";
import DetailPropertyPageKontekstual, { MOCK_DETAIL } from "@/components/detailpropertypage-kontekstual";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F8FA] font-sans text-zinc-800">
      {/* <NavbarKontekstual transparentOnTop /> */}
      {/* <NavbarKontekstual /> */}
      {/* <Navbar /> */}
      {/* <NavbarTerstruktur /> */}
      {/* <div className="flex items-center justify-center p-10">
        <PropertyCardKontekstual data={cards[0]} />
      </div> */}

      {/* <SearchBarFiltering /> */}
      {/* <SearchBarFilteringTerstruktur /> */}
      {/* <SearchBarFilteringKontekstual /> */}

      {/* Homepage sederhana */}
      {/* <HomepageSederhana /> */}
      {/* <PropertyCard
        imageSrc="/images/dummyrumahasli.png"
        priceLabel="Rp 500.000.000"
        title="Rumah Minimalis Modern"
        location="Tebet, Jakarta Selatan"
        landArea="120"
        buildingArea="90"
        bedrooms="3"
        bathrooms="2"
      /> */}

      {/* <div className="flex items-center justify-center p-10">
        <PropertiCardTerstruktur
          imageSrc="/images/dummyrumahasli.png"
          priceLabel="700 JUTA"
          title="Rumah Minimalis Modern"
          location="Tebet, Jakarta Selatan"
          landArea="120"
          buildingArea="90"
          bedrooms="3"
          bathrooms="2"
        />
      </div> */}

      {/* Homepage kontekstual — varian prompt Figma (aktif) */}
      {/* <HomepageKontekstual /> */}
      {/* <HomepageTerstruktur /> */}

      {/* <DetailPropertyPage /> */}
      {/* <DetailPropertiTerstruktur /> */}
      <DetailPropertyPageKontekstual data={MOCK_DETAIL} />

      {/* <Footer /> */}
    </div>
  );
}

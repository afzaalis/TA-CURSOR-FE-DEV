import PropertyCardKontekstual from "@/components/property/property-card-kontekstual";
import SectionHeader from "./homepage-section-header";
import { type PropertyRowProps } from "./homepage-kontekstual.types";

export default function PropertyRow({ title, items }: PropertyRowProps) {
  return (
    <section className="mb-12">
      <SectionHeader title={title} />
      <div className="overflow-x-auto pb-2">
        <div className="grid min-w-[1260px] grid-cols-6 gap-4">
          {items.map((card) => (
            <div key={`${title}-${card.id}`} className="w-[196px]">
              <PropertyCardKontekstual data={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

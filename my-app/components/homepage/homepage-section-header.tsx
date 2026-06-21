import { ChevronLeft, ChevronRight } from "lucide-react";
import { Poppins } from "next/font/google";
import { type SectionHeaderProps } from "./homepage-kontekstual.types";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2
        className={`${poppins.className} text-[25px] font-semibold uppercase leading-tight tracking-[0.06em] text-[#555555]`}
      >
        {title}
      </h2>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label={`Sebelumnya ${title}`}
          className="rounded-full border border-[#E2E8F0] p-1.5 text-[#64748B] transition hover:bg-[#F8FAFC]"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </button>
        <button
          type="button"
          aria-label={`Berikutnya ${title}`}
          className="rounded-full border border-[#E2E8F0] p-1.5 text-[#64748B] transition hover:bg-[#F8FAFC]"
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}

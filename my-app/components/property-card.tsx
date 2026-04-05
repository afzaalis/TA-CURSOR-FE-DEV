import Image from "next/image";
import { FaRegHeart, FaMapMarkerAlt, FaBed, FaBath } from "react-icons/fa";
import { HiArrowsExpand } from "react-icons/hi";

export type PropertyCardProps = {
  imageSrc: string;
  imageAlt?: string;
  priceLabel: string;
  installmentBadges?: string[];
  title: string;
  location: string;
  landArea: string;
  buildingArea: string;
  bedrooms: string;
  bathrooms: string;
};

const defaultBadges = ["X Jt/bln (X th)", "X Jt/bln (X th)"];

export default function PropertyCard({
  imageSrc,
  imageAlt = "Foto properti",
  priceLabel,
  installmentBadges = defaultBadges,
  title,
  location,
  landArea,
  buildingArea,
  bedrooms,
  bathrooms,
}: PropertyCardProps) {
  return (
    <article
      className="w-full max-w-[340px] overflow-hidden rounded-[18px] bg-white font-sans shadow-[0_8px_24px_rgba(15,23,42,0.12)]"
      aria-label={title}
    >
      {/* Image + overlay UI */}
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 340px"
          priority
        />
        <div className="pointer-events-none absolute inset-0 rounded-t-[18px] bg-gradient-to-t from-black/25 to-transparent" />

        <button
          type="button"
          aria-label="Tambah ke favorit"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-[2px] transition hover:bg-black/35"
        >
          <FaRegHeart className="h-5 w-5 drop-shadow-sm" strokeWidth={0.5} />
        </button>

        <div
          className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5"
          aria-hidden
        >
          <span className="h-2 w-5 rounded-full bg-white shadow-sm" />
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="h-2 w-2 rounded-full bg-white/85 shadow-sm"
            />
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="px-4 pb-4 pt-3">
        <p className="text-[22px] font-bold leading-tight text-[#1957A0]">
          {priceLabel}
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {installmentBadges.map((text, i) => (
            <span
              key={`${text}-${i}`}
              className="rounded-full bg-[#1957A0] px-2.5 py-1 text-[11px] font-medium leading-none text-white"
            >
              {text}
            </span>
          ))}
        </div>

        <h3 className="mt-3 text-base font-bold leading-snug text-zinc-800">
          {title}
        </h3>

        <p className="mt-1.5 flex items-start gap-1.5 text-xs text-zinc-500">
          <FaMapMarkerAlt className="mt-0.5 shrink-0 text-zinc-400" aria-hidden />
          <span>{location}</span>
        </p>

        <div className="my-3 h-px w-full bg-zinc-200" />

        <div className="grid grid-cols-4 gap-1 text-center text-[11px] font-medium text-zinc-700">
          <div className="flex flex-col items-center gap-1">
            <HiArrowsExpand className="h-4 w-4 text-zinc-600" aria-hidden />
            <span className="leading-tight">LT {landArea}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <HiArrowsExpand className="h-4 w-4 text-zinc-600" aria-hidden />
            <span className="leading-tight">LB {buildingArea}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaBed className="h-4 w-4 text-zinc-600" aria-hidden />
            <span>{bedrooms}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaBath className="h-4 w-4 text-zinc-600" aria-hidden />
            <span>{bathrooms}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

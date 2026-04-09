import Image from "next/image";
import { Poppins } from "next/font/google";
import {
  FaRegHeart,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
} from "react-icons/fa";
import { HiArrowsExpand } from "react-icons/hi";

export type PropertiCardTerstrukturProps = {
  imageSrc: string;
  imageAlt?: string;
  priceLabel: string;
  installmentBadges?: string[];
  totalImages?: number;
  activeImageIndex?: number;
  title: string;
  location: string;
  landArea: string;
  buildingArea: string;
  bedrooms: string;
  bathrooms: string;
};

const defaultBadges = ["X Jt/bln (X th)", "X Jt/bln (X th)"];
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function PropertiCardTerstruktur({
  imageSrc,
  imageAlt = "Foto properti",
  priceLabel,
  installmentBadges = defaultBadges,
  totalImages = 5,
  activeImageIndex = 0,
  title,
  location,
  landArea,
  buildingArea,
  bedrooms,
  bathrooms,
}: PropertiCardTerstrukturProps) {
  const safeTotalImages = Math.max(totalImages, 1);
  const safeActiveIndex = Math.min(
    Math.max(activeImageIndex, 0),
    safeTotalImages - 1,
  );

  return (
    <article
      className={`${poppins.className} h-[241px] w-full max-w-[320px] overflow-hidden rounded-[10px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.10)] sm:w-[207px] sm:max-w-none`}
      aria-label={title}
    >
      <div className="relative h-[131px] w-full overflow-hidden rounded-t-[10px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 207px"
          priority
        />

        <button
          type="button"
          aria-label="Tambah ke favorit"
          className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-transparent text-white"
        >
          <FaRegHeart className="h-3.5 w-3.5" />
        </button>

        <div
          className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1"
          aria-hidden
        >
          {Array.from({ length: safeTotalImages }).map((_, i) => (
            <span
              key={i}
              className={`rounded-full bg-white ${
                i === safeActiveIndex
                  ? "h-[4px] w-[12px] opacity-100"
                  : "h-[4px] w-[4px] opacity-40"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex h-[110px] flex-col justify-between">
        <div className="px-4 pt-3">
          <div className="mb-2">
            <p className="text-[17px] font-bold italic leading-none text-[#1957A0]">
              {priceLabel}
            </p>
            <div className="mt-1 flex items-center gap-1">
              {installmentBadges.map((text, i) => (
                <span
                  key={`${text}-${i}`}
                  className="rounded-[7px] bg-[#1957A0] px-[4px] py-[2px] text-[5px] font-medium leading-none text-white"
                >
                  {text}
                </span>
              ))}
            </div>
          </div>

          <h3
            className="mb-2 text-[10px] font-semibold italic leading-[1.25] text-[#555555]"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {title}
          </h3>

          <p className="flex items-center gap-1 text-[6.5px] font-medium italic leading-none text-[#6A7181]">
            <FaMapMarkerAlt className="h-[7px] w-[7px] shrink-0" aria-hidden />
            <span>{location}</span>
          </p>
        </div>

        <div className="border-t border-[#E6E9EF] px-4 py-2">
          <div className="flex items-center justify-between text-[6px] font-normal leading-none text-[#323232]">
            <span className="flex items-center gap-1">
              <HiArrowsExpand className="h-[7px] w-[7px]" aria-hidden />
              <span className="font-bold">LT {landArea}</span>
            </span>
            <span className="flex items-center gap-1">
              <HiArrowsExpand className="h-[7px] w-[7px]" aria-hidden />
              <span className="font-bold">LB {buildingArea}</span>
            </span>
            <span className="flex items-center gap-1">
              <FaBed className="h-[7px] w-[7px]" aria-hidden />
              <span>{bedrooms}</span>
            </span>
            <span className="flex items-center gap-1">
              <FaBath className="h-[7px] w-[7px]" aria-hidden />
              <span>{bathrooms}</span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

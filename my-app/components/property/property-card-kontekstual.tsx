import Image from "next/image";
import { Poppins } from "next/font/google";
import {
  FaRegHeart,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
} from "react-icons/fa";
import { HiArrowsExpand } from "react-icons/hi";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const defaultInstallmentBadges = ["X Jt/bln (X th)", "X Jt/bln (X th)"];

export type PropertyStatus = "Primary" | "Secondary";

export interface PropertyLocation {
  city: string;
  district: string;
}

export interface PropertyFacilities {
  bed: number;
  bath: number;
  landArea: string;
  buildingArea: string;
}

export interface PropertyAgent {
  name: string;
  photo: string;
}

export interface PropertyData {
  id: string;
  isPromoted: boolean;
  price: number;
  status: PropertyStatus;
  title: string;
  location: PropertyLocation;
  facilities: PropertyFacilities;
  agent: PropertyAgent;
  imageSrc: string;
  installmentBadges?: string[];
}

export interface PropertyCardKontekstualProps {
  data?: PropertyData;
  imageSrc?: string;
  imageAlt?: string;
  priceLabel?: string;
  installmentBadges?: string[];
  totalImages?: number;
  activeImageIndex?: number;
  title?: string;
  location?: string;
  landArea?: string;
  buildingArea?: string;
  bedrooms?: string;
  bathrooms?: string;
  isLoading?: boolean;
}

export function formatPropertyPriceIdr(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function resolveCardFields(
  props: PropertyCardKontekstualProps,
): {
  imageSrc: string;
  imageAlt: string;
  priceLabel: string;
  installmentBadges: string[];
  title: string;
  locationLine: string;
  landArea: string;
  buildingArea: string;
  bedrooms: string;
  bathrooms: string;
} {
  const { data } = props;
  const installmentBadges =
    props.installmentBadges ??
    data?.installmentBadges ??
    defaultInstallmentBadges;

  if (data) {
    const locationLine = `${data.location.city}, ${data.location.district}`;
    return {
      imageSrc: props.imageSrc ?? data.imageSrc,
      imageAlt: props.imageAlt ?? data.title,
      priceLabel:
        props.priceLabel ?? formatPropertyPriceIdr(data.price),
      installmentBadges,
      title: props.title ?? data.title,
      locationLine: props.location ?? locationLine,
      landArea: props.landArea ?? data.facilities.landArea,
      buildingArea: props.buildingArea ?? data.facilities.buildingArea,
      bedrooms: props.bedrooms ?? String(data.facilities.bed),
      bathrooms: props.bathrooms ?? String(data.facilities.bath),
    };
  }

  return {
    imageSrc: props.imageSrc ?? "",
    imageAlt: props.imageAlt ?? "Foto properti",
    priceLabel: props.priceLabel ?? "",
    installmentBadges,
    title: props.title ?? "",
    locationLine: props.location ?? "",
    landArea: props.landArea ?? "",
    buildingArea: props.buildingArea ?? "",
    bedrooms: props.bedrooms ?? "",
    bathrooms: props.bathrooms ?? "",
  };
}

export default function PropertyCardKontekstual(
  props: PropertyCardKontekstualProps,
) {
  const {
    totalImages = 6,
    activeImageIndex = 0,
    isLoading = false,
  } = props;

  if (isLoading) {
    return <PropertyCardKontekstualSkeleton />;
  }

  const fields = resolveCardFields(props);
  const safeTotalImages = Math.max(totalImages, 1);
  const safeActiveIndex = Math.min(
    Math.max(activeImageIndex, 0),
    safeTotalImages - 1,
  );

  return (
    <article
      className={`${poppins.className} group h-[241px] w-full max-w-[320px] overflow-hidden rounded-[10px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.10)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] sm:w-[207px] sm:max-w-none`}
      aria-label={fields.title}
    >
      <div className="relative h-[131px] w-full overflow-hidden rounded-t-[10px]">
        <Image
          src={fields.imageSrc}
          alt={fields.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 207px"
          priority
        />

        <button
          type="button"
          aria-label="Tambah ke wishlist"
          className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-transparent text-white"
        >
          <FaRegHeart className="h-3.5 w-3.5 drop-shadow-sm" />
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
              {fields.priceLabel}
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-1">
              {fields.installmentBadges.map((text, i) => (
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
            {fields.title}
          </h3>

          <p className="flex items-center gap-1 text-[6.5px] font-medium italic leading-none text-[#6A7181]">
            <FaMapMarkerAlt className="h-[7px] w-[7px] shrink-0" aria-hidden />
            <span>{fields.locationLine}</span>
          </p>
        </div>

        <div className="border-t border-[#E6E9EF] px-4 py-2">
          <div className="flex items-center justify-between text-[6px] font-normal leading-none text-[#323232]">
            <span className="flex items-center gap-1">
              <HiArrowsExpand className="h-[7px] w-[7px] shrink-0" aria-hidden />
              <span>
                <span className="font-bold">LT</span> {fields.landArea}
              </span>
            </span>
            <span className="flex items-center gap-1">
              <HiArrowsExpand className="h-[7px] w-[7px] shrink-0" aria-hidden />
              <span>
                <span className="font-bold">LB</span> {fields.buildingArea}
              </span>
            </span>
            <span className="flex items-center gap-1">
              <FaBed className="h-[7px] w-[7px] shrink-0" aria-hidden />
              <span>{fields.bedrooms}</span>
            </span>
            <span className="flex items-center gap-1">
              <FaBath className="h-[7px] w-[7px] shrink-0" aria-hidden />
              <span>{fields.bathrooms}</span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export function PropertyCardKontekstualSkeleton() {
  return (
    <div
      className={`${poppins.className} h-[241px] w-full max-w-[320px] animate-pulse overflow-hidden rounded-[10px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.10)] sm:w-[207px] sm:max-w-none`}
      role="status"
      aria-label="Memuat kartu properti"
    >
      <div className="h-[131px] w-full rounded-t-[10px] bg-zinc-200" />
      <div className="flex h-[110px] flex-col justify-between px-4 pt-3">
        <div className="space-y-2">
          <div className="h-4 w-28 rounded bg-zinc-200" />
          <div className="flex gap-1">
            <div className="h-3 w-16 rounded-[7px] bg-zinc-200" />
            <div className="h-3 w-16 rounded-[7px] bg-zinc-200" />
          </div>
          <div className="h-3 w-full rounded bg-zinc-200" />
          <div className="h-2 w-3/4 rounded bg-zinc-200" />
        </div>
        <div className="border-t border-[#E6E9EF] py-2">
          <div className="flex justify-between">
            <div className="h-2 w-10 rounded bg-zinc-200" />
            <div className="h-2 w-10 rounded bg-zinc-200" />
            <div className="h-2 w-6 rounded bg-zinc-200" />
            <div className="h-2 w-6 rounded bg-zinc-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

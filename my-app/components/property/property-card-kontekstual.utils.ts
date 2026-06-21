import type {
  PropertyCardKontekstualProps,
  ResolvedCardFields,
} from "./property-card-kontekstual.types";

export const defaultInstallmentBadges = ["X Jt/bln (X th)", "X Jt/bln (X th)"];

export function formatPropertyPriceIdr(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

/** Harga singkat: Rp 700 Juta / Rp 1,5 Miliar (hindari deretan nol). */
export function formatPropertyPriceCompact(value: number): string {
  if (!Number.isFinite(value) || value < 0) return "—";
  const rounded = Math.round(value);
  const juta = rounded / 1_000_000;
  if (juta >= 1000) {
    const miliar = juta / 1000;
    const formatted =
      miliar % 1 === 0
        ? new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 }).format(
            miliar,
          )
        : new Intl.NumberFormat("id-ID", {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          }).format(miliar);
    return `Rp ${formatted} Miliar`;
  }
  const formatted =
    juta % 1 === 0
      ? new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 }).format(juta)
      : new Intl.NumberFormat("id-ID", {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }).format(juta);
  return `Rp ${formatted} Juta`;
}

export function resolveCardFields(
  props: PropertyCardKontekstualProps,
): ResolvedCardFields {
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
        props.priceLabel ?? formatPropertyPriceCompact(data.price),
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

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

export interface ResolvedCardFields {
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
}

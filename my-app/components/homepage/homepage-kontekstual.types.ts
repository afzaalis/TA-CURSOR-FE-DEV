import { type PropertyData } from "@/components/property/property-card-kontekstual";

export interface HomepageKontekstualProps {
  /**
   * Judul utama pada hero section
   */
  heroTitle?: string;
  /**
   * Subjudul (highlight kuning) pada hero section
   */
  heroSubtitle?: string;
  /**
   * Deskripsi hero section
   */
  heroDescription?: string;
  /**
   * Kumpulan data properti untuk dirender di berbagai baris (row)
   */
  propertyData?: PropertyData[];
}

export interface SectionHeaderProps {
  /**
   * Teks judul untuk header seksi
   */
  title: string;
}

export interface PropertyRowProps {
  /**
   * Teks judul untuk row ini
   */
  title: string;
  /**
   * Array data properti yang akan dirender dalam row
   */
  items: PropertyData[];
}

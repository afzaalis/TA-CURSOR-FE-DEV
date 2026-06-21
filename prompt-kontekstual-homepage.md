# Prompt Kontekstual — Homepage (Variasi 3)

> Dokumen ini berisi prompt lengkap yang digunakan untuk menghasilkan implementasi `homepage-kontekstual.tsx` dan file pendukungnya. Prompt menggabungkan **konteks proyek** (arsitektur & integrasi) dan **spesifikasi desain** (selaras Figma & hasil kode V3).

---

## Prompt (salin ke Cursor AI)

```
Buat komponen Homepage Seerumah (Variasi Kontekstual) pada proyek Next.js App Router yang sudah ada.

---

### A. KONTEKS PROYEK

**Stack teknologi:**
- Next.js (App Router), React 19, TypeScript (strict)
- Tailwind CSS (utility-first, tanpa custom CSS file baru)
- Font: Inter (hero/body), Poppins (section header) via `next/font/google`
- Icons: lucide-react (ChevronLeft, ChevronRight)
- Image: `next/image`

**Struktur file yang diharapkan (modular):**

```
my-app/components/
├── homepage-kontekstual.tsx          ← entry point, re-export types & mock data
└── homepage/
    ├── homepage-kontekstual.types.ts ← HomepageKontekstualProps, SectionHeaderProps, PropertyRowProps
    ├── homepage-kontekstual.utils.ts ← MOCK_HOMEPAGE_CARDS (PropertyData[])
    ├── homepage-section-header.tsx   ← judul seksi + tombol navigasi carousel
    └── homepage-property-row.tsx     ← baris horizontal kartu properti
```

**Integrasi komponen existing (WAJIB pakai, jangan buat ulang):**
- `@/components/property/property-card-kontekstual` — kartu properti (`PropertyCardKontekstual`, type `PropertyData`)
- `@/components/SearchBarFiltering-terstruktur` — search bar di hero section

**Konvensi kode tim:**
- Nama file: kebab-case
- Nama komponen & interface: PascalCase
- Variabel & fungsi: camelCase
- Export props interface secara eksplisit
- Satu file satu tanggung jawab (UI terpisah dari mock data & types)
- Tidak ada inline style (`style={{}}`); gunakan Tailwind utility (termasuk `line-clamp-2` jika perlu)
- Gunakan responsive classes (`sm:`, `lg:`) di layout utama

**Props interface `HomepageKontekstualProps`:**
- `heroTitle?: string` — default: `"Temukan Hunian Impian Anda"`
- `heroSubtitle?: string` — default: `"di Lokasi Terbaik"`
- `heroDescription?: string` — default: `"Cari dari beragam listing properti terbaik dengan filter yang interaktif dan akses layanan sewa, jual, hingga pasang iklan lebih cepat."`
- `propertyData?: PropertyData[]` — default: `MOCK_HOMEPAGE_CARDS` (6 item)

**Re-export dari entry point:**
- `export type { HomepageKontekstualProps }`
- `export const cards = MOCK_HOMEPAGE_CARDS` (agar `app/page.tsx` tidak putus dependensi)

**Mock data `MOCK_HOMEPAGE_CARDS`:**
Array 6 item `PropertyData` dengan pola:
- `id`: `prop-1` … `prop-6`
- `price`: 700_000_000 + i * 15_000_000
- `status`: `"Primary"`
- `title`: `"Perumahan Cherry Field Tipe A"`
- `location.city`: bergantian `"Bandung Kota"` / `"Kab. Bandung"`
- `location.district`: bergantian `"Antapani"` / `"Cileunyi"`
- `facilities`: bed 3, bath 2, landArea `"120 m²"`, buildingArea `"90 m²"`
- `agent`: name `"Agen Demo"`, photo `"/images/logo.png"`
- `imageSrc`: `"/images/dummyrumahasli.png"`
- `installmentBadges`: `["8,2 Jt/bln", "5 thn"]`

---

### B. SPESIFIKASI DESAIN (Figma-aligned)

#### B1. Layout Halaman

| Elemen | Spesifikasi |
|--------|-------------|
| Root | `<main className="flex-1 bg-white">` + font Inter |
| Container konten | `max-w-[1440px] mx-auto px-5 lg:px-10` |
| Area konten bawah hero | `py-12` |

#### B2. Hero Section

| Elemen | Spesifikasi |
|--------|-------------|
| Background | `bg-[linear-gradient(180deg,#0080CF_25%,#5BADE0_63%,#FFFFFF_100%)]` |
| Padding | `pt-[104px] pb-[60px]` |
| Judul utama (h1) | `text-center text-[40px] font-bold leading-tight text-white` |
| Subjudul highlight | `text-center text-[32px] font-bold leading-tight text-[#FDE047]` |
| Deskripsi | `mx-auto mt-3 max-w-[600px] text-center text-sm font-normal text-white/90` |
| Wrapper search bar | `mx-auto mt-6 w-full max-w-[760px]` → render `<SearchBarFilteringTerstruktur />` |

**Copy default hero:**
- heroTitle: `Temukan Hunian Impian Anda`
- heroSubtitle: `di Lokasi Terbaik`
- heroDescription: `Cari dari beragam listing properti terbaik dengan filter yang interaktif dan akses layanan sewa, jual, hingga pasang iklan lebih cepat.`

#### B3. Section Header (`homepage-section-header.tsx`)

| Elemen | Spesifikasi |
|--------|-------------|
| Font | Poppins weight 600 via `next/font/google` |
| Layout | `mb-6 flex items-center justify-between` |
| Judul seksi (h2) | `text-[25px] font-semibold uppercase leading-tight tracking-[0.06em] text-[#555555]` |
| Tombol prev/next | `rounded-full border border-[#E2E8F0] p-1.5 text-[#64748B] transition hover:bg-[#F8FAFC]` |
| Icon tombol | `ChevronLeft` / `ChevronRight` dari lucide-react, `h-4 w-4` |
| Aria | `aria-label="Sebelumnya {title}"` / `"Berikutnya {title}"` |

#### B4. Property Row (`homepage-property-row.tsx`)

| Elemen | Spesifikasi |
|--------|-------------|
| Section wrapper | `mb-12` |
| Scroll container | `overflow-x-auto pb-2` |
| Grid kartu | `grid min-w-[1260px] grid-cols-6 gap-4` |
| Wrapper per kartu | `w-[196px]` |
| Kartu | `<PropertyCardKontekstual data={card} />` |
| Key | `` `${title}-${card.id}` `` |

#### B5. Urutan Section Homepage

Render berurutan di dalam container konten:

1. **PropertyRow** — title: `"Properti Terpopuler"`
2. **PropertyRow** — title: `"Rumah Secondary"`
3. **PropertyRow** — title: `"Sewa Properti"`
4. **Banner testimonial** — section `mb-12`:
   - `src="/images/testimonial.png"`
   - `alt="Banner terpercaya seerumah"`
   - `width={2000} height={540}`
   - `className="h-auto w-full rounded-2xl object-cover"`
5. **PropertyRow** — title: `"Tanah Potensial"`
6. **Banner KPR** — section `mb-12`:
   - `src="/images/Simulasi-KPR.png"`
   - `alt="Banner simulasi KPR Seerumah"`
   - `width={2000} height={540}`
   - `className="h-auto w-full rounded-2xl object-cover"`

#### B6. Palet Warna Utama

| Token | Hex | Penggunaan |
|-------|-----|------------|
| Primary blue (hero) | `#0080CF` | Gradient hero (25%) |
| Light blue | `#5BADE0` | Gradient hero (63%) |
| Highlight yellow | `#FDE047` | Subjudul hero |
| Section title gray | `#555555` | Judul baris properti |
| Border muted | `#E2E8F0` | Border tombol carousel |
| Icon muted | `#64748B` | Warna icon chevron |
| Hover bg | `#F8FAFC` | Hover tombol carousel |

#### B7. Typography

| Area | Font | Weight | Size |
|------|------|--------|------|
| Hero & body | Inter | 400, 700 | h1: 40px, subtitle: 32px, desc: 14px (text-sm) |
| Section header | Poppins | 600 | 25px, uppercase, tracking 0.06em |

#### B8. Responsive

| Breakpoint | Perilaku |
|------------|----------|
| Default | Container `px-5` |
| `lg:` | Container `px-10` |
| Property row | Horizontal scroll (`overflow-x-auto`); grid min-width 1260px |

---

### C. ATURAN IMPLEMENTASI

1. Jangan hardcode data di komponen UI — mock data di `.utils.ts`, types di `.types.ts`
2. `PropertyRow` menerima props `{ title, items: PropertyData[] }`
3. `SectionHeader` menerima props `{ title: string }`
4. Homepage menerima semua teks hero & data properti via props (dengan default)
5. Tidak ada data-fetching; mock data statis saja
6. Pastikan lolos `tsc --noEmit` dan `eslint`
7. Jangan ubah komponen `PropertyCardKontekstual` atau `SearchBarFilteringTerstruktur` — hanya import & gunakan

Implementasikan sesuai spesifikasi di atas.
```

---

## Mapping Prompt → Hasil Kode V3

| Aspek Prompt | File Hasil |
|--------------|------------|
| Entry point + hero | `my-app/components/homepage-kontekstual.tsx` |
| Types & props | `my-app/components/homepage/homepage-kontekstual.types.ts` |
| Mock data | `my-app/components/homepage/homepage-kontekstual.utils.ts` |
| Section header UI | `my-app/components/homepage/homepage-section-header.tsx` |
| Property row UI | `my-app/components/homepage/homepage-property-row.tsx` |
| Kartu properti | `my-app/components/property/property-card-kontekstual.tsx` (existing) |
| Search bar hero | `my-app/components/SearchBarFiltering-terstruktur.tsx` (existing) |

---

## Perbedaan Prompt Kontekstual vs Terstruktur (Homepage)

| Aspek | Prompt Terstruktur | Prompt Kontekstual (ini) |
|-------|-------------------|--------------------------|
| Spesifikasi visual | Ada (ukuran, warna, layout) | Ada (sama, section B) |
| Konteks proyek | Minimal | Lengkap (struktur file, integrasi komponen, konvensi tim) |
| Modularitas | Monolitik 1 file (~144 baris) | Terpisah 5 file di folder `homepage/` |
| Props interface | Tidak ada (hardcoded copy) | `HomepageKontekstualProps` + sub-component props |
| Mock data | Inline di file utama | File `.utils.ts` terpisah |
| Re-export | Tidak ada | Types & `cards` di-export untuk `app/page.tsx` |

---

*Dokumen ini diselaraskan dengan implementasi V3 per 21 Juni 2026.*

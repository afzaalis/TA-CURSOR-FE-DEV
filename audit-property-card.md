# Audit Struktur Kode: Property Card (3 Variasi)

**Tanggal audit:** 21 Juni 2026  
**Metode:** Read-only, berdasarkan checklist 16 indikator  
**Komponen:** Property Card  
**Project:** `my-app/` (Next.js App Router)

---

## Konteks

Tiga variasi implementasi komponen Property Card dihasilkan dari 3 jenis prompt berbeda:

| Variasi | Label Prompt | File |
|---------|--------------|------|
| Variasi 1 | Sederhana | `my-app/components/property-card.tsx` (121 baris) |
| Variasi 2 | Terstruktur | `my-app/components/properti-card-terstruktur.tsx` (152 baris) |
| Variasi 3 | Kontekstual | `my-app/components/property/property-card-kontekstual.tsx` (+ `.types.ts`, `.utils.ts`, `.skeleton.tsx`) |

---

## 1. Tabel Ringkasan (16 × 3)

| # | Indikator | V1 Sederhana | V2 Terstruktur | V3 Kontekstual |
|---|-----------|:------------:|:--------------:|:--------------:|
| 1 | Nama file kebab-case | Ya | Ya | Ya |
| 2 | Lokasi sesuai struktur Next.js (App Router) | Ya | Ya | Ya |
| 3 | Naming convention konsisten di seluruh file | Ya | Ya | Ya |
| 4 | Ada props interface | Ya | Ya | Ya |
| 5 | Props interface di-export eksplisit | Ya | Ya | Ya |
| 6 | Komponen reusable (data via props) | Ya | Ya | Ya |
| 7 | Tidak ada implicit any | Ya | Ya | Ya |
| 8 | Semua props bertipe eksplisit | Ya | Ya | Ya |
| 9 | Lolos `tsc --noEmit` | Ya | Ya | Ya |
| 10 | Utility-first Tailwind | Ya | Ya | Ya |
| 11 | Tidak ada inline style | Ya | Tidak | Ya |
| 12 | Ada responsive classes (`sm:`, `md:`, dst.) | Tidak | Ya | Ya |
| 13 | Satu komponen satu tanggung jawab | Ya | Ya | Ya |
| 14 | File di bawah 150–200 baris | Ya | Ya | Ya |
| 15 | Format penulisan konsisten | Ya | Ya | Ya |
| 16 | Penamaan variabel konsisten (camelCase) | Ya | Ya | Ya |

---

## 2. Alasan per Indikator

### Variasi 1 — `property-card.tsx`

| # | Jawaban | Alasan (1 kalimat) |
|---|---------|-------------------|
| 1 | Ya | Nama file `property-card.tsx` memakai kebab-case. |
| 2 | Ya | Berada di `components/`, lokasi standar komponen reusable App Router. |
| 3 | Ya | `PropertyCard`, `PropertyCardProps`, dan variabel camelCase konsisten dalam file. |
| 4 | Ya | `PropertyCardProps` didefinisikan sebagai type alias (L5–16). |
| 5 | Ya | `export type PropertyCardProps` diekspor secara eksplisit (L5). |
| 6 | Ya | Semua konten via props; default image/badge bukan data halaman spesifik. |
| 7 | Ya | Parameter terdefinisi via interface; tidak ada `any`. |
| 8 | Ya | Setiap prop punya tipe eksplisit di `PropertyCardProps`. |
| 9 | Ya | `tsc --noEmit` project lulus tanpa error terkait file ini. |
| 10 | Ya | Semua styling via `className` Tailwind utility. |
| 11 | Ya | Tidak ada atribut `style={{}}` di file. |
| 12 | Tidak | Tidak ada breakpoint Tailwind (`sm:`, `md:`, `lg:`); hanya `sizes` pada `<Image>`. |
| 13 | Ya | Hanya UI rendering, tanpa data-fetching atau business logic. |
| 14 | Ya | File 121 baris, di bawah batas 200 baris. |
| 15 | Ya | Indentasi, semicolon, dan struktur JSX konsisten. |
| 16 | Ya | `defaultBadges`, `imageSrc`, dll. semua camelCase. |

### Variasi 2 — `properti-card-terstruktur.tsx`

| # | Jawaban | Alasan (1 kalimat) |
|---|---------|-------------------|
| 1 | Ya | Nama file `properti-card-terstruktur.tsx` memakai kebab-case. |
| 2 | Ya | Berada di `components/`, lokasi standar komponen reusable App Router. |
| 3 | Ya | `PropertiCardTerstruktur`, `PropertiCardTerstrukturProps` konsisten dalam file. |
| 4 | Ya | `PropertiCardTerstrukturProps` didefinisikan (L11–24). |
| 5 | Ya | `export type PropertiCardTerstrukturProps` diekspor secara eksplisit (L11). |
| 6 | Ya | Semua konten via props; `imageSrc` wajib dari parent. |
| 7 | Ya | Parameter terdefinisi via interface; tidak ada `any`. |
| 8 | Ya | Setiap prop punya tipe eksplisit di interface. |
| 9 | Ya | `tsc --noEmit` project lulus tanpa error terkait file ini. |
| 10 | Ya | Mayoritas styling via `className` Tailwind utility. |
| 11 | Tidak | Ada `style={{ display, WebkitLineClamp, ... }}` pada `<h3>` (L112–117). |
| 12 | Ya | Ada `sm:w-[207px] sm:max-w-none` pada `<article>` (L54). |
| 13 | Ya | UI rendering + logic minor index carousel; tanpa data-fetching. |
| 14 | Ya | File 152 baris, di bawah batas 200 baris. |
| 15 | Ya | Indentasi, semicolon, dan struktur JSX konsisten. |
| 16 | Ya | `safeTotalImages`, `safeActiveIndex` dll. semua camelCase. |

### Variasi 3 — `property-card-kontekstual`

| # | Jawaban | Alasan (1 kalimat) |
|---|---------|-------------------|
| 1 | Ya | `property-card-kontekstual.tsx` dan file pendukung memakai kebab-case. |
| 2 | Ya | Berada di `components/property/`, subfolder fitur — valid untuk App Router. |
| 3 | Ya | PascalCase/camelCase konsisten di seluruh modul (main, types, utils, skeleton). |
| 4 | Ya | `PropertyCardKontekstualProps` didefinisikan di `.types.ts` (L33–48). |
| 5 | Ya | Re-export eksplisit di main file (L16–23). |
| 6 | Ya | Menerima props flat atau objek `PropertyData` + state `isLoading`. |
| 7 | Ya | Semua parameter typed; logic bisnis di `.utils.ts` fully typed. |
| 8 | Ya | Setiap prop punya tipe eksplisit di interface terpisah. |
| 9 | Ya | `tsc --noEmit` project lulus tanpa error terkait modul ini. |
| 10 | Ya | Semua styling via `className` Tailwind utility. |
| 11 | Ya | Tidak ada `style={{}}`; line-clamp memakai utility `line-clamp-2` (L113). |
| 12 | Ya | Ada `sm:w-[207px] sm:max-w-none` pada `<article>` (L57). |
| 13 | Ya | UI di main file; business logic di `.utils.ts`; skeleton terpisah. |
| 14 | Ya | Main file 151 baris; file pendukung masing-masing di bawah 100 baris. |
| 15 | Ya | Format penulisan konsisten di seluruh modul. |
| 16 | Ya | `resolveCardFields`, `fields.*` dll. semua camelCase. |

---

## 3. Skor per Kategori (1–5)

### Rubrik Penilaian

**Kategori 3 indikator** (Code Organization, Component Structure, TypeScript, Tailwind):

| Skor | Kriteria |
|:----:|----------|
| 5 | 3/3 terpenuhi sempurna |
| 4 | 3/3 terpenuhi dengan 1 deviasi minor |
| 3 | 2/3 terpenuhi |
| 2 | 1/3 terpenuhi |
| 1 | 0/3 terpenuhi |

**Kategori 2 indikator** (Modularitas, Konsistensi):

| Skor | Kriteria |
|:----:|----------|
| 5 | 2/2 sempurna |
| 4 | 2/2 dengan deviasi minor |
| 3 | 1/2 terpenuhi |
| 2 | 1/2 dengan pelanggaran signifikan |
| 1 | 0/2 |

### Tabel Skor

| Kategori | Indikator | V1 | V2 | V3 |
|----------|-----------|:--:|:--:|:--:|
| Code Organization | 1–3 | 5 | 5 | 5 |
| Component Structure | 4–6 | 5 | 5 | 5 |
| TypeScript Usage | 7–9 | 5 | 5 | 5 |
| Tailwind Implementation | 10–12 | 3 | 3 | 5 |
| Modularitas | 13–14 | 5 | 5 | 5 |
| Konsistensi | 15–16 | 5 | 5 | 5 |
| **Total indikator Ya** | 1–16 | **15/16** | **15/16** | **16/16** |

---

## 4. Perbedaan Paling Signifikan Antar Variasi

### A. Modularitas & pemisahan concern (V3 vs V1/V2)

V3 memecah modul ke 4 file; V1/V2 monolitik satu file.

```tsx
// property-card-kontekstual.tsx L11–13
import type { PropertyCardKontekstualProps } from "./property-card-kontekstual.types";
import { resolveCardFields } from "./property-card-kontekstual.utils";
import { PropertyCardKontekstualSkeleton } from "./property-card-kontekstual-skeleton";
```

V3 juga punya domain model (`PropertyData`) dan formatter harga di `.utils.ts` (L44–82).

---

### B. Inline style vs Tailwind utility (V2 vs V3)

**V2** memakai inline style untuk line-clamp:

```tsx
// properti-card-terstruktur.tsx L110–118
<h3
  className="mb-2 text-[10px] font-semibold italic leading-[1.25] text-[#555555]"
  style={{
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  }}
>
```

**V3** setara memakai Tailwind utility:

```tsx
// property-card-kontekstual.tsx L113
<h3 className="mb-2 line-clamp-2 text-[10px] font-semibold italic leading-[1.25] text-[#555555]">
```

---

### C. Responsive design (V1 vs V2/V3)

V1 tidak punya breakpoint Tailwind; layout fixed `max-w-[340px]`.

V2/V3 punya `sm:w-[207px] sm:max-w-none` (V2 L54, V3 L57).

---

### D. Fleksibilitas props & state loading (V3 unik)

```tsx
// property-card-kontekstual.types.ts L33–48
export interface PropertyCardKontekstualProps {
  data?: PropertyData;
  isLoading?: boolean;
  // ... flat props fallback ...
}

// property-card-kontekstual.tsx L44–46
if (isLoading) {
  return <PropertyCardKontekstualSkeleton />;
}
```

V1/V2 tidak punya `isLoading` atau skeleton.

---

### E. Carousel indicator (V1 hardcoded vs V2/V3 dinamis)

- **V1:** 4 dot hardcoded `[0, 1, 2, 3]` (L62–67)
- **V2/V3:** `Array.from({ length: safeTotalImages })` dengan props `totalImages` / `activeImageIndex` (V2 L79–88, V3 L82–91)

---

### F. Layout visual berbeda (V1 vs V2/V3)

| Aspek | V1 | V2/V3 |
|-------|----|-------|
| Image container | `aspect-[4/3]` | Fixed `h-[131px]` |
| Border radius | `rounded-[18px]` | `rounded-[10px]` |
| Stats layout | Grid 4 kolom (L99) | Flex horizontal (V2 L128–146) |
| Card height | Auto (aspect-driven) | Fixed `h-[241px]` |

---

## 5. Hasil ESLint & TypeScript

### ESLint

**Perintah** (dijalankan dari `my-app/`):

```bash
npx eslint \
  components/property-card.tsx \
  components/properti-card-terstruktur.tsx \
  components/property/property-card-kontekstual.tsx \
  components/property/property-card-kontekstual.types.ts \
  components/property/property-card-kontekstual.utils.ts \
  components/property/property-card-kontekstual-skeleton.tsx
```

| File | Error | Warning |
|------|:-----:|:-------:|
| `property-card.tsx` | 0 | 0 |
| `properti-card-terstruktur.tsx` | 0 | 0 |
| `property-card-kontekstual.tsx` | 0 | 0 |
| `property-card-kontekstual.types.ts` | 0 | 0 |
| `property-card-kontekstual.utils.ts` | 0 | 0 |
| `property-card-kontekstual-skeleton.tsx` | 0 | 0 |
| **Total** | **0** | **0** |

### TypeScript

**Perintah** (dijalankan dari `my-app/`):

```bash
npx tsc --noEmit
```

| Hasil | Detail |
|-------|--------|
| Exit code | 0 (sukses) |
| Error terkait file Property Card | Tidak ada |
| Kesimpulan | Project lulus pengecekan TypeScript secara keseluruhan |

---

## 6. Ringkasan Objektif

| Aspek | V1 Sederhana | V2 Terstruktur | V3 Kontekstual |
|-------|:------------:|:--------------:|:--------------:|
| Indikator Ya | 15/16 | 15/16 | **16/16** |
| Kelemahan checklist | Tidak responsive (ind. 12) | Inline style (ind. 11) | — |
| Struktur file | 1 file | 1 file | 4 file (modular) |
| ESLint | Bersih (0/0) | Bersih (0/0) | Bersih (0/0) |
| TypeScript | Lolos | Lolos | Lolos |

---

*Audit ini bersifat read-only — tidak ada perubahan kode pada file komponen manapun.*

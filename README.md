# 🧪 Penelitian Prompt Engineering untuk Pengembangan UI Frontend (Seerumah)

Repository ini berisi eksperimen penggunaan **prompt engineering** dalam menghasilkan komponen UI frontend menggunakan AI (Cursor AI) pada ekosistem **Next.js + React + TypeScript + Tailwind CSS**.

Penelitian ini berfokus pada perbandingan **tiga jenis prompt**:
- Prompt Sederhana
- Prompt Terstruktur
- Prompt Kontekstual

---

## Branch Total : 16
setiap branch menggandung hasil output yang di hasilkan oleh generative AI cursor dengan prompt dan komponen yang berbeda

## 🎯 Tujuan Penelitian

Menganalisis bagaimana tingkat detail dan konteks dalam prompt mempengaruhi:
- Kualitas hasil komponen UI
- Waktu pengembangan
- Jumlah iterasi yang dibutuhkan
- Konsistensi terhadap desain Figma
- Kesesuaian dengan best practices

---

## 🧠 Jenis Prompt

### 1. Prompt Sederhana
Prompt dengan instruksi minimal tanpa spesifikasi teknis detail.

**Karakteristik:**
- Singkat dan umum
- Tidak menyertakan detail visual atau teknis
- Tidak menyertakan konteks proyek

---

### 2. Prompt Terstruktur
Prompt dengan spesifikasi teknis dan visual yang rinci.

**Karakteristik:**
- Menyebutkan ukuran, warna, spacing, dan layout
- Mengacu pada desain Figma
- Fokus pada hasil UI yang presisi

---

### 3. Prompt Kontekstual
Prompt yang mencakup konteks sistem, repository, dan integrasi komponen.

**Karakteristik:**
- Menyertakan struktur proyek
- Menjelaskan relasi antar komponen
- Mendefinisikan standar tim dan arsitektur
- Mendekati kondisi pengembangan produksi

---

## 🧩 Komponen yang Diuji

Penelitian ini menguji 5 komponen UI utama dengan ketiga jenis prompt:

1. **Property Card**
2. **Search Bar Filtering**
3. **Navbar**
4. **Homepage (Layout Halaman)**
5. **Detail property page**

---

## ⚙️ Teknologi yang Digunakan

- **Framework**: Next.js (App Router)
- **Library**: React 19
- **Bahasa**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Font**: Google Fonts (Inter, Poppins)
- **Icons**: lucide-react, react-icons
- **Image Optimization**: next/image

---


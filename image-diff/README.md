# 🔍 Image Diff Tool

Tool sederhana untuk membandingkan **visual difference** antara dua gambar menggunakan [`resemble.js`](https://github.com/rsmbl/Resemble.js).

## 📁 Struktur Folder

```
image-diff/
├── index.html   ← UI utama (buka file ini di browser)
├── style.css    ← Styling dark-mode
├── main.js      ← Logic resemble.js + interaksi
└── README.md
```

## 🚀 Cara Pakai

1. **Buka `index.html`** langsung di browser (tidak perlu server).
2. Upload **Image A** dan **Image B** (drag & drop atau klik).
3. Sesuaikan **Comparison Settings** jika diperlukan.
4. Klik **Run Comparison**.
5. Lihat hasilnya di tiga mode tampilan:
   - **Diff Overlay** — gambar diff dengan pixel berbeda di-highlight
   - **A/B Slider** — geser untuk membandingkan A vs B secara interaktif
   - **Side-by-Side** — tampilkan A dan B berdampingan

## ⚙️ Settings

| Setting | Keterangan |
|---|---|
| **Ignore Mode** | `nothing` = strict, `less` = toleransi kecil, `antialiasing` = abaikan AA, `colors` = abaikan warna, `alpha` = abaikan transparansi |
| **Diff Highlight Color** | Warna untuk menandai pixel yang berbeda |
| **Ignore Colors** | Hanya bandingkan brightness, abaikan warna |
| **Ignore Anti-aliasing** | Abaikan perbedaan akibat rendering AA |
| **Output Scale** | Skala rendering canvas diff |

## 📦 Dependencies

- [resemble.js v4.5.3](https://cdn.jsdelivr.net/npm/resemblejs@4.5.3/resemble.min.js) — dimuat dari CDN, tidak perlu install npm

## 💡 Use Case (Penelitian)

Tool ini cocok untuk:
- Membandingkan **UI screenshot** sebelum & sesudah perubahan
- Memverifikasi konsistensi **component rendering** antar kondisi (kontekstual vs terstruktur vs dasar)
- Mendokumentasikan **visual regression** secara kuantitatif (mismatch %)

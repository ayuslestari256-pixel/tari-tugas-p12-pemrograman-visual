# Changelog

Semua perubahan penting pada proyek "Catatan Kuliah" akan dicatat dalam dokumen ini.

Format didasarkan pada [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
dan proyek ini berpedoman pada [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-11-12
### Ditambahkan
- Penanganan error (*error handling*) dan validasi data `localStorage` menggunakan blok `try/catch` untuk skenario uji tangguh (S1–S6).
- Mekanisme *fallback* otomatis jika data penyimpanan lokal kosong, rusak, atau berformat tidak valid.

### Diperbaiki
- Aplikasi tidak mengalami *crash* saat membaca data *storage* yang rusak atau tidak sesuai format array.

## [1.1.0] - 2026-11-05
### Ditambahkan
- Fitur pencarian catatan dan penyematan (*pin*) catatan penting.
- Pemisahan logika kode JavaScript ke dalam struktur ES Modules (`src/state.js`, `src/storage.js`, `src/ui.js`, `src/main.js`).

## [1.0.0] - 2026-10-28
### Ditambahkan
- Rilis awal aplikasi *Catatan Kuliah*.
- Fitur dasar tambah, edit, dan hapus catatan dengan penyimpanan berbasis `localStorage`.
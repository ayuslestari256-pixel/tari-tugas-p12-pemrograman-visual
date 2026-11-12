// src/storage.js
import * as state from './state.js';

export const KUNCI = 'catatan-kuliah:v1';
const KUNCI_LAMA = 'catatan-kuliah'; // Untuk migrasi Level 2 (opsional)

export function muat() {
  try {
    let raw = localStorage.getItem(KUNCI);
    
    // Migrasi kunci lama jika ada (Level 2)
    if (!raw && localStorage.getItem(KUNCI_LAMA)) {
      raw = localStorage.getItem(KUNCI_LAMA);
      localStorage.setItem(KUNCI, raw);
      localStorage.removeItem(KUNCI_LAMA);
    }

    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    // Saring item yang valid (harus berupa objek dan judul berupa string)
    return parsed.filter(item => item !== null && typeof item === 'object' && typeof item.judul === 'string');
  } catch (err) {
    // Tangkap error jika JSON rusak atau localStorage diblokir
    return [];
  }
}

export function simpan(data) {
  try {
    localStorage.setItem(KUNCI, JSON.stringify(data));
  } catch (err) {
    console.error('Penyimpanan gagal:', err);
    const infoEl = document.querySelector('#info');
    if (infoEl) {
      infoEl.textContent = 'Peringatan: Penyimpanan lokal penuh atau diblokir.';
    }
  }
}

// Inisialisasi awal saat modul dimuat
const dataAwal = muat();
state.aturSemua(dataAwal);
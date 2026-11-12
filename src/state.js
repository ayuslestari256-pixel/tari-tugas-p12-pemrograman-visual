// src/state.js
import * as storage from './storage.js';

let catatan = [];

function simpanKeStorage() {
  storage.simpan(catatan);
}

export function semua() {
  return catatan;
}

export function aturSemua(dataBaru) {
  catatan = dataBaru || [];
}

export function tambah(judul, mk) {
  catatan.push({
    id: Date.now(),
    judul: judul,
    mk: mk,
    dibuat: new Date().toISOString(),
    disematkan: false
  });
  simpanKeStorage();
}

export function alihSemat(id) {
  for (let i = 0; i < catatan.length; i++) {
    if (catatan[i].id === id) {
      catatan[i].disematkan = !catatan[i].disematkan;
    }
  }
  simpanKeStorage();
}

export function hapus(id) {
  let baru = [];
  for (let i = 0; i < catatan.length; i++) {
    if (catatan[i].id !== id) {
      baru.push(catatan[i]);
    }
  }
  catatan = baru;
  simpanKeStorage();
}

export function cari(kata) {
  const kataCari = kata || '';
  let hasil = [];
  for (let i = 0; i < catatan.length; i++) {
    if (catatan[i].judul.toLowerCase().indexOf(kataCari.toLowerCase()) !== -1) {
      hasil.push(catatan[i]);
    }
  }
  return hasil;
}
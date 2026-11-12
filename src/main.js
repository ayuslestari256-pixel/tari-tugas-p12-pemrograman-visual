// src/main.js
import * as state from './state.js';
import * as storage from './storage.js';
import * as ui from './ui.js';
import './state.js';

function perbaruiUI() {
  const inputCari = document.getElementById('cari');
  const keyword = inputCari ? inputCari.value : '';
  const hasil = state.cari(keyword);
  
  let jumlahSemat = 0;
  const semuaData = state.semua();
  for (let i = 0; i < semuaData.length; i++) {
    if (semuaData[i].disematkan) jumlahSemat++;
  }
  
  ui.renderTampilan(hasil, jumlahSemat);
}

if (typeof storage.muatData === 'function') {
  storage.muatData();
}

perbaruiUI();

const form = document.getElementById('form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const judulInput = document.getElementById('judul');
    const judul = judulInput.value.trim();
    if (judul === '') return;
    
    const mk = document.getElementById('mk').value;
    state.tambah(judul, mk);
    
    judulInput.value = '';
    perbaruiUI();
  });
}

const inputCariEl = document.getElementById('cari');
if (inputCariEl) {
  inputCariEl.addEventListener('input', function () {
    perbaruiUI();
  });
}

document.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON' && e.target.dataset.aksi) {
    const id = Number(e.target.dataset.id);
    const aksi = e.target.dataset.aksi;
    
    if (aksi === 'semat') {
      state.alihSemat(id);
      perbaruiUI();
    } else if (aksi === 'hapus') {
      if (!confirm('Hapus catatan ini?')) return;
      state.hapus(id);
      perbaruiUI();
    }
  }
});
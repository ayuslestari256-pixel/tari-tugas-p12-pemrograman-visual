// src/ui.js

/**
 * Komponen KartuCatatan yang aman dari XSS/HTML Injection menggunakan textContent
 */
export function KartuCatatan(c) {
  const card = document.createElement('div');
  card.className = 'kartu';
  card.dataset.id = c.id;

  const smallMk = document.createElement('small');
  smallMk.textContent = c.mk;

  const h3Judul = document.createElement('h3');
  h3Judul.textContent = c.judul; // PENTING: Mencegah <b>tebal</b> berubah menjadi tag HTML

  const smallTanggal = document.createElement('small');
  smallTanggal.textContent = new Date(c.dibuat).toLocaleDateString('id-ID');

  const divAksi = document.createElement('div');
  divAksi.className = 'aksi';

  const btnSemat = document.createElement('button');
  btnSemat.dataset.aksi = 'semat';
  btnSemat.dataset.id = c.id;
  btnSemat.textContent = c.disematkan ? 'Lepas' : 'Sematkan';

  const btnHapus = document.createElement('button');
  btnHapus.dataset.aksi = 'hapus';
  btnHapus.dataset.id = c.id;
  btnHapus.textContent = 'Hapus';

  divAksi.append(btnSemat, btnHapus);
  card.append(smallMk, h3Judul, smallTanggal, divAksi);

  return card;
}

export function PesanKosong(teks) {
  const p = document.createElement('p');
  p.className = 'kosong';
  p.textContent = teks;
  return p;
}

export function renderTampilan(hasil, jumlahSemat) {
  const sematan = document.getElementById('sematan');
  const semua = document.getElementById('semua');
  const info = document.getElementById('info');
  
  if (sematan) sematan.replaceChildren();
  if (semua) semua.replaceChildren();
  
  for (let j = 0; j < hasil.length; j++) {
    let c = hasil[j];
    const kartuEl = KartuCatatan(c);
    
    if (c.disematkan && sematan) {
      sematan.appendChild(kartuEl);
    }
    
    if (semua) {
      // KartuCatatan dipakai berulang di daftar semua catatan
      semua.appendChild(KartuCatatan(c));
    }
  }
  
  if (sematan && jumlahSemat === 0) {
    sematan.appendChild(PesanKosong('Belum ada catatan yang disematkan.'));
  }
  if (semua && hasil.length === 0) {
    semua.appendChild(PesanKosong('Tidak ada catatan.'));
  }
  
  if (info) {
    info.textContent = `${hasil.length} catatan, ${jumlahSemat} disematkan`;
  }
}
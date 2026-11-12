// src/ui.js
export function renderTampilan(hasil, jumlahSemat) {
  const sematan = document.getElementById('sematan');
  const semua = document.getElementById('semua');
  const info = document.getElementById('info');
  
  if (sematan) sematan.innerHTML = '';
  if (semua) semua.innerHTML = '';
  
  for (let j = 0; j < hasil.length; j++) {
    let c = hasil[j];
    
    if (c.disematkan && sematan) {
      sematan.innerHTML += `
        <div class="kartu">
          <small>${c.mk}</small>
          <h3>${c.judul}</h3>
          <small>${new Date(c.dibuat).toLocaleDateString('id-ID')}</small>
          <div class="aksi">
            <button data-aksi="semat" data-id="${c.id}">Lepas</button>
            <button data-aksi="hapus" data-id="${c.id}">Hapus</button>
          </div>
        </div>`;
    }
    
    if (semua) {
      semua.innerHTML += `
        <div class="kartu">
          <small>${c.mk}</small>
          <h3>${c.judul}</h3>
          <small>${new Date(c.dibuat).toLocaleDateString('id-ID')}</small>
          <div class="aksi">
            <button data-aksi="semat" data-id="${c.id}">${c.disematkan ? 'Lepas' : 'Sematkan'}</button>
            <button data-aksi="hapus" data-id="${c.id}">Hapus</button>
          </div>
        </div>`;
    }
  }
  
  if (sematan && jumlahSemat === 0) {
    sematan.innerHTML = '<p class="kosong">Belum ada catatan yang disematkan.</p>';
  }
  if (semua && hasil.length === 0) {
    semua.innerHTML = '<p class="kosong">Tidak ada catatan.</p>';
  }
  
  if (info) {
    info.textContent = `${hasil.length} catatan, ${jumlahSemat} disematkan`;
  }
}
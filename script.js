/**
 * Fungsi untuk memindahkan tampilan aktif (View Switching)
 * antar halaman Beranda, Produk, dan Transaksi.
 * @param {string} viewId - ID elemen target yang akan ditampilkan.
 */
function switchView(viewId) {
  // Sembunyikan seluruh elemen halaman
  const views = document.querySelectorAll('.view');
  views.forEach(function(v) {
    v.classList.remove('active');
  });

  // Tampilkan halaman yang dipilih
  const targetView = document.getElementById(viewId);
  if (targetView) {
    targetView.classList.add('active');
  }

  // Perbarui status menu navigasi bawah
  const navItems = document.querySelectorAll('.bottom-nav .nav-item');
  navItems.forEach(function(btn) {
    btn.classList.remove('active');
  });

  if (viewId === 'view-beranda') {
    const navBeranda = document.getElementById('nav-beranda');
    if (navBeranda) navBeranda.classList.add('active');
  } else if (viewId === 'view-produk') {
    const navProduk = document.getElementById('nav-produk');
    if (navProduk) navProduk.classList.add('active');
  } else if (viewId === 'view-transaksi') {
    const navTransaksi = document.getElementById('nav-transaksi');
    if (navTransaksi) navTransaksi.classList.add('active');
  }
}

// Menambahkan event listener pada elemen interaktif setelah dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
  // Tombol navigasi bawah
  const navBeranda = document.getElementById('nav-beranda');
  if (navBeranda) {
    navBeranda.addEventListener('click', function() {
      switchView('view-beranda');
    });
  }

  const navProduk = document.getElementById('nav-produk');
  if (navProduk) {
    navProduk.addEventListener('click', function() {
      switchView('view-produk');
    });
  }

  const navTransaksi = document.getElementById('nav-transaksi');
  if (navTransaksi) {
    navTransaksi.addEventListener('click', function() {
      switchView('view-transaksi');
    });
  }

  // Tombol pintasan di dalam halaman
  const btnToProduk = document.getElementById('btn-to-produk');
  if (btnToProduk) {
    btnToProduk.addEventListener('click', function() {
      switchView('view-produk');
    });
  }

  const toBeranda1 = document.getElementById('to-beranda-1');
  if (toBeranda1) {
    toBeranda1.addEventListener('click', function() {
      switchView('view-beranda');
    });
  }

  const toBeranda2 = document.getElementById('to-beranda-2');
  if (toBeranda2) {
    toBeranda2.addEventListener('click', function() {
      switchView('view-beranda');
    });
  }
});

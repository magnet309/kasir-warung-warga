# Kasir Pintar Warung Warga

Aplikasi web seluler (*mobile-first*) yang dirancang untuk membantu pemilik warung kelontong tradisional dalam mengelola pencatatan transaksi penjualan harian, pemantauan stok barang, serta rekapitulasi omzet toko secara praktis dan interaktif.

## Fitur Utama
- **Navigasi Hub-and-Spoke**: Beranda bertindak sebagai pusat (*hub*) yang terhubung langsung ke halaman fungsional lainnya.
- **Simulasi 3 Layar Utama**: 
  - **Beranda**: Menampilkan sapaan pengguna, omzet harian (`Rp1.250.000`), statistik ringkas, serta peringatan stok hampir habis.
  - **Kelola Produk**: Manajemen daftar stok barang lengkap dengan kolom pencarian dan filter kategori (Makanan, Minuman).
  - **Transaksi Kasir**: Katalog produk dan keranjang belanja aktif dengan tombol aksi penyelesaian transaksi.
- **Navigasi Bawah (*Bottom Navigation*)**: Memungkinkan pengguna beralih antar-halaman secara mulus dan intuitif.

## Struktur Proyek
```text
kasir-warung-warga/
├── index.html     # Struktur dokumen HTML semantik untuk antarmuka ponsel
├── styles.css     # Pengaturan gaya, variabel CSS, dan tata letak responsif
├── script.js      # Logika interaktivitas perpindahan tampilan (View Switching)
└── README.md      # Dokumentasi proyek

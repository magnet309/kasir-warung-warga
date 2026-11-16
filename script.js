function switchView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');

  document.querySelectorAll('.bottom-nav .nav-item').forEach(btn => btn.classList.remove('active'));

  if (viewId === 'view-beranda') {
    document.getElementById('nav-beranda').classList.add('active');
  } else if (viewId === 'view-produk') {
    document.getElementById('nav-produk').classList.add('active');
  } else if (viewId === 'view-transaksi') {
    document.getElementById('nav-transaksi').classList.add('active');
  }
}

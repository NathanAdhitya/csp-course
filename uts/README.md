# Task

```
Deskripsi Proyek: "Gallery Products"

Buat website dengan fitur:

1. Website memiliki layout dengan navigasi bar dimana konten layout dapat dirubah-rubah dengan component composition. Untuk layout dapat menggunakan tailwind dan referensi di https://v1.tailwindcss.com/components/navigation

2. Navigasi bar terdiri dari:
- Home
- Cart

3. Isi menu Home:
- Berisi judul di bagian atas “Beauty and Luxury’s Products”
- Berisi daftar barang yang fetch dengan axios dari https://fakestoreapi.com/products
Daftar barang ditampilkan dalam bentuk card dengan gambar di atas dan title di bawahnya, kemudian di - bawahnya ada harga. Dan ada tombol add to cart.
- Card barang ditampilkan tiap baris terdiri dari 3 card ke kanan setiap barisnya.
Tulisan title ada dynamic Link yang Ketika diklik memunculkan halaman detail barang yang berisi gambar,- deskripsi,kategori dan harga dimana data diambil dari https://fakestoreapi.com/products/{id}
- Ketika tombol add to cart ditekan maka variable context diisi dengan array barang yang ditambahkan dan - sebelah icon cart dimunculkan jumlah barang sekarang.

4. Ketika menu cart diklik:
- Munculkan daftar barang yang sudah ditambahkan melalui add to cart
- Daftar barang berbentuk card dengan tiap baris berisi 3 card
```

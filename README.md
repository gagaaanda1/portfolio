# 👨‍💻 Personal Portfolio — Hardika Angga Nugraha

<p align="center">
  Personal portfolio website showcasing my profile, technical skills, professional experience, and development projects.
</p>

---

## 📌 About This Project

Website ini merupakan personal portfolio dari **Hardika Angga Nugraha**, seorang IT Engineering yang memiliki ketertarikan pada pengembangan aplikasi berbasis web, pengelolaan server, database, networking, dan teknologi informasi.

Portfolio ini dibuat sebagai media untuk memperkenalkan profil profesional, menampilkan hasil pekerjaan, serta memberikan informasi mengenai pengalaman dan kemampuan teknis.

## ✨ Features

- **Modern UI Design** — Tampilan modern dengan konsep minimalis dan profesional.
- **Dark & Light Mode** — Pilihan tema gelap dan terang.
- **Responsive Layout** — Tampilan menyesuaikan berbagai ukuran layar.
- **About Me** — Informasi profil dan perkenalan.
- **Technical Skills** — Menampilkan kemampuan dan teknologi yang digunakan.
- **Project Showcase** — Dokumentasi proyek dengan kategori Web App, System, dan Server.
- **Experience Timeline** — Menampilkan pengalaman kerja dan perjalanan profesional.
- **Contact Form** — Formulir pesan yang terintegrasi dengan aplikasi email melalui mailto.
- **Interactive Navigation** — Navigasi antarbagian website.
- **Project Filtering** — Filter daftar proyek berdasarkan kategori.

## 🛠️ Tech Stack

| Technology | Usage |
| --- | --- |
| HTML5 | Struktur halaman website |
| CSS3 | Styling, layout, dan responsive design |
| Vanilla JavaScript | Interaksi dan fungsionalitas website |
| Lucide Icons | Ikon antarmuka |
| Google Fonts | Tipografi website |
| Git & GitHub | Version control dan repository |

## 📂 Project Structure

```text
portfolio/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── projects.js
│   ├── navigation.js
│   ├── contact.js
│   ├── theme.js
│   └── main.js
│
├── img/
│   ├── simrs.jpg
│   ├── simapotek.jpg
│   ├── absensi.jpg
│   ├── rujukan.jpg
│   ├── saas.jpg
│   ├── nas.jpg
│   ├── proxmox.jpg
│   └── panel.png
│
└── README.md
```

## 🚀 Featured Projects

Beberapa proyek yang ditampilkan dalam portfolio:

| Project | Description |
| --- | --- |
| SIMRS | Sistem Informasi Manajemen Rumah Sakit |
| SIMAPOTEK | Sistem manajemen dan penjualan apotek |
| Web Absensi | Aplikasi absensi dengan GPS dan dokumentasi foto |
| Web Terima Rujukan | Aplikasi pencatatan dan monitoring rujukan pasien |
| Web Dashboard SaaS | Dashboard pengelolaan pengguna dan layanan SaaS |
| NAS Storage | Penyimpanan data terpusat dan backup |
| Proxmox VE | Virtualisasi dan manajemen server |
| Panel Server | Pengelolaan server dan aplikasi |

## 💻 Installation & Setup

Website ini menggunakan HTML, CSS, dan Vanilla JavaScript sehingga tidak memerlukan framework atau proses build khusus.

### 1. Clone Repository

```bash
git clone https://github.com/gagaaanda1/portfolio.git
```

### 2. Masuk ke Folder Project

```bash
cd portfolio
```

### 3. Jalankan Website

Buka file `index.html` menggunakan browser.

Atau gunakan extension **Live Server** pada Visual Studio Code untuk menjalankan website melalui local development server.

## ⚙️ Customization

Beberapa bagian website dapat disesuaikan melalui file berikut:

- `index.html` — Mengubah informasi profil, pengalaman, dan kontak.
- `css/style.css` — Mengubah tampilan, warna, animasi, dan layout.
- `js/projects.js` — Menambahkan, mengubah, atau menghapus data proyek.
- `js/theme.js` — Pengaturan tema website.
- `js/navigation.js` — Pengaturan navigasi.
- `js/contact.js` — Pengaturan formulir kontak.
- `img/` — Menyimpan gambar profil dan dokumentasi proyek.

### Menambahkan Project Baru

Data proyek dapat ditambahkan melalui array `projects` di file `js/projects.js`.

Contoh:

```javascript
{
  number: "09",
  title: "MY NEW PROJECT",
  category: "web",
  description: "Deskripsi singkat proyek.",
  tech: ["HTML", "CSS", "JavaScript"],
  url: "https://example.com",
  image: "img/project.jpg",
  color: "green"
}
```

## 📄 License

This project is developed for personal portfolio purposes.

---

<p align="center">
  Designed & Developed with ❤️ by <strong>Hardika Angga Nugraha</strong>
</p>

<p align="center">
  © 2026 Hardika Angga Nugraha. All Rights Reserved.
</p>

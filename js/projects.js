// Ubah data di bawah ini sesuai proyek asli Anda.
const projects = [
  {
    number: "01",
    title: "SIMRS",
    category: "system",
    description: "Sistem Informasi Manajemen Rumah Sakit untuk mengintegrasikan pelayanan pasien, rekam medis elektronik, pendaftaran, rawat jalan, farmasi, dan laporan rumah sakit.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    url: "",
    image: "img/simrs.jpg",
    color: "green"
  },
  {
    number: "02",
    title: "SIMAPOTEK",
    category: "system",
    description: "Sistem manajemen apotek untuk mengelola penjualan obat, stok, pembelian, supplier, transaksi, dan laporan operasional apotek.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    url: "",
    image: "img/simapotek.jpg",
    color: "green"
  },
  {
    number: "03",
    title: "WEB ABSENSI",
    category: "web",
    description: "Aplikasi absensi berbasis web dengan pencatatan kehadiran, validasi lokasi GPS, dokumentasi foto, dan rekapitulasi laporan menggunakan Google Apps Script.",
    tech: ["Google Apps Script", "JavaScript", "HTML", "CSS", "Google Sheets"],
    url: "",
    image: "img/absensi.jpg",
    color: "green"
  },
  {
    number: "04",
    title: "WEB TERIMA RUJUKAN",
    category: "web",
    description: "Aplikasi penerimaan rujukan pasien untuk pencatatan, verifikasi data, pemantauan status rujukan, dan koordinasi pelayanan menggunakan Google Apps Script.",
    tech: ["Google Apps Script", "JavaScript", "HTML", "CSS", "Google Sheets"],
    url: "",
    image: "img/rujukan.jpg",
    color: "green"
  },
  {
    number: "05",
    title: "WEB DASHBOARD SAAS",
    category: "web",
    description: "Dashboard SaaS untuk mengelola pengguna, tenant, layanan aplikasi, status langganan, masa aktif, dan monitoring operasional sistem.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    url: "",
    image: "img/saas.jpg",
    color: "green"
  },
  {
    number: "06",
    title: "NAS STORAGE",
    category: "server",
    description: "Implementasi Network Attached Storage untuk penyimpanan data terpusat, file sharing, manajemen hak akses, dan backup melalui jaringan lokal.",
    tech: ["NAS", "Linux", "SMB", "Storage", "Backup"],
    url: "",
    image: "img/nas.jpg",
    color: "green"
  },
  {
    number: "07",
    title: "PROXMOX VE",
    category: "server",
    description: "Implementasi virtualisasi server menggunakan Proxmox VE untuk pengelolaan Virtual Machine, LXC Container, resource server, virtual networking, dan backup.",
    tech: ["Proxmox VE", "Linux", "Virtualization", "VM", "LXC"],
    url: "",
    image: "img/proxmox.jpg",
    color: "green"
  },
  {
    number: "08",
    title: "PANEL SERVER",
    category: "server",
    description: "Implementasi virtualisasi server menggunakan Panel Server untuk pengelolaan sebuah Website atau aplikasi, LXC Container, resource server, virtual networking, dan backup.",
    tech: ["Linux", "Virtualization", "VM", "LXC"],
    url: "",
    image: "img/panel.png",
    color: "green"
  }
];



function renderProjects(filter = "all") {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  const visibleProjects = projects.filter(project =>
    filter === "all" || project.category === filter
  );

  grid.innerHTML = visibleProjects.map(project => `
    <article class="project-card">
    <div class="project-preview ${project.color}">

      <span class="project-number">
        ${project.number} / PROJECT
      </span>

      <div class="project-image">
        <img
          src="${escapeHTML(project.image)}"
          alt="${escapeHTML(project.title)}"
          loading="lazy"
          onerror="this.style.display='none'"
        >
      </div>

    </div>

    <div class="project-body">
      <div class="project-top">
        <h3>${escapeHTML(project.title)}</h3>

        ${project.url ? `<a class="project-link"
          href="${safeURL(project.url)}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lihat ${escapeHTML(project.title)}">
          <i data-lucide="arrow-up-right"></i>
        </a>` : ""}
      </div>

      <p>${escapeHTML(project.description)}</p>

      <div class="project-tags">
        ${project.tech.map(item =>
          `<span>${escapeHTML(item)}</span>`
        ).join("")}
      </div>
    </div>
  </article>
  `).join("");

  if (window.lucide) window.lucide.createIcons();
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

function safeURL(value) {
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : "#";
  } catch {
    return "#";
  }
}

export const site = {
  brand: "Dimas Respati",
  fullName: "Dimas Respati Wiratama Himawan",
  greeting: "I'm",
  firstName: "Dimas Respati",
  role: "IT Governance, GRC & ITSM Specialist",
  photo: "/foto.png",
  // Foto kedua (cutout transparan, pose berbeda) untuk section About.
  photo2: "/foto-2.png",
  bio: "Lulusan Sistem Informasi Universitas Airlangga dengan minat kuat di Tata Kelola TI, Risiko, Kepatuhan (GRC), dan Analisis Bisnis. Bertanggung jawab, disiplin, dan mudah beradaptasi, baik mandiri maupun dalam tim.",
  about:
    "Saya merupakan lulusan Sistem Informasi Universitas Airlangga dengan minat yang kuat di bidang Tata Kelola TI, Risiko, Kepatuhan (GRC), dan Analisis Bisnis. Saya bertanggung jawab, disiplin, dan mudah beradaptasi, serta mampu bekerja secara efektif baik secara mandiri maupun dalam tim. Dengan latar belakang akademik dan pengalaman yang saya miliki, saya siap berkontribusi melalui keterampilan, kemauan untuk belajar, dan komitmen menghasilkan pekerjaan yang berkualitas.",
  heroFocus:
    "Membantu organisasi menyelaraskan TI dengan kebutuhan bisnis lewat tata kelola, manajemen risiko, dan analisis proses.",
  // Alamat email dipecah supaya tidak tertulis utuh di halaman; dirakit saat tombol Email diklik.
  emailParts: { user: "respatihimawan", host: "gmail.com" },
  linkedin: "https://linkedin.com/in/dimasrespati/",
  // Isi dengan URL profil Instagram (contoh: "https://instagram.com/namaakun"). Kosong = panel tampil placeholder.
  instagram: "https://instagram.com/himawan289",
  frameworks: ["COBIT 2019", "ITIL v4", "ISO/IEC 27001", "BPMN", "Value Chain Analysis"],
  skills: [
    {
      title: "Tata Kelola TI",
      tags: "COBIT 2019 · ITIL v4 · Audit TI",
      desc: "Penilaian kapabilitas proses, audit charter/program/report, dan perbaikan manajemen layanan.",
    },
    {
      title: "Manajemen Risiko & Kepatuhan",
      tags: "ISO 27001 · SLE/ALE · Risk Register",
      desc: "Identifikasi risiko, ancaman, dan kerentanan, serta penilaian kuantitatif untuk perencanaan mitigasi.",
    },
    {
      title: "Analisis Bisnis & Arsitektur Enterprise",
      tags: "BPMN · Value Chain · Use Case · DFD",
      desc: "Pemetaan proses As-Is/To-Be dan roadmap arsitektur lintas lapisan bisnis, data, aplikasi, teknologi.",
    },
  ],
  stats: [
    { to: 3, suffix: "", decimals: 0, label: "Magang Profesional" },
    { to: 30, suffix: "+", decimals: 0, label: "Proyek TI Dipantau" },
    { to: 5000, suffix: "", decimals: 0, label: "Data Insiden Dianalisis" },
    { to: 3.56, suffix: "", decimals: 2, label: "GPA / 4.00" },
  ],
  experience: [
    {
      org: "DSITD Universitas Airlangga",
      tags: ["ISO 27001", "Risk Register", "Data Center"],
      role: "IT Governance Intern",
      period: "Agu 2026 – Sekarang",
      points: [
        "Menyusun risk register data center berdasarkan ISO 27001 dengan mengidentifikasi risiko, ancaman, dan kerentanan.",
        "Menyusun dokumentasi dengan mengumpulkan dan mengonsolidasikan informasi dari vendor pihak ketiga untuk mendukung penilaian TI.",
      ],
    },
    {
      org: "PT PAL Indonesia",
      tags: ["Dashboard GRC", "SLE/ALE", "KPI & SLA"],
      role: "IT Governance Intern",
      period: "Feb 2025 – Jul 2025",
      points: [
        "Membangun dashboard terintegrasi untuk tata kelola, risiko, kepatuhan, insiden, dan operasional di 5 divisi.",
        "Mengembangkan dashboard pemantauan audit dan KPI untuk 30+ proyek TI, memantau kinerja SLA, visibilitas kontrol, dan akuntabilitas tindak lanjut.",
        "Melakukan penilaian risiko dengan metode SLE/ALE pada skenario serangan siber dan kegagalan backup.",
      ],
    },
    {
      org: "PT Vido Garment",
      tags: ["BPMN", "Value Chain", "Enterprise Architecture"],
      role: "Enterprise Architecture & Digital Transformation Analyst",
      period: "Aug 2024 – Dec 2024",
      points: [
        "Memetakan proses As-Is dan To-Be dengan BPMN dan Value Chain Analysis, mengidentifikasi 5+ hambatan pada produksi, pengadaan, persediaan, dan pelaporan.",
        "Menyusun roadmap arsitektur enterprise pada lapisan bisnis, data, aplikasi, dan teknologi.",
      ],
    },
  ],
  projects: [
    {
      title: "Analisis Keputusan Pembayaran Ransomware",
      metric: { value: "80,2%", label: "penurunan kemungkinan bayar tebusan dengan pelacakan ancaman proaktif" },
      type: "Manajemen Risiko · 2025",
      desc: "Binary Logistic Regression pada 5.000 data insiden ransomware sektor kesehatan. Pelacakan ancaman proaktif terhadap 350+ ancaman berkaitan dengan penurunan kemungkinan pembayaran hingga 80,2%. Strategi: segmentasi jaringan dan optimalisasi RTO.",
    },
    {
      title: "Tugas Akhir: COBIT 2019 & ITIL v4",
      type: "Tata Kelola TI · 2026",
      desc: "Analisis manajemen insiden dan masalah TI berdasarkan COBIT 2019 DSS02 dan DSS03, dengan rancangan perbaikan dan work product selaras ITIL v4.",
    },
    {
      title: "Audit TI Direktorat SI & Transformasi Digital",
      type: "Audit TI · 2025",
      desc: "Menyusun Audit Charter, Audit Program, dan Audit Report, serta menilai kapabilitas DSS01 dan DSS02 berdasarkan COBIT 2019.",
    },
    {
      title: "Analisis dan Perancangan Sistem Informasi",
      type: "Analisis Bisnis · 2024",
      desc: "Analisis kebutuhan pengguna dan dokumentasi proses bisnis lewat BPMN, Use Case, Activity Diagram, dan DFD.",
    },
  ],
  // Foto kegiatan: public/organisasi/<file>. Urutan di timeline otomatis mengikuti `start` (tahun-bulan).
  organizations: [
    { start: "2023-04", role: "Ketua", org: "HIMSI Charity", period: "Apr 2023 – Mei 2023", file: "ketua-himsi-charity.jpg" },
    { start: "2024-02", role: "Sekretaris Humas", org: "Himpunan Mahasiswa S1 Sistem Informasi", period: "Feb 2024 – Des 2024", file: "sekretaris-humas-himsi.jpg" },
    { start: "2024-04", role: "Koordinator Humas & Perizinan", org: "POINTER HIMSI", period: "Apr 2024 – Sep 2024", file: "koordinator-humas-pointer.jpg" },
    { start: "2024-07", role: "Staf Humas", org: "Bina Desa FST", period: "Jul 2024 – Aug 2024", file: "staf-humas-bina-desa.jpg" },
    { start: "2024-08", role: "Tim Multimedia", org: "Grand Final Duta Universitas Airlangga", period: "Aug 2024 – Nov 2024", file: "tim-multimedia-duta-unair.jpg" },
  ],
  education: {
    school: "Universitas Airlangga",
    degree: "Sarjana Sistem Informasi",
    period: "Agu 2022 – Jul 2026",
    gpa: "GPA 3.56 / 4.00",
  },
  // Foto sertifikat: public/sertifikat/<file>. Foto prestasi: public/prestasi/<file>.
  certificates: [
    { kind: "Sertifikasi", title: "Alibaba Cloud Certified Associate (ACA) Cloud Computing", issuer: "DTS Komdigi x Alibaba Cloud", file: "aca-cloud-computing.jpg" },
    { kind: "Sertifikasi", title: "NDG Linux Unhatched", issuer: "Cisco Networking Academy", file: "cisco-linux-unhatched.jpg" },
    { kind: "Sertifikasi", title: "NDG Linux Essentials", issuer: "Cisco Networking Academy", file: "cisco-linux-essentials.jpg" },
  ],
  achievements: [
    { badge: "Juara 2", title: "International Business Plan Competition", issuer: "Universitas Warmadewa, 2025", file: "juara-2-business-plan.jpg" },
    { badge: "Co-author", title: "Publikasi ilmiah RegTech Governance", issuer: "ICOMCos 2026", file: "publikasi-icomcos-2026.jpg" },
  ],
  // level: 1 = Dasar, 2 = Menengah, 3 = Mahir. Sesuaikan dengan kemampuan sebenarnya.
  skillGroups: [
    { title: "Tata Kelola & Framework", level: 3, items: ["COBIT 2019", "ITIL v4", "ISO 27001", "BPMN", "Value Chain Analysis"] },
    { title: "GRC Tooling", level: 2, items: ["Risk Register", "CISO Assistant", "eramba"] },
    { title: "ITSM Tooling", level: 2, items: ["GLPI", "Docker"] },
    { title: "QA & Testing", level: 2, items: ["Selenium", "Katalon", "Postman"] },
    { title: "Office & Desain", level: 3, items: ["Microsoft Word", "Microsoft Excel", "Canva", "Figma"] },
    { title: "Pengembangan", level: 2, items: ["Laravel", "Django", "Python", "PostgreSQL", "MySQL", "Bun", "Next.js"] },
  ],
  // Skill unggulan: ditampilkan menonjol di section Skill.
  featuredSkills: ["COBIT 2019", "ITIL v4", "ISO 27001", "Risk Register", "BPMN"],
  tools: ["Microsoft Word", "Microsoft Excel", "Canva", "Figma"],
  languages: ["Bahasa Indonesia", "Bahasa Inggris"],
  softSkills: ["Teamwork", "Responsibility", "Time Management"],
};

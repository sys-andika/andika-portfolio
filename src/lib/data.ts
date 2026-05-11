export interface Project {
  id: number
  image: string
  category: BilingualText
  title: BilingualText
  shortDesc: BilingualText
  fullDesc: BilingualText
  tools: string[]
  year: string
  hasSourceCode: boolean
  sourceCodeUrl: string
  hasVisit: boolean
  visitUrl: string
}

export interface Skill {
  name: string;
  icon: string;
}

export type BilingualText = {
  ID: string
  EN: string
}

export interface Certificate {
  id: number
  image: string
  shadowColor: string
  badgeColor: string
  title: BilingualText
  issuer: BilingualText
  year: string
  description: BilingualText
}

export interface Testimonial {
  id: number;
  photo: string;
  name: string;
  role: BilingualText;
  institution: string;
  quote: BilingualText;
  rating: number;
}

export const projects: Project[] = [
  {
    id: 1,
    image: '/projects/robot-color-flag.png',
    category: {
      ID: 'Robotika',
      EN: 'Robotics',
    },
    title: {
      ID: 'Pertandingan Robot – Color Flag Lifting Mission',
      EN: 'Robot Competition – Color Flag Lifting Mission',
    },
    shortDesc: {
      ID: 'Robot kendali Bluetooth yang mendeteksi warna lantai dan mengangkat bendera sesuai warna sebagai tugas akhir Basic Training KOMBO Universitas Airlangga 2025.',
      EN: 'Bluetooth-controlled robot that detects floor colors and lifts the corresponding flag, built as the final task of KOMBO Basic Training at Universitas Airlangga 2025.',
    },
    fullDesc: {
      ID: 'Robot dikendalikan via Bluetooth dan membawa tiga bendera (merah, hijau, putih) dalam mekanisme internalnya. Robot bertugas mendeteksi warna lantai menggunakan sensor warna, mengangkat bendera yang sesuai dengan warna pos (minimal 5 cm selama 1–2 detik), berpindah ke pos berikutnya, dan menyelesaikan misi di zona finish berwarna abu-abu. Dimensi robot maksimal 25×25×25 cm dengan kontrol terbatas pada gerak maju, mundur, kiri, dan kanan.',
      EN: 'The robot is controlled via Bluetooth and carries three flags (red, green, white) in its internal mechanism. It detects floor color using a color sensor, lifts the matching flag (minimum 5 cm for 1–2 seconds), moves to the next post, and completes the mission at the gray finish zone. Robot dimensions are max 25×25×25 cm with controls limited to forward, backward, left, and right movement.',
    },
    tools: ['Arduino', 'Bluetooth HC-05', 'Servo Motor', 'Color Sensor', 'C++'],
    year: '2025',
    hasSourceCode: true,
    sourceCodeUrl: 'https://github.com/sys-andika/color-flag-lifting-robot.git',
    hasVisit: false,
    visitUrl: '',
  },
  {
    id: 2,
    image: '/projects/lks-nasional-linux.png',
    category: {
      ID: 'Lomba Nasional',
      EN: 'National Competition',
    },
    title: {
      ID: 'Modul A – Linux Environment (LKS DIKMEN Nasional 2025)',
      EN: 'Module A – Linux Environment (LKS DIKMEN National 2025)',
    },
    shortDesc: {
      ID: 'Implementasi Linux environment enterprise lengkap meliputi DNS, LDAP, CA, web server HA, mail server, firewall, VPN, dan otomasi Ansible pada LKS DIKMEN Nasional 2025.',
      EN: 'Full enterprise Linux environment implementation including DNS, LDAP, CA, HA web server, mail server, firewall, VPN, and Ansible automation at LKS DIKMEN National 2025.',
    },
    fullDesc: {
      ID: 'Merancang dan mendeploy Linux environment terintegrasi yang mencerminkan kebutuhan infrastruktur enterprise. Implementasi mencakup: DNS menggunakan BIND9 (forward & reverse zone), LDAP dengan slapd sebagai identity hub, Certificate Authority (OpenSSL), web server web-01 & web-02 dengan Keepalived (virtual IP failover) dan HAProxy (load balancer), Nginx dengan autentikasi dasar untuk akses internal, mail server Postfix + Dovecot + Roundcube terintegrasi LDAP dan SSL, firewall nftables, dan VPN OpenVPN dengan autentikasi LDAP. Konfigurasi web server internal diotomasi menggunakan Ansible.',
      EN: 'Designed and deployed an integrated Linux environment reflecting real enterprise infrastructure demands. Implementation covers: DNS with BIND9 (forward & reverse zones), LDAP via slapd as identity hub, Certificate Authority (OpenSSL), web-01 & web-02 with Keepalived (virtual IP failover) and HAProxy (load balancer), Nginx with basic auth for internal access, Postfix + Dovecot + Roundcube mail server integrated with LDAP and SSL, nftables firewall, and OpenVPN with LDAP authentication. Internal web server configuration automated using Ansible.',
    },
    tools: ['Linux', 'BIND9', 'slapd (LDAP)', 'OpenSSL', 'Nginx', 'HAProxy', 'Keepalived', 'Postfix', 'Dovecot', 'Roundcube', 'nftables', 'OpenVPN', 'Ansible'],
    year: '2025',
    hasSourceCode: false,
    sourceCodeUrl: '',
    hasVisit: false,
    visitUrl: '',
  },
  {
    id: 3,
    image: '/projects/lks-nasional-windows.png',
    category: {
      ID: 'Lomba Nasional',
      EN: 'National Competition',
    },
    title: {
      ID: 'Modul C – Windows Environment (LKS DIKMEN Nasional 2025)',
      EN: 'Module C – Windows Environment (LKS DIKMEN National 2025)',
    },
    shortDesc: {
      ID: 'Konfigurasi Windows environment enterprise dengan Active Directory multi-domain, DFS Replication, IIS, Site-to-Site VPN, dan otomasi Ansible + PowerShell.',
      EN: 'Enterprise Windows environment configuration with multi-domain Active Directory, DFS Replication, IIS, Site-to-Site VPN, and Ansible + PowerShell automation.',
    },
    fullDesc: {
      ID: 'Bertindak sebagai system administrator untuk domain itnsa.id dan lab.itnsa.id. Implementasi mencakup: CORE sebagai Domain Controller dengan AD Object (PowerShell), AD Site & Replication, dan DNS; SRV untuk shared folder (personal & group), DFS Namespaces, DFS Replication master, IIS Web Services, dan FSRM; EDGE sebagai DHCP, RRAS Routing & NAT, DFS Replication backup, dan Site-to-Site VPN Gateway; DC.lab.itnsa.id sebagai child domain controller; serta Ansible Controller untuk otomasi konfigurasi seluruh environment.',
      EN: 'Acted as system administrator for itnsa.id and lab.itnsa.id domains. Implementation covers: CORE as Domain Controller with AD Objects (PowerShell), AD Site & Replication, DNS; SRV for shared folders (personal & group), DFS Namespaces, DFS Replication master, IIS Web Services, FSRM; EDGE as DHCP, RRAS Routing & NAT, DFS Replication backup, Site-to-Site VPN Gateway; DC.lab.itnsa.id as child domain controller; and Ansible Controller for full environment automation.',
    },
    tools: ['Windows Server', 'Active Directory', 'PowerShell', 'DNS', 'DHCP', 'DFS', 'IIS', 'RRAS', 'FSRM', 'Ansible'],
    year: '2025',
    hasSourceCode: false,
    sourceCodeUrl: '',
    hasVisit: false,
    visitUrl: '',
  },
  {
    id: 4,
    image: '/projects/lks-nasional-cisco.png',
    category: {
      ID: 'Lomba Nasional',
      EN: 'National Competition',
    },
    title: {
      ID: 'Modul D – Network System (LKS DIKMEN Nasional 2025)',
      EN: 'Module D – Network System (LKS DIKMEN National 2025)',
    },
    shortDesc: {
      ID: 'Implementasi jaringan enterprise multi-cabang di Cisco Modeling Lab mencakup routing dinamis, switching, DMVPN, NAT, dan keamanan jaringan.',
      EN: 'Multi-branch enterprise network implementation on Cisco Modeling Lab covering dynamic routing, switching, DMVPN, NAT, and network security.',
    },
    fullDesc: {
      ID: 'Merancang dan mengimplementasikan infrastruktur jaringan enterprise multi-cabang menggunakan Cisco Modeling Lab. Cakupan meliputi: konfigurasi dasar router & switch, Layer 2 (VLAN, VTP, Spanning-Tree, Link Aggregation LACP/PAGP), Layer 3 (IPv4 & IPv6, Static Routing, EIGRP, OSPF, BGP), IP Services (DHCP, FHRP, NAT), serta Security & VPN (DMVPN, ACL, Port Security, SSH). Proyek ini mensimulasikan kebutuhan jaringan perusahaan dengan beberapa cabang di lokasi berbeda.',
      EN: 'Designed and implemented a multi-branch enterprise network infrastructure using Cisco Modeling Lab. Coverage includes: basic router & switch configuration, Layer 2 (VLAN, VTP, Spanning-Tree, Link Aggregation LACP/PAGP), Layer 3 (IPv4 & IPv6, Static Routing, EIGRP, OSPF, BGP), IP Services (DHCP, FHRP, NAT), and Security & VPN (DMVPN, ACL, Port Security, SSH). The project simulates network requirements for a company with multiple branch locations.',
    },
    tools: ['Cisco', 'Cisco Modeling Lab', 'EIGRP', 'OSPF', 'BGP', 'DMVPN', 'VLAN', 'STP', 'NAT', 'ACL'],
    year: '2025',
    hasSourceCode: false,
    sourceCodeUrl: '',
    hasVisit: false,
    visitUrl: '',
  },
  {
    id: 5,
    image: '/projects/lks-provinsi-cisco.png',
    category: {
      ID: 'Lomba Provinsi',
      EN: 'Provincial Competition',
    },
    title: {
      ID: 'Modul A – Network System (LKS DIKMEN Jawa Tengah 2025)',
      EN: 'Module A – Network System (LKS DIKMEN Central Java 2025)',
    },
    shortDesc: {
      ID: 'Simulasi jaringan multi-cabang di Cisco Packet Tracer dengan VLAN, EtherChannel, routing dinamis, NAT, FHRP, dan keamanan jaringan.',
      EN: 'Multi-branch network simulation on Cisco Packet Tracer with VLAN, EtherChannel, dynamic routing, NAT, FHRP, and network security.',
    },
    fullDesc: {
      ID: 'Berperan sebagai Network Engineer di ITNSA.ID Corp untuk membangun ulang layanan jaringan dari awal menggunakan Cisco Packet Tracer. Implementasi mencakup: konfigurasi dasar perangkat, Layer 2 Switching (VLAN & Inter-VLAN Routing, EtherChannel, VTP), Layer 3 Routing (Static Routing, EIGRP, OSPF), serta layanan jaringan (NAT, FHRP, DHCP, SNMP, NTP) dan keamanan (SSH, Port Security).',
      EN: 'Acted as Network Engineer at ITNSA.ID Corp to rebuild network services from scratch using Cisco Packet Tracer. Implementation covers: basic device configuration, Layer 2 Switching (VLAN & Inter-VLAN Routing, EtherChannel, VTP), Layer 3 Routing (Static Routing, EIGRP, OSPF), and network services (NAT, FHRP, DHCP, SNMP, NTP) with security (SSH, Port Security).',
    },
    tools: ['Cisco', 'Cisco Packet Tracer', 'VLAN', 'EIGRP', 'OSPF', 'NAT', 'FHRP', 'DHCP', 'EtherChannel'],
    year: '2025',
    hasSourceCode: false,
    sourceCodeUrl: '',
    hasVisit: false,
    visitUrl: '',
  },
  {
    id: 6,
    image: '/projects/lks-kabupaten-linux.png',
    category: {
      ID: 'Lomba Kabupaten',
      EN: 'Regency Competition',
    },
    title: {
      ID: 'Modul A – Linux Environment (LKS DIKMEN Kabupaten Purbalingga 2025)',
      EN: 'Module A – Linux Environment (LKS DIKMEN Purbalingga 2025)',
    },
    shortDesc: {
      ID: 'Konfigurasi Linux environment multi-server mencakup DHCP, firewall iptables, load balancer, OpenVPN, mail server, DNS, web server, LDAP, FTP, dan CA.',
      EN: 'Multi-server Linux environment configuration covering DHCP, iptables firewall, load balancer, OpenVPN, mail server, DNS, web server, LDAP, FTP, and CA.',
    },
    fullDesc: {
      ID: 'Instalasi dan konfigurasi layanan Linux pada environment multi-server. LNXRTR dikonfigurasi sebagai DHCP Relay, Firewall (iptables), Monitoring, Load Balancer, dan OpenVPN Server. LNX SERV-A menjalankan Mail Server, DNS Server, SSH Server, dan CA. LNX SERV-B menjalankan Web Server 1, LDAP Server, dan DHCP Server. LNX SERV-C menjalankan Web Server 2 dan FTP Server. Setiap layanan diuji dari sisi konfigurasi dan fungsionalitas.',
      EN: 'Installation and configuration of Linux services in a multi-server environment. LNXRTR configured as DHCP Relay, Firewall (iptables), Monitoring, Load Balancer, and OpenVPN Server. LNX SERV-A runs Mail Server, DNS Server, SSH Server, and CA. LNX SERV-B runs Web Server 1, LDAP Server, and DHCP Server. LNX SERV-C runs Web Server 2 and FTP Server. Each service tested on configuration and functionality.',
    },
    tools: ['Linux', 'iptables', 'OpenVPN', 'DNS', 'Mail Server', 'LDAP', 'Web Server', 'FTP', 'DHCP', 'CA'],
    year: '2025',
    hasSourceCode: false,
    sourceCodeUrl: '',
    hasVisit: false,
    visitUrl: '',
  },
  {
    id: 7,
    image: '/projects/lks-provinsi-ansible.png',
    category: {
      ID: 'Lomba Provinsi',
      EN: 'Provincial Competition',
    },
    title: {
      ID: 'Modul B – Infrastructure Programmability & Automation (LKS SMK Jawa Tengah 2024)',
      EN: 'Module B – Infrastructure Programmability & Automation (LKS SMK Central Java 2024)',
    },
    shortDesc: {
      ID: 'Implementasi Infrastructure as Code (IaC) menggunakan Ansible untuk otomasi konfigurasi DNS Server, Web Server, dan HAProxy dengan Jinja2 template dan idempotent playbook.',
      EN: 'Infrastructure as Code (IaC) implementation using Ansible to automate DNS Server, Web Server, and HAProxy configuration with Jinja2 templates and idempotent playbooks.',
    },
    fullDesc: {
      ID: 'Mentransisikan infrastruktur pemerintah dari konfigurasi manual ke Infrastructure as Code menggunakan Ansible. Implementasi mencakup penggunaan Jinja2 Template, manajemen Ansible Inventory, pengaturan Role dan Secrets, pembuatan playbook yang idempotent, penggunaan Loop, serta instalasi dan konfigurasi DNS Server, Web Server, dan HAProxy secara otomatis.',
      EN: 'Transitioned government infrastructure from manual configuration to Infrastructure as Code using Ansible. Implementation includes Jinja2 Templates, Ansible Inventory management, Role and Secrets management, idempotent playbooks, Loop usage, and automated installation and configuration of DNS Server, Web Server, and HAProxy.',
    },
    tools: ['Ansible', 'Jinja2', 'DNS Server', 'Web Server', 'HAProxy', 'Linux', 'YAML'],
    year: '2024',
    hasSourceCode: false,
    sourceCodeUrl: '',
    hasVisit: false,
    visitUrl: '',
  },
  {
    id: 8,
    image: '/projects/lks-provinsi-clientserver.png',
    category: {
      ID: 'Lomba Provinsi',
      EN: 'Provincial Competition',
    },
    title: {
      ID: 'Modul C – Client Server Environment (LKS SMK Jawa Tengah 2024)',
      EN: 'Module C – Client Server Environment (LKS SMK Central Java 2024)',
    },
    shortDesc: {
      ID: 'Konfigurasi client-server dua site (Linux & Windows) meliputi DNS, web server, HAProxy, mail server, Active Directory, DFS Replication, dan iSCSI.',
      EN: 'Two-site client-server configuration (Linux & Windows) covering DNS, web server, HAProxy, mail server, Active Directory, DFS Replication, and iSCSI.',
    },
    fullDesc: {
      ID: 'Konfigurasi environment client-server dua site untuk perusahaan IT di industri otomotif. Site Utara (Linux): DNS Server, Web Server, HAProxy, Email Server (SMTP & IMAP), Roundcube Webmail, DHCP Server, RAID, Certificate Authority, dan Sudo Restriction. Site Selatan (Windows): Active Directory Server, DNS Server, Web Server, Windows Backup, DFS Replication, Cron/Scheduled Task, dan iSCSI.',
      EN: 'Client-server environment configuration for two sites of an IT company in the automotive industry. North Site (Linux): DNS Server, Web Server, HAProxy, Email Server (SMTP & IMAP), Roundcube Webmail, DHCP Server, RAID, Certificate Authority, and Sudo Restriction. South Site (Windows): Active Directory Server, DNS Server, Web Server, Windows Backup, DFS Replication, Cron/Scheduled Task, and iSCSI.',
    },
    tools: ['Linux', 'Windows Server', 'DNS', 'HAProxy', 'Postfix', 'Dovecot', 'Roundcube', 'Active Directory', 'DFS', 'iSCSI', 'RAID'],
    year: '2024',
    hasSourceCode: false,
    sourceCodeUrl: '',
    hasVisit: false,
    visitUrl: '',
  },
]

export const skillsRow1: Skill[] = [
  { name: "Linux", icon: "SiLinux" },
  { name: "Windows Server", icon: "SiWindows" },
  { name: "Cisco", icon: "SiCisco" },
  { name: "MikroTik", icon: "SiMikrotik" },
  { name: "Docker", icon: "SiDocker" },
  { name: "GitHub", icon: "SiGithub" },
  { name: "Ansible", icon: "SiAnsible" },
  { name: "Postfix", icon: "SiPostfix" },
  { name: "Dovecot", icon: "SiDovecot" },
  { name: "LDAP", icon: "SiOpenldap" },
  { name: "DNS", icon: "SiDns" },
  { name: "VPN", icon: "SiVpn" },
];

export const skillsRow2: Skill[] = [
  { name: "Active Directory", icon: "SiActivedirectory" },
  { name: "Bash", icon: "SiGnubash" },
  { name: "PowerShell", icon: "SiPowershell" },
  { name: "VMware", icon: "SiVmware" },
  { name: "Proxmox", icon: "SiProxmox" },
  { name: "HTML5", icon: "SiHtml5" },
  { name: "CSS3", icon: "SiCss3" },
  { name: "JavaScript", icon: "SiJavascript" },
  { name: "Tailwind", icon: "SiTailwindcss" },
  { name: "Bootstrap", icon: "SiBootstrap" },
  { name: "Figma", icon: "SiFigma" },
  { name: "C", icon: "SiC" },
  { name: "C++", icon: "SiCplusplus" },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    image: '/certificates/moe-nasional.jpg',
    shadowColor: '#00B4D8',
    badgeColor: '#00B4D8',
    title: {
      ID: 'Medalist for Excellence (MOE) — LKS DIKMEN Nasional 2025',
      EN: 'Medalist for Excellence (MOE) — LKS DIKMEN National 2025',
    },
    issuer: {
      ID: 'Pusat Prestasi Nasional',
      EN: 'National Achievement Center',
    },
    year: '2025',
    description: {
      ID: 'Mendapatkan penghargaan Medalist for Excellence pada kompetisi tingkat nasional sebagai bentuk apresiasi atas performa dan kemampuan teknis di bidang network dan system administration.',
      EN: 'Awarded the Medalist for Excellence at a national-level competition as recognition of outstanding performance and technical skills in network and system administration.',
    },
  },
  {
    id: 2,
    image: '/certificates/finalis-nasional.jpg',
    shadowColor: '#FFD166',
    badgeColor: '#FFD166',
    title: {
      ID: 'Finalis — LKS DIKMEN Nasional 2025',
      EN: 'Finalist — LKS DIKMEN National 2025',
    },
    issuer: {
      ID: 'Pusat Prestasi Nasional',
      EN: 'National Achievement Center',
    },
    year: '2025',
    description: {
      ID: 'Terpilih sebagai finalis tingkat nasional pada ajang Lomba Kompetensi Siswa (LKS DIKMEN) 2025 bidang IT Network System Administration dengan kompetensi pada konfigurasi jaringan, administrasi Linux & Windows Server, VPN, dan deployment infrastruktur TI.',
      EN: 'Selected as a national finalist at the LKS DIKMEN 2025 competition in IT Network System Administration, with competencies in network configuration, Linux & Windows Server administration, VPN, and IT infrastructure deployment.',
    },
  },
  {
    id: 3,
    image: '/certificates/gold-provinsi.jpg',
    shadowColor: '#06D6A0',
    badgeColor: '#06D6A0',
    title: {
      ID: 'Juara 1 (Gold Medal) — LKS DIKMEN Tingkat Provinsi Jawa Tengah 2025',
      EN: '1st Place (Gold Medal) — LKS DIKMEN Central Java Province 2025',
    },
    issuer: {
      ID: 'Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah',
      EN: 'Department of Education and Culture, Central Java Province',
    },
    year: '2025',
    description: {
      ID: 'Menjadi finalis nasional pada ajang LKS DIKMEN 2025 dengan pengalaman dalam implementasi layanan enterprise, deployment server, serta troubleshooting jaringan dan sistem.',
      EN: 'Achieved national finalist status at LKS DIKMEN 2025 with hands-on experience in enterprise service implementation, server deployment, and network and system troubleshooting.',
    },
  },
  {
    id: 4,
    image: '/certificates/juara1-purbalingga-2025.jpg',
    shadowColor: '#EF476F',
    badgeColor: '#EF476F',
    title: {
      ID: 'Juara 1 — LKS DIKMEN Tingkat Kabupaten Purbalingga 2025',
      EN: '1st Place — LKS DIKMEN Purbalingga Regency 2025',
    },
    issuer: {
      ID: 'MKKS SMK Kabupaten Purbalingga',
      EN: 'MKKS SMK Purbalingga Regency',
    },
    year: '2025',
    description: {
      ID: 'Menunjukkan performa terbaik dalam kompetisi bidang administrasi jaringan dan server hingga berhasil meraih posisi pertama di tingkat kabupaten.',
      EN: 'Demonstrated outstanding performance in network and server administration competition, earning first place at the regency level.',
    },
  },
  {
    id: 5,
    image: '/certificates/juara1-purbalingga-2024.jpg',
    shadowColor: '#FF6B35',
    badgeColor: '#FF6B35',
    title: {
      ID: 'Juara 1 — LKS DIKMEN Tingkat Kabupaten Purbalingga 2024',
      EN: '1st Place — LKS DIKMEN Purbalingga Regency 2024',
    },
    issuer: {
      ID: 'MKKS SMK Kabupaten Purbalingga',
      EN: 'MKKS SMK Purbalingga Regency',
    },
    year: '2024',
    description: {
      ID: 'Mengembangkan kemampuan teknis dan problem solving pada bidang infrastruktur TI melalui kompetisi LKS tingkat Kabupaten Purbalingga tahun 2024.',
      EN: 'Developed technical skills and problem-solving abilities in IT infrastructure through the LKS competition at Purbalingga Regency level in 2024.',
    },
  },
  {
    id: 6,
    image: '/certificates/bnsp.jpg',
    shadowColor: '#7B2FBE',
    badgeColor: '#7B2FBE',
    title: {
      ID: 'KKNI Level II Kompetensi Keahlian Teknik Komputer dan Jaringan',
      EN: 'KKNI Level II — Computer and Network Engineering Competency',
    },
    issuer: {
      ID: 'Badan Nasional Sertifikasi Profesi (BNSP)',
      EN: 'National Professional Certification Agency (BNSP)',
    },
    year: '2025',
    description: {
      ID: 'Dinyatakan kompeten pada bidang pekerjaan Jaringan Komputer sesuai standar KKNI Level II melalui sertifikasi resmi dari BNSP dengan cakupan kompetensi instalasi, konfigurasi, dan pengelolaan jaringan komputer.',
      EN: 'Declared competent in Computer Networking according to KKNI Level II standards through official BNSP certification, covering installation, configuration, and management of computer networks.',
    },
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    photo: '/testimonials/sutanto-skomm.jpeg',
    name: 'Sutanto, S.Kom.',
    role: {
      ID: 'Guru Pembimbing LKS',
      EN: 'LKS Supervising Teacher',
    },
    institution: 'SMK Negeri 1 Karanganyar Purbalingga',
    quote: {
      ID: 'Yang bikin saya terkesan, Andika tidak pernah panik saat ada masalah justru makin fokus. Migrasi server dari Windows ke Linux yang kami khawatirkan berbulan-bulan, ia selesaikan tanpa hambatan berarti.',
      EN: 'What impressed me most was that Andika never panicked under pressure he only got more focused. The Windows-to-Linux server migration we had been worried about for months, he handled without a hitch.',
    },
    rating: 5,
  },
  {
    id: 2,
    photo: '/testimonials/anis-muhanifa.jpeg',
    name: 'Anis Muhanifa, S.Kom.',
    role: {
      ID: 'Guru TKJ',
      EN: 'Computer Networking Teacher',
    },
    institution: 'SMK Negeri 1 Karanganyar Purbalingga',
    quote: {
      ID: 'Jarang ada siswa yang bisa belajar sendiri, salah, lalu memperbaiki tanpa perlu diarahkan ulang. Andika salah satunya dan itu yang membuat perkembangannya begitu cepat.',
      EN: 'It\'s rare to find a student who can learn on their own, make mistakes, and fix them without needing to be redirected. Andika is one of them and that\'s what made his growth so rapid.',
    },
    rating: 5,
  },
  {
    id: 3,
    photo: '/testimonials/zain-nurrohman.jpeg',
    name: 'Zaen Nurrohman, S.Kom.',
    role: {
      ID: 'Guru TKJ',
      EN: 'Computer Networking Teacher',
    },
    institution: 'SMK Negeri 1 Karanganyar Purbalingga',
    quote: {
      ID: 'Persiapan lomba itu berat, mulai dari latihan berjam-jam, modul yang terus berubah, tekanan waktu. Tapi Andika justru terlihat menikmatinya. Mentalnya di situ yang sulit dicari.',
      EN: 'Competition prep is grueling hours of practice, ever-changing modules, time pressure. But Andika seemed to actually enjoy it. That kind of mindset is hard to come by.',
    },
    rating: 5,
  },
  {
    id: 4,
    photo: '/testimonials/faidul-rochman.jpeg',
    name: 'Faidul Rochman, S.Kom.',
    role: {
      ID: 'Guru TKJ',
      EN: 'Computer Networking Teacher',
    },
    institution: 'SMK Negeri 1 Karanganyar Purbalingga',
    quote: {
      ID: 'Saya pernah melempar masalah jaringan yang cukup rumit ke Andika, bukan untuk diuji, tapi karena penasaran. Ia tidak langsung jawab, tapi prosesnya runtut dan solusinya tepat. Itu yang saya suka.',
      EN: 'I once threw a fairly complex network problem at Andika, not to test him, but out of curiosity. He did not answer right away, but his thinking process was structured and his solution was spot-on. That is what I appreciated.',
    },
    rating: 5,
  },
  {
    id: 5,
    photo: '/testimonials/bungsu-atmaja.jpeg',
    name: 'Bungsu Atmaja, S.Kom.',
    role: {
      ID: 'Guru TKJ',
      EN: 'Computer Networking Teacher',
    },
    institution: 'SMK Negeri 1 Karanganyar Purbalingga',
    quote: {
      ID: 'Sampai di tingkat nasional itu bukan hal mudah. Mungkin belum podium, tapi predikat finalis dan Medalist for Excellence yang ia bawa pulang justru cerita yang lebih jujur, tentang seberapa jauh ia bisa pergi dari titik awalnya.',
      EN: 'Making it to the national level is no small thing. Maybe not on the podium, but the Finalist title and Medalist for Excellence he brought home tell a more honest story, about how far he has come from where he started.',
    },
    rating: 5,
  },
  {
    id: 6,
    photo: '/testimonials/hellyos-ageng.jpeg',
    name: 'Hellyos Ageng Haqiqie',
    role: {
      ID: 'Rekan Mahasiswa S1 Teknik Robotika & Kecerdasan Buatan',
      EN: 'Fellow Student, Robotics & AI Engineering',
    },
    institution: 'Universitas Airlangga',
    quote: {
      ID: 'Tanya soal Linux ke Andika itu seperti buka dokumentasi, lengkap, jelas, dan langsung ke intinya. Bedanya, dia juga sabar nemenin kamu sampai paham beneran.',
      EN: 'Asking Andika about Linux is like opening the documentation, complete, clear, and straight to the point. Except he is also patient enough to stick with you until you actually understand.',
    },
    rating: 5,
  },
  {
    id: 7,
    photo: '/testimonials/arya-prasetya.jpeg',
    name: 'Arya Prasetya Wibawa',
    role: {
      ID: 'Rekan Mahasiswa S1 Teknik Robotika & Kecerdasan Buatan',
      EN: 'Fellow Student, Robotics & AI Engineering',
    },
    institution: 'Universitas Airlangga',
    quote: {
      ID: 'Waktu ngerjain proyek robot bareng, yang bikin nyaman itu bukan cuma skillnya, tapi cara dia kalau ada bagian yang macet. Nggak ngeluh, langsung cari jalan lain. Enak banget diajak kerja sama.',
      EN: 'Working on the robot project together, what made it comfortable was not just his skills, it was how he handled roadblocks. No complaining, just finding another way forward. Really easy to work with.',
    },
    rating: 5,
  },
  {
    id: 8,
    photo: '/testimonials/bima-ardhia.jpeg',
    name: 'Bima Ardhia Vardhan',
    role: {
      ID: 'Rekan Mahasiswa S1 Teknik Robotika & Kecerdasan Buatan',
      EN: 'Fellow Student, Robotics & AI Engineering',
    },
    institution: 'Universitas Airlangga',
    quote: {
      ID: 'Hal yang paling saya ingat dari kerja bareng Andika, dia nggak pernah setengah-setengah. Kalau ada yang belum beres, dia bakal duduk sampai beres. Itu beda banget sama orang kebanyakan.',
      EN: 'The thing I remember most about working with Andika, he never did things halfway. If something was not right, he would sit there until it was. That is genuinely rare.',
    },
    rating: 5,
  },
];

export const githubStats = {
  totalRepos: 1,
  stars: 0,
  contributions: 5,
  followers: 0,
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certificates", href: "#certificates" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

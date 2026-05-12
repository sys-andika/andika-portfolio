# AI Agent Prompt — Fix Send Message (Vercel) + Fix Horizontal Scroll

---

# BAGIAN 1 — Fix Send Message Gagal Setelah Deploy ke Vercel

## MASALAH
Fitur Send Message menggunakan EmailJS berjalan normal di localhost, tapi error setelah di-deploy ke Vercel. Penyebab utama: file `.env.local` tidak ikut ter-push ke GitHub (karena ada di `.gitignore`), sehingga Vercel tidak punya environment variable EmailJS sama sekali.

---

## LANGKAH 1 — Tambah ENV di Vercel Dashboard (DILAKUKAN MANUAL oleh pemilik web)

> AI Agent tidak bisa mengakses Vercel dashboard. Instruksikan pemilik web:

1. Buka https://vercel.com → pilih project portfolio
2. Klik **Settings** → **Environment Variables**
3. Tambahkan 3 variable berikut (salin dari file `.env.local` lokal):

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID   = nilai dari .env.local
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID  = nilai dari .env.local
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY   = nilai dari .env.local
```

4. Pilih environment: **Production**, **Preview**, **Development** (centang semua)
5. Klik **Save**
6. Klik **Deployments** → pilih deployment terbaru → klik **Redeploy**

---

## LANGKAH 2 — Pastikan Kode EmailJS Sudah Benar di `ContactSection.tsx`

Cek bagian pemanggilan `emailjs.send`, pastikan menggunakan `process.env` bukan string hardcode:

```tsx
await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  {
    from_name: data.name,
    from_email: data.email,
    subject: data.subject,
    message: data.message,
  },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
)
```

## LANGKAH 3 — Tambah Console Log Sementara untuk Debug

Tambahkan di awal fungsi `handleSubmit`:

```tsx
console.log('ENV check:', {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ? 'OK' : 'MISSING',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ? 'OK' : 'MISSING',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? 'OK' : 'MISSING',
})
```

Setelah dipastikan berfungsi, hapus console log ini.

---

# BAGIAN 2 — Fix Horizontal Scroll (Web Bisa Digeser Kiri Kanan di HP)

## MASALAH
Web bisa di-scroll ke kiri dan ke kanan di HP, menyebabkan logo navbar terpotong dan tampilan berantakan.

---

## LANGKAH 1 — Tambah CSS di `src/app/globals.css`

```css
html,
body {
  overflow-x: hidden;
  max-width: 100%;
}
```

## LANGKAH 2 — Cek Elemen yang Keluar Batas

Cek semua file section. Jika ada elemen yang menggunakan nilai negatif (`left`, `right`, `translateX`) atau `width` melebihi `100vw`, tambahkan `overflow-hidden` pada **wrapper/parent**-nya saja — jangan ubah elemen itu sendiri.

---

## ⛔ LARANGAN KERAS — WAJIB DIPATUHI

**HANYA boleh mengubah:**
- `src/app/globals.css` — hanya tambah `overflow-x: hidden` dan `max-width: 100%`
- `src/components/sections/ContactSection.tsx` — hanya bagian pemanggilan `emailjs.send` jika ada yang salah
- Wrapper/parent elemen yang keluar batas — hanya tambah `overflow-hidden`

**DILARANG KERAS mengubah:**
- Warna apapun
- Animasi / Framer Motion apapun
- Konten / teks apapun
- Layout, styling, className apapun selain yang disebutkan
- Logic / fungsi apapun selain `emailjs.send`
- File apapun selain yang disebutkan di atas

Jika ada keraguan apakah sesuatu perlu diubah atau tidak — **JANGAN UBAH**.

---

## CARA TEST SETELAH SELESAI

**Test EmailJS:**
1. Deploy ulang di Vercel setelah ENV ditambahkan
2. Isi form kontak → klik Send Message
3. Cek email `andikadwisatrio08@gmail.com` — pesan harus masuk

**Test Horizontal Scroll:**
1. Buka web di HP atau DevTools (375px)
2. Coba geser layar ke kiri/kanan — **tidak boleh bisa digeser sama sekali**
3. Logo "ANDIKA SATRIO" di navbar harus tampil penuh

---

*Fix untuk: Andika Dwi Satrio Portfolio — EmailJS Vercel + Horizontal Scroll*

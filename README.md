# Riviera Baku — Restaurant • Lounge • Park

Modern, single-page website for **Riviera Baku**, a restaurant & lounge concept with a premium, park-side atmosphere.  
Built with Vite + React and styled using Tailwind for a clean, spacious, and mobile-friendly UI.

---

## 🌐 Live Demo

👉 **Netlify:** https://riviera-site.netlify.app/

---

## 🧰 Tech Stack

- ⚛️ **React** (SPA)
- ⚡ **Vite** – dev server & bundler
- 🎨 **Tailwind CSS**
- 🧭 **React Router** – client-side routing
- 🧩 Custom components & layout logic

---

## ✨ Main Features

- **Single-page experience** with smooth navigation between sections  
- **Sticky navbar** with smooth scrolling and offset handling  
- **Responsive layout** for desktop, tablet, and mobile  
- **Menu section** with structured items and category-based layout  
- **Gallery / visuals** to highlight the atmosphere of the venue  
- **Contact & location info** with clear call-to-actions  
- **Premium look & feel** via generous whitespace, typography, and spacing

---

## 🚀 Getting Started (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/Murad683/rivierabaku.git
cd rivierabaku
2. Install dependencies
bash
Kodu kopyala
npm install
Node.js 18+ və npm tələb olunur.

3. Run development server
bash
Kodu kopyala
npm run dev
Terminalda çıxan linki (adətən http://localhost:5173) brauzerdə aç.

4. Create production build
bash
Kodu kopyala
npm run build
İstəyə görə: production build-i lokalda yoxlamaq üçün:

bash
Kodu kopyala
npm run preview
📁 Project Structure (High-Level)
text
Kodu kopyala
rivierabaku/
├── src/
│   ├── assets/        # Şəkillər və digər media faylları
│   ├── components/    # Bölmə komponentləri (Hero, Menu, Gallery, Contact, Footer və s.)
│   ├── pages/         # Route-lara uyğun səhifə wrapper-ləri
│   ├── App.jsx        # Router və əsas layout
│   └── main.jsx       # React giriş nöqtəsi
├── index.html         # Root HTML faylı
├── package.json       # Skriptlər və asılılıqlar
├── tailwind.config.js # Tailwind konfiqurasiyası
├── postcss.config.js  # PostCSS konfiqurasiyası
└── vite.config.js     # Vite konfiqurasiyası

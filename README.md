# 4PMGUYS Studio — Official Landing Page & Game Catalog

[![Production Live](https://img.shields.io/badge/Production-Live%20at%204pmguys.loc.cc-7317ba)](https://4pmguys.loc.cc)
[![Built With](https://img.shields.io/badge/Framework-React%2019%20%2B%20TypeScript-blue)](https://react.dev)
[![Styles](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-381970)](https://tailwindcss.com)
[![Motion](https://img.shields.io/badge/Animation-GSAP%20%2B%20Framer%20Motion-emerald)](https://gsap.com)

Official high-fidelity landing page for **4PMGUYS Game Studio & Independent Publishing Label**.

---

## 🎮 Featured Titles

- **PROJECT: DUSKWALKER** — Next-Generation Dark Action RPG / Souls-like (Unreal Engine 5.5)
- **NEON OVERDRIVE: 2099** — High-Velocity Cyberpunk Extraction Shooter & Tactical PvPvE
- **VOID STRIDER: ZERO** — Cosmic Horror Sci-Fi Roguelike & Space Exploration
- **CHRONICLES OF ECLIPSE** — Dark Fantasy Action Adventure & Shifting Eclipse Combat
- **IRONFANG LEGION** — Real-Time Tactical Squad Command & Medieval Siege Strategy
- **MIDNIGHT PROTOCOL** — Cyberpunk Infiltration & Atmospheric Espionage

---

## 🌐 Live Hosting & Deployment

This repository is configured to run on custom domain **`4pmguys.loc.cc`**:

- **Root Production Assets**: `index.html` at the repository root points directly to optimized, bundled JavaScript and CSS in `./assets/` with relative resolution.
- **Custom Domain**: Configured via [`CNAME`](./CNAME) (`4pmguys.loc.cc`).
- **CI/CD Workflow**: Automated deployment available via [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server with HMR
npm run dev

# Lint codebase (Oxlint)
npm run lint

# Production build & sync to root
npm run build
```

---

## 📬 Contact & Inquiries

- **Direct Inquiries / Pitch Submissions**: `contact@4pmguys.loc.cc`
- **Studio Portfolio**: [https://4pmguys.loc.cc](https://4pmguys.loc.cc)

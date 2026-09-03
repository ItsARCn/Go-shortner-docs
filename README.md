# GO Documentation

[![Nuxt](https://img.shields.io/badge/Nuxt-4.x-00DC82?style=flat&logo=nuxt.js)](https://nuxt.com)
[![Docus](https://img.shields.io/badge/Docus-v4-00DC82?style=flat)](https://docus.dev)
[![Nuxt UI](https://img.shields.io/badge/Nuxt_UI-v3-00DC82?style=flat)](https://ui.nuxt.com)
[![Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

The official documentation website for **[GO Shortener](https://github.com/ItsARCn/Go-shortner)**, deployed at **[docs.arcn.online](https://docs.arcn.online)**.

Built on top of the official **Docus** documentation framework powered by Nuxt 4, Nuxt Content v3, and Nuxt UI.

---

## ✨ Features

- ⚡ **Nuxt 4 & Docus Layer**: Fast, optimized, and SEO-ready documentation platform.
- 🎨 **Modern Design**: Clean typography and styling matching the GO Shortener brand.
- 📱 **Fully Responsive**: Mobile-first layout with smooth navigation drawers and aside bars.
- 🌙 **Dark & Light Mode**: Built-in instant theme switching.
- 🔍 **Full-Text Documentation Search**: Native Docus static client search across all pages without external search vendors or AI dependencies.
- 🛡️ **Zero AI Runtime**: Strictly deterministic documentation with no runtime AI models, chatbots, or gateway tokens.
- 🚀 **Vercel Optimized**: Configured for instant deployment on Vercel.

---

## 📁 Documentation Structure

```text
content/
├── index.md                   # Documentation Landing Page
├── 1.introduction/            # What is GO? & Features Matrix
├── 2.getting-started/         # Installation, Configuration, First Setup, Updating
├── 3.user-guide/              # Creating Links, Expiration, Renewals, Dashboard, Analytics
├── 4.authentication/          # Email Login, Google OAuth, Firebase Setup
├── 5.captcha/                 # Cloudflare Turnstile Bot Protection
├── 6.administration/          # Admin Panel, Users, Links, Reports, Bans & Timeouts, Audit Logs
├── 7.deployment/              # VPS Installation, Env Vars, Cloudflare Tunnel, Systemd, Updating
├── 8.developer/               # Architecture, API Design, SQLite WAL Database, Development, Releases
└── 9.reference/               # Configuration Reference, API Reference, Changelog
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- [Node.js](https://nodejs.org/) v18.18+ or v20+
- `npm` (or `pnpm` / `bun`)

### Setup & Run
```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the documentation with hot module reloading.

---

## 📦 Production Build

To compile the documentation project for production:

```bash
# Generate production server build
npm run build

# Preview the built application locally
npm run preview
```

The output files are generated in `.output/`, optimized for high-performance serverless or Node.js hosting.

---

## 🌐 Deploying to Vercel

The documentation project is pre-configured for deployment to **Vercel**:

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push this repository to GitHub (`ItsARCn/Go-shortner-docs`).
2. Log into the [Vercel Dashboard](https://vercel.com) and click **Add New Project**.
3. Import the `Go-shortner-docs` repository.
4. Vercel automatically detects **Nuxt.js**:
   - **Framework Preset**: `Nuxt`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.output`
5. Click **Deploy**.

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Configuring Custom Domain (`docs.arcn.online`)

1. In your Vercel Project Settings, navigate to **Domains**.
2. Add `docs.arcn.online`.
3. In your Cloudflare DNS settings for `arcn.online`:
   - Add a `CNAME` record:
     - **Name**: `docs`
     - **Target**: `cname.vercel-dns.com`
     - **Proxy status**: DNS only (or Proxied with Full SSL)
4. Once verified, your documentation will be live at `https://docs.arcn.online`.

---

## 📄 License

This documentation project is licensed under the [MIT License](LICENSE).

# Cynthia Okanda — Portfolio & Scalable Systems Platform

A production-grade, responsive single-page portfolio and advertisement platform for **Cynthia Okanda**, Software Engineer & Web Designer specializing in Scalable Systems, Emerging Technologies, and Ad-Tech infrastructure (including the **WiFi Reach** captive portal advertising platform).

Built with **React 19**, **Tailwind CSS v4**, **TypeScript**, and **Lucide Icons**.

---

## ✨ Key Features & Sections

1. **Top Announcement Banner**: Real-time project booking notification with one-click dismiss and direct contact action.
2. **Sticky Navigation Bar**: Clean 3-zone architecture with scroll spy, responsive mobile drawer, dark/light mode toggle, and hot-pink "Hire Me" button.
3. **Hero Section**:
   - Dynamic typing effect cycling through *Software Engineer*, *Web Designer*, *Scalable Systems Builder*, and *Tech Explorer*.
   - High-fidelity portrait in a continuous gradient-blob frame.
   - Interactive CTAs: *View My Work* (smooth scroll) and *Download CV* (opens printable modal).
   - Live availability pulsing green badge and floating tech badges.
4. **Rotating Promotional Carousel**: Advertising specialized services with auto-play, pause-on-hover, and direct CTAs.
5. **About Me**: Narrative bio + animated count-up counters (Years of Experience, Projects Shipped, Tech Mastered, Happy Clients).
6. **Skills Matrix**: Categorized interactive progress bars (Frontend, Backend, Systems & Architecture, DevOps/Cloud, UI/UX).
7. **Technologies & Frameworks**: Interactive 3D lift/tilt/glow cards with stack filters + continuous infinite marquee ribbon.
8. **Projects Showcase**: Filterable cards (All, Web, Design, Systems) with high-res previews, metrics, live demo links, and smooth zoom detail modal.
9. **Specialized Services**: Transparent deliverables, turnaround estimates, and quote request pre-fill.
10. **Experience & Education**: Alternating vertical timeline documenting career leadership and academic achievements.
11. **Testimonials**: Auto-rotating client quotes with 5-star rating badges and verified project contexts.
12. **Validated Contact Form**: Full client-side validation, service pre-selection, celebratory confetti, and direct email/phone/social channels.
13. **Floating WhatsApp Chat**: Quick-launch messaging widget with pulse animation.

---

## 🎨 Strict Color Palette & Design Tokens

- **Primary Blue**: `#2563EB` (action buttons, links, hero gradients)
- **Hot Pink**: `#EC4899` (highlights, badges, "Hire Me" button)
- **Fresh Green**: `#10B981` (live availability indicator, success metrics)
- **Dark Text**: `#0F172A` (maximum legibility and WCAG AA contrast)
- **Soft Light Canvas**: `#F8FAFC`
- **Deep Navy Dark Mode**: `#0B1120` & `#131E36`

---

## 🛠️ Project Structure

```
├── index.html                    # SEO tags, OpenGraph, Twitter Cards, Schema.org JSON-LD
├── metadata.json                 # AI Studio configuration
├── src/
│   ├── assets/images/            # High-fidelity portrait and project dashboard mockups
│   ├── components/
│   │   ├── AnnouncementBanner.tsx# Top notification banner
│   │   ├── Navbar.tsx            # Sticky navigation with theme toggle & mobile drawer
│   │   ├── Hero.tsx              # Typing effect, portrait frame & floating badges
│   │   ├── PromoCarousel.tsx     # Auto-rotating promotional service banner
│   │   ├── About.tsx             # Biography & animated count-up metrics
│   │   ├── Skills.tsx            # Animated progress bars & categorized tabs
│   │   ├── Technologies.tsx      # Hover glow tech cards & infinite logo marquee
│   │   ├── Projects.tsx          # Filterable project showcase
│   │   ├── ProjectModal.tsx      # Deep-dive zoom modal with architecture specs
│   │   ├── Services.tsx          # Commercial services & quote requests
│   │   ├── Experience.tsx        # Vertical career & education timeline
│   │   ├── Testimonials.tsx      # Auto-rotating client feedback carousel
│   │   ├── Contact.tsx           # Validated contact form & direct channels
│   │   ├── Footer.tsx            # Wordmark, navigation, back-to-top button
│   │   ├── FloatingWhatsApp.tsx  # Pulsing floating chat widget
│   │   └── CvModal.tsx           # Printable resume & qualifications modal
│   ├── data/
│   │   └── portfolioData.ts      # Single source of truth for all content & links
│   ├── hooks/
│   │   └── useDarkMode.ts        # Dark mode controller with localStorage persistence
│   ├── types/
│   │   └── index.ts              # TypeScript schemas for projects, skills & services
│   ├── App.tsx                   # Master single-page layout
│   ├── index.css                 # Tailwind CSS v4 setup, variables & animations
│   └── main.tsx                  # React 19 entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

---

## ✏️ How to Customize

### Edit Content & Links
All text, project details, skills, metrics, and social handles are located in `src/data/portfolioData.ts`. Update the exports in this file to update the entire site instantly without touching UI markup:
- `PERSONAL_INFO`: Name, email, phone, location, social URLs, and bio.
- `PROJECTS`: Add or edit case studies, metrics, live URLs, and screenshots.
- `SERVICES`: Update pricing, deliverables, and timelines.
- `SKILL_CATEGORIES`: Adjust skill percentages and proficiencies.

### Change Theme Colors
Modify the CSS custom properties in `src/index.css`:
```css
:root {
  --primary-blue: #2563EB;
  --hot-pink: #EC4899;
  --fresh-green: #10B981;
}
```

---

## 🌐 Deployment Guide

### Deploying to Vercel
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Framework preset: **Vite**.
4. Build command: `npm run build`. Output directory: `dist`.
5. Click **Deploy**.

### Deploying to Netlify
1. Connect your repository in [Netlify](https://netlify.com).
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Deploy!

### Deploying to Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize: `firebase init hosting` (set `dist` as public directory, configure as single-page app: `Yes`)
3. Build & Deploy:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

# Performance Optimization Checklist

## ✅ Implemented

### 1. **Reduce Unused JavaScript**
- **Route-level code splitting**: All page components (Student, Employee, About, Blog1–17, etc.) now lazy-load via `React.lazy()`
- **Mainhome** loads eagerly (critical path for homepage)
- **Suspense fallback**: Loading spinner shown during route transitions
- **Impact**: Initial JS bundle ~40–60% smaller; Blog/post pages load on demand

### 2. **LCP (Largest Contentful Paint)**
- **Homehero.webp** (main hero image):
  - `loading="eager"` + `fetchPriority="high"`
  - `width={1200}` `height={675}` to prevent CLS
  - Preload in `index.html`: `<link rel="preload" as="image" href="/images/Homehero.webp" />`
- **Impact**: Browser prioritizes LCP image, reserves layout space

### 3. **CLS (Cumulative Layout Shift)**
- All LCP and above-fold images have explicit `width` and `height`
- Homehero side images (`hleft.png`, `hright.png`): `width={400}` `height={600}`

### 4. **Image Optimization**
- **WebP with fallback**: `OptimizedImage` and `<picture>` for PNG/JPG
- **Lazy loading**: Below-fold images use `loading="lazy"` + `decoding="async"`
- **Homehero overlays**: Lazy-loaded (hidden on mobile, below fold)

### 5. **OptimizedImage Component**
- Supports `srcset` and `sizes` for responsive images
- WebP source with PNG/JPG fallback
- `priority` prop for above-fold images

---

## 📋 Manual Steps (Image Conversion)

### Convert PNG/JPG → WebP
Place WebP files next to originals in `public/images/`:

```bash
# Using cwebp (install: https://developers.google.com/speed/webp/download)
cwebp -q 82 home-second.png -o home-second.webp
cwebp -q 82 home-fourth.png -o home-fourth.webp
cwebp -q 82 hleft.png -o hleft.webp
cwebp -q 82 hright.png -o hright.webp
# Repeat for other PNGs in codebase
```

**Online tools**: [Squoosh](https://squoosh.app), [CloudConvert](https://cloudconvert.com/png-to-webp)

### Responsive srcset (Optional)
For key images, generate multiple sizes (e.g. 400w, 800w, 1200w) and add:

```jsx
<OptimizedImage
  src="/images/hero.png"
  srcset="/images/hero-400.webp 400w, /images/hero-800.webp 800w, /images/hero-1200.webp 1200w"
  sizes="(max-width: 768px) 100vw, 800px"
  alt="..."
/>
```

---

## 🏗️ Build / CDN

### Minification (Already Handled)
- `react-scripts build` minifies JS/CSS and enables production optimizations
- Vercel enables Brotli/Gzip compression automatically

### Vercel Headers
- `vercel.json` sets Cache-Control for static assets (JS, CSS, images)
- Edge caching for HTML with `Vercel-CDN-Cache-Control`

### CDN / Image Hosting (Optional)
- **Cloudinary** or **Imgix**: Auto WebP/AVIF, resizing, lazy-load
- **Cloudflare Images**: Similar features
- Update image `src` to CDN URLs when ready

---

## 📊 Expected Impact

| Metric          | Before      | After (typical) |
|-----------------|-------------|-----------------|
| FCP             | Baseline    | Improved (smaller initial JS) |
| LCP             | Baseline    | Improved (eager hero, preload) |
| TTI             | Baseline    | Improved (less JS upfront) |
| CLS             | Baseline    | Improved (sized images) |
| Unused JS       | High        | Lower (lazy routes) |

---

## 🔧 Lazy-Loading Instructions

- **New routes**: Use `lazy(() => import('./Page'))` in `App.js`
- **Non-critical components**: Wrap in `React.lazy` and render inside `<Suspense>`
- **FloatingQr / Footer**: Can stay eager (lightweight) or lazy if desired

/**
 * Post-build: Inline critical CSS and defer non-critical stylesheet loading.
 * Improves FCP by rendering above-the-fold content without blocking on full CSS.
 */
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '../build');
const indexPath = path.join(buildDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.warn('scripts/critical-css: build/index.html not found, skipping');
  process.exit(0);
}

let html = fs.readFileSync(indexPath, 'utf8');

// 1. Inline critical CSS for above-the-fold (Navbar + Homehero + root layout)
const criticalCSS = `*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid}html,:host{line-height:1.5;-webkit-text-size-adjust:100%}body{margin:0;line-height:inherit}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}img,video{max-width:100%;height:auto;display:block}#root{min-height:100vh}header,nav{display:block}.w-full{width:100%}.min-h-\\[72px\\]{min-height:72px}.flex{display:flex}.hidden{display:none}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-3{gap:.75rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.pt-4{padding-top:1rem}.pt-8{padding-top:2rem}.pb-0{padding-bottom:0}.mx-auto{margin-left:auto;margin-right:auto}.max-w-6xl{max-width:72rem}.rounded-\\[32px\\]{border-radius:32px}.border{border-width:1px}.bg-white{background-color:#fff}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.from-white{--tw-gradient-from:#fff;--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.to-gray-50{--tw-gradient-to:#f9fafb}.text-center{text-align:center}.font-bold{font-weight:700}.text-xs{font-size:.75rem}.text-2xl{font-size:1.5rem}.text-\\[15px\\]{font-size:15px}.font-medium{font-weight:500}.text-\\[#5C6174\\]{color:#5c6174}.text-\\[#5C2DD5\\]{color:#5c2dd5}.text-\\[#4D4F58\\]{color:#4d4f58}.text-\\[#2B1BDD\\]{color:#2b1bdd}.hover\\:text-\\[#5C2DD5\\]:hover{color:#5c2dd5}.border-\\[#EAECF4\\]{border-color:#eaecf4}.object-contain{object-fit:contain}.h-8{height:2rem}.w-auto{width:auto}.cursor-pointer{cursor:pointer}@media(min-width:768px){.md\\:flex{display:flex}.md\\:px-0{padding-left:0;padding-right:0}.md\\:inline-flex{display:inline-flex}}`;

// 2. Insert critical CSS as first style in head
const styleTag = `<style id="critical-css">${criticalCSS}</style>`;
if (!html.includes('id="critical-css"')) {
  html = html.replace(/<head>/i, `<head>${styleTag}`);
}

// 3. Defer non-critical CSS: change main stylesheet to load asynchronously
html = html.replace(
  /<link\s+[^>]*href="(\/static\/css\/[^"]+)"[^>]*>/g,
  (match, href) => {
    return `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'" /><noscript><link rel="stylesheet" href="${href}" /></noscript>`;
  }
);

fs.writeFileSync(indexPath, html);
console.log('scripts/critical-css: Inlined critical CSS and deferred main stylesheet');

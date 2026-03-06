/**
 * Batch DOM reads and writes to prevent forced reflow.
 * Pattern: ALL reads first, then ALL writes.
 * Run inside requestAnimationFrame when called from useEffect for best results.
 */
export function applyPageMeta(meta) {
  const { title, description, canonical, keywords, ogTags = [], twitterTags = [] } = meta;
  if (!title && !description && !canonical) return;

  // === BATCH 1: All DOM reads (no writes) ===
  const metaDescEl = document.querySelector('meta[name="description"]');
  const canonicalEl = document.querySelector('link[rel="canonical"]');
  const keywordsEl = document.querySelector('meta[name="keywords"]');
  const ogEls = ogTags.map((t) => document.querySelector(`meta[property="${t.property}"]`));
  const twitterEls = twitterTags.map((t) => document.querySelector(`meta[name="${t.name}"]`));

  // === BATCH 2: All DOM writes ===
  if (title) document.title = title;

  const ensureMeta = (el, attrs, content) => {
    const node = el ?? (() => {
      const n = document.createElement('meta');
      Object.entries(attrs).forEach(([k, v]) => n.setAttribute(k, v));
      document.head.appendChild(n);
      return n;
    })();
    if (content !== undefined) node.content = content;
    return node;
  };

  const ensureLink = (el, href) => {
    const node = el ?? (() => {
      const n = document.createElement('link');
      n.rel = 'canonical';
      document.head.appendChild(n);
      return n;
    })();
    if (href) node.href = href;
    return node;
  };

  if (description) ensureMeta(metaDescEl, { name: 'description' }, description);
  if (canonical) ensureLink(canonicalEl, canonical);
  if (keywords) ensureMeta(keywordsEl, { name: 'keywords' }, keywords);

  ogTags.forEach((tag, i) => {
    ensureMeta(ogEls[i], { property: tag.property }, tag.content);
  });
  twitterTags.forEach((tag, i) => {
    ensureMeta(twitterEls[i], { name: tag.name }, tag.content);
  });
}

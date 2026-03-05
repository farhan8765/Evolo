import React from "react";

/**
 * OptimizedImage - WebP with fallback, optional srcset, LCP-friendly.
 * Use srcset for responsive images: e.g. srcset="img-400w.webp 400w, img-800w.webp 800w"
 */
export default function OptimizedImage({
  src,
  alt,
  className = "",
  loading = "lazy",
  priority = false,
  srcset,
  sizes,
  width,
  height,
  ...props
}) {
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  const webpSrcset = srcset?.replace(/\.(png|jpg|jpeg)/gi, ".webp");
  const isRasterImage = /\.(png|jpg|jpeg)$/i.test(src);

  if (!isRasterImage) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
        {...props}
      />
    );
  }

  return (
    <picture>
      {webpSrcset && (
        <source
          srcSet={webpSrcset}
          type="image/webp"
          sizes={sizes}
        />
      )}
      {!webpSrcset && <source srcSet={webpSrc} type="image/webp" />}
      <img
        src={src}
        srcSet={srcset}
        sizes={sizes}
        alt={alt}
        className={className}
        loading={priority ? "eager" : loading}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        width={width}
        height={height}
        {...props}
      />
    </picture>
  );
}

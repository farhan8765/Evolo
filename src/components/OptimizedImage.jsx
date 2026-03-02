import React from "react";

export default function OptimizedImage({
  src,
  alt,
  className = "",
  loading = "lazy",
  priority = false,
  ...props
}) {
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  const isRasterImage = /\.(png|jpg|jpeg)$/i.test(src);

  if (!isRasterImage) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        {...props}
      />
    );
  }

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        loading={priority ? "eager" : loading}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        {...props}
      />
    </picture>
  );
}

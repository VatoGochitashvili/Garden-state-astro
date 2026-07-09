const UNSPLASH_HOST = "images.unsplash.com";

export function optimizeImageSrc(src: string, width?: number): string {
  if (!src) return src;

  try {
    const url = new URL(src);
    if (url.hostname !== UNSPLASH_HOST) return src;

    // Keep source images compressed and in modern formats.
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "crop");
    url.searchParams.set("crop", "entropy");
    if (width) {
      url.searchParams.set("w", String(width));
    }

    return url.toString();
  } catch {
    return src;
  }
}

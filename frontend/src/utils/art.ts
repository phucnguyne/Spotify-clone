/** Small deterministic string hash (djb2-ish), always positive. */
export function hashStr(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h << 5) - h + input.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/**
 * Generates a unique CSS gradient "cover art" for a given seed string.
 * Used instead of placeholder emoji/images so every track and playlist
 * gets a distinctive, reproducible identity.
 */
export function artFor(seed: string): string {
  const h = hashStr(seed);
  const hue1 = h % 360;
  const hue2 = (h * 7) % 360;
  const x = 20 + (h % 60);
  const y = 20 + ((h >> 3) % 60);
  return `radial-gradient(circle at ${x}% ${y}%, hsl(${hue1} 85% 62%), transparent 55%), linear-gradient(135deg, hsl(${hue2} 60% 22%), hsl(${hue1} 55% 14%))`;
}

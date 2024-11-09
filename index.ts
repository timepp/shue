function hashString(s: string) {
    let hash = 0;
    if (s.length === 0) return hash;
    for (let i = 0; i < s.length; i++) {
        hash = (hash << 5) - hash;
        hash = hash + s.charCodeAt(i);
        hash = hash & hash;
    }
    return hash;
}

/**
 * get a hue (0-360) value based on the string
 * @param s the string
 * @returns hue value
 */
export function getHue(s: string): number {
    return Math.abs(hashString(s)) % 360;
}

/**
 * get a lighter color based on the string
 * @param s the string
 * @returns hsl(hue of the string, 50%, 90%)
 */
export function getLightColor(s: string): string {
    return `hsl(${getHue(s)}, 50%, 90%)`;
}

export function buildImage(s: string, w: number, h: number, q: number): string {
  return `https://dimages.cds.amcn.com/${w}x${h}/smart/filters:quality(${q}):format(jpg)/${s.replace(
    'https://',
    ''
  )}`;
}

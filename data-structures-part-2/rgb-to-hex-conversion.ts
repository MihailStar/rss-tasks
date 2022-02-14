function toHex(d: number): string {
  return (
    d < 0 ? '00' : d > 255 ? 'ff' : `0${d.toString(16)}`.slice(-2)
  ).toUpperCase();
}

export function rgb(r: number, g: number, b: number): string {
  return toHex(r) + toHex(g) + toHex(b);
}

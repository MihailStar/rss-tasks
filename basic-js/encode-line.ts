export function encodeLine(str: string): string {
  /* return str.replace(/(.)\1+/g, (match) => `${match.length}${match[0]}`); */
  return str.replace(
    /(.)\1+/g,
    (match, char: string) => `${match.length}${char}`
  );
}

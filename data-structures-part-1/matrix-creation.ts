export function getMatrix(n: number): Array<Array<number>> {
  return Array.from({ length: n }, () => Array.from({ length: n })).map(
    (y, yI) => y.map((x, xI) => (yI === xI ? 1 : 0))
  );
}

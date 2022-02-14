export function rotateMatrix(
  matrix: number[][],
  rotate: 'right' | 'left' = 'left'
): number[][] {
  const result: number[][] = [];

  for (let yI = 0; yI < matrix.length; yI += 1) {
    const y = matrix[yI];
    if (y === undefined) continue;
    const yILast = matrix.length - 1;

    for (let xI = 0; xI < y.length; xI += 1) {
      const x = y[xI];
      if (x === undefined) continue;
      const xILast = y.length - 1;

      if (rotate === 'left') {
        if (result[xILast - xI] === undefined) {
          result[xILast - xI] = [];
        }
        (result[xILast - xI] as number[])[yI] = x;
      } else {
        if (result[xI] === undefined) result[xI] = [];
        (result[xI] as number[])[yILast - yI] = x;
      }
    }
  }

  return result;
}

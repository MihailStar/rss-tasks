const CAT = '^^';

export function countCats(matrix: unknown[][]): number {
  let counter = 0;

  for (let y = 0; y < matrix.length; y += 1)
    for (let x = 0; x < matrix[y].length; x += 1)
      if (matrix[y][x] === CAT) counter += 1;

  return counter;
}

export function minesweeper(matrix: boolean[][]): number[][] {
  return matrix.map((row, y) =>
    row.map((_, x) => {
      let counter = 0;

      if (matrix[y + 1]?.[x]) counter += 1;     // ↑
      if (matrix[y][x + 1]) counter += 1;       // →
      if (matrix[y - 1]?.[x]) counter += 1;     // ↓
      if (matrix[y][x - 1]) counter += 1;       // ←

      if (matrix[y - 1]?.[x + 1]) counter += 1; // ↗
      if (matrix[y + 1]?.[x + 1]) counter += 1; // ↘
      if (matrix[y + 1]?.[x - 1]) counter += 1; // ↙
      if (matrix[y - 1]?.[x - 1]) counter += 1; // ↖

      return counter;
    })
  );
}

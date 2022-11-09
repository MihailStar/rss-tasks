export function getMatrixElementsSum(matrix: number[][]): number {
  const zeros: number[] = [];

  const sum = matrix.reduce((acc, row) => {
    const subSum =
      acc +
      row.reduce((subAcc, num, idx) => {
        if (num === 0) zeros[idx] = 0;

        return zeros[idx] === 0 ? subAcc : subAcc + num;
      }, 0);

    return subSum;
  }, 0);

  return sum;
}

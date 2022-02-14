/** Нечетное? */
const isOdd = (num: number) => num % 2 !== 0;
/** Целое? */
const isInteger = (num: number) => num === Math.trunc(num);

export function findSquares(num: number): string {
  if (!isOdd(num) || !isInteger(num) || num < 0 || num > 1_000_000) {
    throw new RangeError();
  }

  const squareRoot = Math.sqrt(num);

  let squareRootBefore = Math.trunc(squareRoot);
  let squareRootAfter = squareRootBefore + 1;

  while (true) {
    const squareBefore = squareRootBefore ** 2;
    const squareAfter = squareRootAfter ** 2;

    if (squareAfter - squareBefore === num) {
      return `${squareAfter}-${squareBefore}`;
    }

    squareRootBefore += 1;
    squareRootAfter += 1;
  }
}

/** @tutorial https://www.programiz.com/javascript/examples/decimal-binary */
function convertDecimalToBinary(n: number): number {
  /** остаток от деления на два, `0` или `1` */
  let remainder = 0;
  /** десятичное число */
  let decimal = n;
  /** двоичное число */
  let binary = 0;
  /** разряд двоичного числа */
  let bit = 1;

  while (decimal !== 0) {
    remainder = decimal % 2;
    decimal = Math.trunc(decimal / 2);
    binary += remainder * bit;
    bit *= 10;
  }

  return binary;
}

export const decToBin = (n: number): string =>
  String(convertDecimalToBinary(n));

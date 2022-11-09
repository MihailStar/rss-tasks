export function getSumOfDigits(n: number): number {
  const sum = [...`${n}`].reduce((result, digit) => result + +digit, 0);

  return sum > 9 ? getSumOfDigits(sum) : sum;
}

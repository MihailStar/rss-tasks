export function solve(num1: number, num2: number): [number, number] {
  let [a, b] = [num1, num2];

  if (a === 0 || b === 0) {
    return [a, b];
  }

  const twoTimesB = 2 * b;
  if (a >= twoTimesB) {
    a -= twoTimesB;
    return solve(a, b);
  }

  const twoTimesA = 2 * a;
  if (b >= twoTimesA) {
    b -= twoTimesA;
    return solve(a, b);
  }

  return [a, b];
}

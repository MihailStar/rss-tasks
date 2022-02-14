function calculateFactorial(n: number): number {
  return n ? n * calculateFactorial(n - 1) : 1;
}

export function factorial(n: number): number | null {
  if (n < 0) return null;

  return calculateFactorial(n);
}

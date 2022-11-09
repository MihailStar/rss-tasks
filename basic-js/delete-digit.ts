export function deleteDigit(n: number): number {
  const digits = Array.from(String(n));
  const numbers = Array.from({ length: digits.length }, (_, numberIndex) =>
    Number(
      digits.reduce(
        (result, digit, digitIndex) =>
          numberIndex === digitIndex ? result : result + digit,
        ''
      )
    )
  );

  return Math.max(...numbers);
}

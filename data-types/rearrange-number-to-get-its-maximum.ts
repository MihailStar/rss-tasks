const isZero = (num: number): boolean => num === 0;
const isNegative = (num: number): boolean => num < 0;
const isThreeDigitInteger = (num: number): boolean =>
  /^\d{3}$/.test(String(num));

export function maxRedigit(num: number): number | null {
  if (!isThreeDigitInteger(num)) return null;

  return Number.parseInt(
    Array.from(num.toString(10))
      .sort((a, b) => Number(b) - Number(a))
      .join(''),
    10
  );
}

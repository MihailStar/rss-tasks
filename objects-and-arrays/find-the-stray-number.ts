export function stray(nums: number[]): number {
  const numbers = [...nums].sort();

  return numbers[0] === numbers[1] ? numbers[numbers.length - 1] : numbers[0];
}

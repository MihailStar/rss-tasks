export function bubblesortOnce(numbers: number[]): number[] {
  const result: typeof numbers = [];

  numbers.forEach((number, index) => {
    result[index] = number;

    const prevIndex = index - 1;
    const prevNumber = result[prevIndex];

    if (prevNumber === undefined) {
      return;
    }

    if (prevNumber > number) {
      result[index] = prevNumber;
      result[prevIndex] = number;
    }
  });

  return result;
}

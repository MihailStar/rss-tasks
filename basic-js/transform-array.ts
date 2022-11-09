type ControlSequence =
  | '--discard-prev'
  | '--discard-next'
  | '--double-prev'
  | '--double-next';

export function transform<T>(arr: (T | ControlSequence)[]): T[] {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  const result: T[] = [];

  for (
    let index = 0,
      firstIndex = 0,
      lastIdex = arr.length - 1,
      /** @tutorial https://www.youtube.com/watch?v=bBHY36VVNDE&t=3450s */
      isDiscardedNext = false;
    index <= lastIdex;
    index += 1
  ) {
    const element = arr[index];

    switch (element) {
      case '--discard-prev':
        if (index === firstIndex) break;
        if (isDiscardedNext) {
          isDiscardedNext = false;
          break;
        }
        result.pop();
        break;

      case '--discard-next':
        if (index === lastIdex) break;
        isDiscardedNext = true;
        index += 1;
        break;

      case '--double-prev':
        if (index === firstIndex) break;
        if (isDiscardedNext) {
          isDiscardedNext = false;
          break;
        }
        result.push(arr[index - 1] as T);
        break;

      case '--double-next':
        if (index === lastIdex) break;
        if (isDiscardedNext) {
          isDiscardedNext = false;
        }
        result.push(arr[index + 1] as T);
        break;

      default:
        result.push(element);
        break;
    }
  }

  return result;
}

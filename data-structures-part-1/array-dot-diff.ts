/** @todo replace Map with Set */
export function arrayDiff<T = number>(a: T[], b: T[]): T[] {
  const bDictionary = new Map<T, T>();
  b.forEach((value) => bDictionary.set(value, value));

  const result: T[] = [];

  a.forEach((value) => {
    if (bDictionary.has(value)) return;
    result.push(value);
  });

  return result;
}

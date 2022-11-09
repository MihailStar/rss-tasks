export function findElement(arr: unknown[], value: unknown): number {
  return arr.indexOf(value);
}

export function generateOdds(len: number): number[] {
  return Array.from({ length: len }, (_, index) => 1 + 2 * index);
}

export function doubleArray<T>(arr: T[]): T[] {
  return arr.concat(arr);
}

export function getArrayOfPositives(arr: number[]): number[] {
  /* return arr.filter((value) => Math.sign(value) === 1); */
  return arr.filter((value) => value > 0);
}

export function getArrayOfStrings(arr: unknown[]): string[] {
  const isString = (value: unknown): value is string =>
    typeof value === 'string';

  return arr.filter(isString);
}

export function removeFalsyValues(arr: unknown[]): unknown[] {
  return arr.filter(Boolean);
}

export function getUpperCaseStrings(arr: string[]): string[] {
  return arr.map((value) => value.toUpperCase());
}

export function getStringsLength(arr: string[]): number[] {
  return arr.map((value) => value.length);
}

export function insertItem<T, I>(
  arr: (T | I)[],
  item: I,
  index: number
): (T | I)[] {
  return arr.splice(index, 0, item);
}

export function getHead<T>(arr: T[], n: number): T[] {
  return arr.slice(0, n);
}

export function getTail<T>(arr: T[], n: number): T[] {
  return arr.slice(-n);
}

export function toCsvText(arr: number[][]): string {
  return arr.map((row) => row.join(',')).join('\n');
}

export function toArrayOfSquares(arr: number[]): number[] {
  return arr.map((value) => value * value);
}

export function getMovingSum(arr: number[]): number[] {
  let prevResult = 0;

  return arr.map((value) => {
    const result = prevResult + value;

    prevResult = result;

    return result;
  });
}

export function getSecondItems<T>(arr: T[]): unknown[] {
  return arr.filter((_, index) => index % 2 === 1);
}

export function propagateItemsByPositionIndex<T>(arr: T[]): T[] {
  /*
  const result: T[] = [];

  arr.forEach((value, index) => {
    Array.from({ length: index + 1 }).forEach(() => result.push(value));
  });

  return result;
  */
  return arr
    .map((value, index) => Array.from({ length: index + 1 }, () => value))
    .flat();
}

export function get3TopItems(arr: number[]): number[] {
  return arr.sort((a, b) => b - a).slice(0, 3);
}

export function getPositivesCount(arr: unknown[]): number {
  return arr.filter(
    (value) => typeof value === 'number' && Math.sign(value) === 1
  ).length;
}

// prettier-ignore
type DigitName = 'zero' | 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine';
type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export function sortDigitNamesByNumericOrder(arr: DigitName[]): DigitName[] {
  const digitNameToDigit: Record<DigitName, Digit> = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  return arr.sort((a, b) => digitNameToDigit[a] - digitNameToDigit[b]);
}

export function getItemsSum(arr: number[]): number {
  return arr.reduce((ac, value) => ac + value, 0);
}

export function getFalsyValuesCount(arr: unknown[]): number {
  return arr.reduce<number>((ac, value) => (value ? ac : ac + 1), 0);
}

export function findAllOccurrences(arr: unknown[], item: unknown): number {
  return arr.reduce<number>((ac, value) => (value === item ? ac + 1 : ac), 0);
}

export function toStringList(arr: unknown[]): string {
  /* return arr.map((value) => String(value)).join(','); */
  return arr.join(',');
}

type City = { country: string; city: string };

export function sortCitiesArray(arr: City[]): City[] {
  return arr.sort((a, b) => {
    if (a.country > b.country) return 1;
    if (a.country < b.country) return -1;
    if (a.country === b.country) {
      if (a.city > b.city) return 1;
      if (a.city < b.city) return -1;
    }
    return 0;
  });
}

export function getIdentityMatrix(n: number): number[][] {
  return Array.from({ length: n }, (_r, y) =>
    Array.from({ length: n }, (_c, x) => (y === x ? 1 : 0))
  );
}

export function getIntervalArray(start: number, end: number): number[] {
  const length = end - start + 1;

  return Array.from({ length }, (_, index) => start + index);
}

export function distinct<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

export function group<O extends object, K extends keyof O, V extends keyof O>(
  array: O[],
  keySelector: (obj: O) => O[K],
  valueSelector: (obj: O) => O[V]
): Map<O[K], O[V][]> {
  /*
  const map = new Map<O[K], O[V][]>();

  array.forEach((obj) => {
    const key = keySelector(obj);
    const value = valueSelector(obj);
    // const values = map.get(key) ?? [];
    const values = (map.has(key) ? map.get(key) : []) as O[V][];

    values.push(value);

    map.set(key, values);
  });

  return map;
  */
  return array.reduce((map, obj) => {
    const key = keySelector(obj);
    const value = valueSelector(obj);
    const values = (map.has(key) ? map.get(key) : []) as O[V][];

    values.push(value);

    return map.set(key, values);
  }, new Map<O[K], O[V][]>());
}

export function selectMany(
  arr: unknown[],
  childrenSelector: (x: unknown) => unknown
): unknown[] {
  /* return arr.map((value) => childrenSelector(value)).flat(); */
  return arr.flatMap(childrenSelector);
}

export function getElementByIndexes(
  arr: unknown[],
  indexes: number[]
): unknown {
  /*
  let result: unknown = arr;

  indexes.forEach((index) => {
    if (!Array.isArray(result)) throw new RangeError();

    result = result[index];
  });

  return result;
  */
  return indexes.reduce<unknown>(
    (res, index) => {
      if (!Array.isArray(res)) throw new RangeError();

      return res[index];
    },
    [...arr]
  );
}

export function swapHeadAndTail<T>(arr: T[]): T[] {
  const halfLength = arr.length / 2;
  const result: T[] = [];
  /*
  for (let index = 0; index < Math.floor(halfLength); index += 1) {
    const fromHead = arr[index];
    const fromTail = arr[Math.ceil(halfLength) + index];

    result[index] = fromTail;
    result[Math.ceil(halfLength) + index] = fromHead;
  }
  */
  arr.some((_, index) => {
    if (index >= Math.floor(halfLength)) return true;

    const fromHead = arr[index];
    const fromTail = arr[Math.ceil(halfLength) + index];

    result[index] = fromTail;
    result[Math.ceil(halfLength) + index] = fromHead;

    return false;
  });

  if (arr.length % 2 === 1) {
    result[Math.floor(halfLength)] = arr[Math.floor(halfLength)];
  }

  return result;
}

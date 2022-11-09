export function getFizzBuzz(
  num: number
): number | 'Fizz' | 'Buzz' | 'FizzBuzz' {
  if (num % 15 === 0) return 'FizzBuzz';

  if (num % 5 === 0) return 'Buzz';

  if (num % 3 === 0) return 'Fizz';

  return num;
}

export function getFactorial(n: number): number {
  return n ? n * getFactorial(n - 1) : 1;
}

export function getSumBetweenNumbers(n1: number, n2: number): number {
  let result = 0;

  for (let index = n1; index <= n2; index += 1) {
    result += index;
  }

  return result;
}

export function isTriangle(a: number, b: number, c: number): boolean {
  return a < b + c && b < c + a && c < a + b;
}

type Rectangle = { top: number; left: number; width: number; height: number };

/** @tutorial https://stackoverflow.com/questions/306316/determine-if-two-rectangles-overlap-each-other#comment74667015_306332 */
export function dorect1nglesOverlap(
  rect1: Rectangle,
  rect2: Rectangle
): boolean {
  const rectA = {
    top: rect1.top,
    right: rect1.left + rect1.width,
    bottom: rect1.top + rect1.height,
    left: rect1.left,
  };
  const rectB = {
    top: rect2.top,
    right: rect2.left + rect2.width,
    bottom: rect2.top + rect2.height,
    left: rect2.left,
  };

  return (
    rectA.left < rectB.right &&
    rectA.right > rectB.left &&
    rectA.top < rectB.bottom &&
    rectA.bottom > rectB.top
  );
}

/** @tutorial https://www.youtube.com/watch?v=iyy1rwR_8ic */
export function isInsideCircle(
  circle: { center: { x: number; y: number }; radius: number },
  point: { x: number; y: number }
): boolean {
  /** Катет */
  const a = Math.abs(circle.center.x - point.x);
  /** Катет */
  const b = Math.abs(circle.center.y - point.y);
  /** Гипотенуза  */
  const c = Math.sqrt(a ** 2 + b ** 2);

  return c < circle.radius;
}

export function findFirstSingleChar(str: string): string | null {
  const charToNumberOf: Record<string, number> = {};

  for (let index = 0; index < str.length; index += 1) {
    const char = str[index];

    charToNumberOf[char] =
      charToNumberOf[char] === undefined ? 1 : charToNumberOf[char] + 1;
  }

  const entries = Object.entries(charToNumberOf);

  for (let index = 0; index < entries.length; index += 1) {
    const [char, numberOf] = entries[index];

    if (numberOf === 1) {
      return char;
    }
  }

  return null;
}

type IntervalString =
  | `(${number}, ${number})`
  | `[${number}, ${number})`
  | `(${number}, ${number}]`
  | `[${number}, ${number}]`;

export function getIntervalString(
  a: number,
  b: number,
  isStartIncluded: boolean,
  isEndIncluded: boolean
): IntervalString {
  const [start, end] = [a, b].sort((value1, value2) => value1 - value2);
  const openBracket = isStartIncluded ? '[' : '(';
  const closeBracket = isEndIncluded ? ']' : ')';

  return `${openBracket}${start}, ${end}${closeBracket}`;
}

export function reverseString(str: string): string {
  let result = '';

  for (let index = str.length - 1; index >= 0; index -= 1) {
    result += str[index];
  }

  return result;
}

export function reverseInteger(num: number): number {
  return Number(reverseString(String(num)));
}

/** @tutorial https://ru.wikipedia.org/wiki/Алгоритм_Луна#JavaScript */
export function isCreditCardNumber(ccn: number): boolean {
  const value = String(ccn);

  let isDoublePosition = false;
  let sum = 0;

  for (let index = value.length - 1; index >= 0; index -= 1) {
    let digit = Number(value[index]);

    if (isDoublePosition) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isDoublePosition = !isDoublePosition;
  }

  return sum % 10 === 0;
}

export function getDigitalRoot(num: number): number {
  const value = String(num);

  let sum = 0;

  for (let index = 0; index < value.length; index += 1) {
    const digit = Number(value[index]);

    sum += digit;
  }

  return sum > 9 ? getDigitalRoot(sum) : sum;
}

export function isBracketsBalanced(str: string): boolean {
  let bracketsString = str;

  const pairBrackets = /\(\)|<>|\[\]|\{\}/;

  while (pairBrackets.test(bracketsString)) {
    bracketsString = bracketsString.replace(pairBrackets, '');
  }

  return bracketsString.length < 1;
}

export function toNaryString(num: number, n: number): string {
  return num.toString(n);
}

export function getCommonDirectoryPath(pathes: string[]): string {
  let pathA = pathes[0];

  for (let pathIndex = 1; pathIndex < pathes.length; pathIndex += 1) {
    for (let charIndex = 0; charIndex < pathA.length; charIndex += 1) {
      const pathB = pathes[pathIndex];

      if (pathA[charIndex] !== pathB[charIndex]) {
        pathA = pathA.slice(0, charIndex);
      }
    }
  }

  const SEPARATOR = '/';
  const lastSeparatorIndex = pathA.lastIndexOf(SEPARATOR);

  return pathA.slice(0, lastSeparatorIndex + 1);
}

/** @tutorial http://mathhelpplanet.com/viewtopic.php?f=44&t=22337 */
export function getMatrixProduct(m1: number[][], m2: number[][]): number[][] {
  if (
    m1.some((row) => row.length !== m1[0].length) ||
    m2.some((row) => row.length !== m2[0].length) ||
    m1[0].length !== m2.length
  ) {
    throw new RangeError('Matrix not correct');
  }

  /** Matrix C */
  const result: number[][] = Array.from({ length: m1.length }, () => []);

  for (let yM1 = 0; yM1 < m1.length; yM1 += 1) {
    for (let yM2 = 0; yM2 < m2.length; yM2 += 1) {
      let subTotal = 0;

      for (let xM1 = 0; xM1 < m1[yM1].length; xM1 += 1) {
        if (m2[xM1][yM2] !== undefined) {
          subTotal += m1[yM1][xM1] * m2[xM1][yM2];

          result[yM1][yM2] = subTotal;
        }
      }
    }
  }

  return result;
}

type TTTValue = 'X' | '0' | undefined;
type TTTRow = [TTTValue, TTTValue, TTTValue];
type TTTField = [TTTRow, TTTRow, TTTRow];

export function evaluateTicTacToePosition(position: TTTField): TTTValue {
  type RowIndex = number;
  type ColumnIndex = number;
  type Coordinate = [RowIndex, ColumnIndex];

  // prettier-ignore
  const WINNING_COORDINATES: [Coordinate, Coordinate, Coordinate][] = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],

    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],

    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
  ];

  for (let index = 0; index < WINNING_COORDINATES.length; index += 1) {
    const [
      [rowIndex0, columnIndex0],
      [rowIndex1, columnIndex1],
      [rowIndex2, columnIndex2],
    ] = WINNING_COORDINATES[index];
    if (
      position[rowIndex0][columnIndex0] === 'X' &&
      position[rowIndex1][columnIndex1] === 'X' &&
      position[rowIndex2][columnIndex2] === 'X'
    ) {
      return 'X';
    }

    if (
      position[rowIndex0][columnIndex0] === '0' &&
      position[rowIndex1][columnIndex1] === '0' &&
      position[rowIndex2][columnIndex2] === '0'
    ) {
      return '0';
    }
  }

  return undefined;
}

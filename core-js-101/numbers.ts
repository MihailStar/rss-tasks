export function getRectangleArea(width: number, height: number): number {
  return width * height;
}

export function getCircleCircumference(radius: number): number {
  return 2 * Math.PI * radius;
}

export function getAverage(value1: number, value2: number): number {
  /* return (value1 + value2) / 2; */
  return value1 / 2 + value2 / 2;
}

/** @tutorial https://ru.wikipedia.org/wiki/Евклидова_метрика */
export function getDistanceBetweenPoints(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

/** @tutorial https://ru.wikipedia.org/wiki/Линейное_уравнение */
export function getLinearEquationRoot(a: number, b: number): number {
  return -1 * (b / a);
}

/** @tutorial https://cyclowiki.org/wiki/Угол_между_векторами */
export function getAngleBetweenVectors(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  const top = x1 * x2 + y1 * y2;
  const bottom = Math.sqrt(x1 ** 2 + y1 ** 2) * Math.sqrt(x2 ** 2 + y2 ** 2);

  return Math.acos(top / bottom);
}

export function getLastDigit(value: number): number {
  return value % 10;
}

export function parseNumberFromString(value: string): number {
  return Number(value);
}

/** @tutorial https://ru.wikipedia.org/wiki/Прямоугольный_параллелепипед */
export function getParallelepipedDiagonal(
  a: number,
  b: number,
  c: number
): number {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

export function roundToPowerOfTen(num: number, pow: number): number {
  const powerOfTen = Number(`1e${pow}`);

  return Math.round(num / powerOfTen) * powerOfTen;
}

/** @tutorial https://en.wikipedia.org/wiki/Primality_test#JavaScript */
export function isPrime(n: number): boolean {
  if (n === 2 || n === 3) {
    return true;
  }

  if (n <= 1 || n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  for (let index = 5; index * index <= n; index += 6) {
    if (n % index === 0 || n % (index + 2) === 0) {
      return false;
    }
  }

  return true;
}

export function toNumber(value: unknown, def: unknown): number {
  const number = Number(value);

  return Number.isNaN(number) ? Number(def) : number;
}

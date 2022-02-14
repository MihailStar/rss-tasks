const ZERO = 'zero';

const HUMAN_READABLE_NUMBERS = {
  units: [
    ,
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ],
  dozens: [
    ,
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ],
  exceptions: [
    ,
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ],
} as const;

/**
 * Конвертирует целое положительное число [0, 999] в человеко-читаемую строку
 *
 * @example
 * toReadable(0); // -> 'zero'
 * toReadable(999); // -> 'nine hundred ninety nine'
 */
export function toReadable(num: number): string {
  if (num === 0) return ZERO;

  let partOfResult: string | undefined;
  let result: string[] = [];
  let temp: number;

  temp = num;
  const units = temp % 10;

  temp = Math.trunc(temp / 10);
  const dozens = temp % 10;

  temp = Math.trunc(temp / 10);
  const hundreds = temp % 10;

  partOfResult = HUMAN_READABLE_NUMBERS.units[hundreds];
  if (typeof partOfResult === 'string') {
    result = result.concat(`${partOfResult} hundred`);
  }

  // исключения, целые положительные числа [11, 19]
  if (dozens === 1 && units >= 1 && units <= 9) {
    return result
      .concat(`${HUMAN_READABLE_NUMBERS.exceptions[units]}`)
      .join(' ');
  }

  partOfResult = HUMAN_READABLE_NUMBERS.dozens[dozens];
  if (typeof partOfResult === 'string') {
    result = result.concat(partOfResult);
  }

  partOfResult = HUMAN_READABLE_NUMBERS.units[units];
  if (typeof partOfResult === 'string') {
    result = result.concat(partOfResult);
  }

  return result.join(' ');
}

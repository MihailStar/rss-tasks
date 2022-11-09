function isRealDate(date: unknown): date is Date {
  if (!(date instanceof Date)) {
    return false;
  }

  const dateKeys = Object.keys(date);

  for (let index = 0; index < dateKeys.length; index += 1) {
    if (dateKeys[index] in Date.prototype) {
      return false;
    }
  }

  return true;
}

type Season = 'winter' | 'spring' | 'summer' | 'autumn';

/**
 * @throws {Error}
 */
export function getSeason(
  date: unknown
): Season | 'Unable to determine the time of year!' {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (!isRealDate(date)) {
    throw new Error('Invalid date!');
  }

  switch (date.getMonth()) {
    case 11:
    case 0:
    case 1:
      return 'winter';

    case 2:
    case 3:
    case 4:
      return 'spring';

    case 5:
    case 6:
    case 7:
      return 'summer';

    case 8:
    case 9:
    case 10:
      return 'autumn';

    default:
      return 'Unable to determine the time of year!';
  }
}

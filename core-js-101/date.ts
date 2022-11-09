export function parseDataFromRfc2822(value: string): Date {
  return new Date(value);
}

export function parseDataFromIso8601(value: string): Date {
  return new Date(value);
}

/** @tutorial https://habr.com/ru/post/164521 */
export function isLeapYear(date: Date): boolean {
  const year = date.getFullYear();

  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function timeSpanToString(startDate: Date, endDate: Date): string {
  /*
  let temp = Math.abs(startDate.valueOf() - endDate.valueOf());

  const milliseconds = temp % 1000;
  const sss = milliseconds.toString().padStart(3, '0').slice(-3);
  temp = Math.trunc(temp / 1000);

  const seconds = temp % 60;
  const ss = seconds.toString().padStart(2, '0').slice(-2);
  temp = Math.trunc(temp / 60);

  const minutes = temp % 60;
  const mm = minutes.toString().padStart(2, '0').slice(-2);
  temp = Math.trunc(temp / 60);

  const hours = temp % 24;
  const hh = hours.toString().padStart(2, '0').slice(-2);
  temp = Math.trunc(temp / 24);

  return `${hh}:${mm}:${ss}.${sss}`;
  */
  let temp = Math.abs(startDate.valueOf() - endDate.valueOf());

  const [sss, ss, mm, hh] = [
    { /* milliseconds */ inNextUnit: 1000, length: 3 },
    { /* seconds */ inNextUnit: 60, length: 2 },
    { /* minutes */ inNextUnit: 60, length: 2 },
    { /* hours */ inNextUnit: 24, length: 2 },
  ].map(({ inNextUnit, length }) => {
    const result = (temp % inNextUnit)
      .toString()
      .padStart(length, '0')
      .slice(-length);

    temp = Math.trunc(temp / inNextUnit);

    return result;
  });

  return `${hh}:${mm}:${ss}.${sss}`;
}

export function angleBetweenClockHands(date: number): number {
  const utcDate = new Date(date);

  const degreesInCircle = 360;

  const minutesInCircle = 60;
  const minutesInDegrees = degreesInCircle / minutesInCircle; // 6°
  const minutes = utcDate.getUTCMinutes();
  const minutesAngle = minutesInDegrees * minutes;

  const hoursInCircle = 12;
  const hoursInDegrees = degreesInCircle / (hoursInCircle * minutesInCircle); // 0,5°
  const hours = utcDate.getUTCHours() % hoursInCircle;
  const hoursAngle = hoursInDegrees * (hours * minutesInCircle + minutes);

  const angle1 = Math.abs(minutesAngle - hoursAngle);
  const angel2 = degreesInCircle - angle1;
  const angelMin = Math.min(angle1, angel2);

  const degreesToRadians = (degrees: number): number =>
    (degrees * Math.PI) / 180;

  return degreesToRadians(angelMin);
}

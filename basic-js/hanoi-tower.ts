const SECONDS_IN_HOUR = 3600;

/**
 * @param disksNumber number of disks
 * @param turnsSpeed speed in turns / hour
 */
export function calculateHanoi(
  disksNumber: number,
  turnsSpeed: number
): {
  turns: number;
  seconds: number;
} {
  const turnsInSecond = turnsSpeed / SECONDS_IN_HOUR;
  const turnsToSolve = 2 ** disksNumber - 1;
  const secondsToSolve = Math.floor(turnsToSolve / turnsInSecond);

  return {
    turns: turnsToSolve,
    seconds: secondsToSolve,
  };
}

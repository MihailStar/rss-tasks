export function bingo(
  ticket: [string, number][],
  win: number
): 'Winner!' | 'Loser!' {
  return ticket
    .map(([string, number]) =>
      [...string].some((letter) => letter.charCodeAt(0) === number)
    )
    .reduce((acc, hasMiniWins) => acc + Number(hasMiniWins), 0) >= win
    ? 'Winner!'
    : 'Loser!';
}

const sons = ['first', 'second', 'third'] as const;
type Son = typeof sons[Exclude<keyof typeof sons, keyof []>];

const sonsAge: Record<Son, number> = {
  first: 14,
  second: 9,
  third: 8,
} as const;

export function whoseBicycle<Diary extends Record<string, number>>(
  diary1: Diary,
  diary2: Diary,
  diary3: Diary
): `I need to buy a bicycle for my ${Son} son.` {
  const sonsMark: Record<Son, number> = {
    first: Object.values(diary1).reduce((acc, mark) => acc + mark, 0),
    second: Object.values(diary2).reduce((acc, mark) => acc + mark, 0),
    third: Object.values(diary3).reduce((acc, mark) => acc + mark, 0),
  };

  const winner = [...sons].sort((sonA, sonB) => {
    if (sonsMark[sonA] < sonsMark[sonB]) return 1;
    if (sonsMark[sonA] > sonsMark[sonB]) return -1;
    if (sonsMark[sonA] === sonsMark[sonB]) {
      if (sonsAge[sonA] > sonsAge[sonB]) return 1;
      if (sonsAge[sonA] < sonsAge[sonB]) return -1;
    }
    return 0;
  });

  return `I need to buy a bicycle for my ${winner[0] as Son} son.`;
}

export function getCommonCharacterCount(s1: string, s2: string): number {
  const s1Map: Record<string, number> = {};

  for (let index = 0; index < s1.length; index += 1) {
    const s1Char = s1[index];

    if (s1Char in s1Map) {
      s1Map[s1Char] += 1;
    } else {
      s1Map[s1Char] = 1;
    }
  }

  let counter = 0;

  for (let index = 0; index < s2.length; index += 1) {
    const s2Char = s2[index];

    // undefined > 0; // -> false
    if (s1Map[s2Char] > 0) {
      s1Map[s2Char] -= 1;
      counter += 1;
    }
  }

  return counter;
}

export class Kata {
  static dnaStrand(dna: string): string {
    return dna.replace(
      /[ATCG]/g,
      (a) => ({ A: 'T', T: 'A', C: 'G', G: 'C' }[a as 'A' | 'T' | 'C' | 'G'])
    );
  }
}

const positiveOrZero = (number: number): number => (number > 0 ? number : 0);

class DecaTree {
  private trunks: number;
  private branches: number;
  private twigs: number;
  private leaves: number;

  constructor(trunks: number) {
    this.trunks = trunks;
    this.branches = this.trunks * 10;
    this.twigs = this.branches * 10;
    this.leaves = this.twigs * 10;
  }

  public chopTrunk(numberOf: number): void {
    const choppedTrunks = this.trunks - numberOf;
    this.chopBranch(numberOf * 10);
    this.trunks = positiveOrZero(choppedTrunks);
  }

  public chopBranch(numberOf: number): void {
    const choppedBranches = this.branches - numberOf;
    this.chopTwig(numberOf * 10);
    this.branches = positiveOrZero(choppedBranches);
  }

  public chopTwig(numberOf: number): void {
    const choppedTwigs = this.twigs - numberOf;
    this.chopLeaf(numberOf * 10);
    this.twigs = positiveOrZero(choppedTwigs);
  }

  public chopLeaf(numberOf: number): void {
    const choppedLeaves = this.leaves - numberOf;
    this.leaves = positiveOrZero(choppedLeaves);
  }

  public describe(): string {
    const { trunks: a, branches: b, twigs: c, leaves: d } = this;
    return `This tree has ${a} trunks, ${b} branches, ${c} twigs and ${d} leaves.`;
  }
}

const tree = DecaTree;

export { DecaTree as tree };

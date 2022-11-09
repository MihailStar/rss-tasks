export class DepthCalculator {
  calculateDepth(arr: unknown[]): number {
    let tempDepth = 1;
    let maxDepth = 1;

    arr.forEach((possibleArr) => {
      if (Array.isArray(possibleArr)) {
        tempDepth += this.calculateDepth(possibleArr);
      }

      if (tempDepth > maxDepth) {
        maxDepth = tempDepth;
      }

      tempDepth = 1;
    });

    return maxDepth;
  }
}

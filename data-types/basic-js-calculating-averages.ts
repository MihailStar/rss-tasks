export var Calculator = class {
  public static average(...arg: number[]): number {
    return arg.reduce((a, b) => a + b, 0) / arg.length || 0;
  }
};

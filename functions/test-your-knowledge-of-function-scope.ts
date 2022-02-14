export function add(a: number): (b: number) => number {
  return function (b: number) {
    return a + b;
  };
}

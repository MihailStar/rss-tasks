export function filterHomogenous<T extends { length: number }>(
  arrays: T[][]
): T[][] {
  return arrays.filter(
    (array) =>
      array.length > 0 && array.every((e, _, a) => typeof e === typeof a[0])
  );
}

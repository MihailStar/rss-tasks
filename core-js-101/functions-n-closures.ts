/* eslint-disable func-names */

export function getComposition(...funcs: Function[]): Function {
  return function (arg) {
    return funcs.reduceRight((ret, func) => func(ret), arg);
  };
}

export function getPowerFunction(exponent: number): (n: number) => number {
  return function (n: number): number {
    return n ** exponent;
  };
}

export function getPolynom(...nums: number[]): ((n: number) => number) | null {
  if (nums.length === 0) {
    return null;
  }

  return function (n: number): number {
    return nums.reduce(
      (acc, num, idx) => acc + num * n ** (nums.length - 1 - idx),
      0
    );
  };
}

export function memoize<V>(func: () => V): () => V {
  const result = func();

  return function (): V {
    return result;
  };
}

export function retry<V>(func: () => V, attempts: number): () => V | Error[] {
  return function repeater(): V | Error[] {
    const errors: Error[] = [];

    for (let i = 0; i < attempts; i += 1) {
      try {
        return func();
      } catch (reason) {
        errors.push(
          reason instanceof Error ? reason : new Error(String(reason))
        );
      }
    }

    return errors;
  };
}

export function logger(
  func: Function,
  logFunc: (log: string) => void
): Function {
  return function (...args) {
    const report = `${func.name}(${args
      .map((arg) => (arg instanceof Object ? JSON.stringify(arg) : String(arg)))
      .join()})`;

    logFunc(`${report} starts`);
    const result = func(...args);
    logFunc(`${report} ends`);

    return result;
  };
}

export function partialUsingArguments<A, V>(
  fn: (...args: A[]) => V,
  ...args1: A[]
): (...args: A[]) => V {
  return fn.bind(null, ...args1);
}

export function getIdGeneratorFunction(startFrom: number): () => number {
  let incrementedId = startFrom - 1;

  return function (): number {
    incrementedId += 1;

    return incrementedId;
  };
}

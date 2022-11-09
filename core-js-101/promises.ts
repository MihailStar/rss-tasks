export function willYouMarryMe(isPositiveAnswer?: boolean): Promise<string> {
  if (isPositiveAnswer === undefined) {
    return Promise.reject(
      new Error('Wrong parameter is passed! Ask her again.')
    );
  }

  return isPositiveAnswer
    ? Promise.resolve('Hooray!!! She said "Yes"!')
    : Promise.resolve('Oh no, she said "No".');
}

export function processAllPromises<T>(array: Promise<T>[]): Promise<T[]> {
  return Promise.all(array);
}

export function getFastestPromise<T>(array: Promise<T>[]): Promise<T> {
  return Promise.race(array);
}

/** @tutorial https://learnersbucket.com/examples/interview/promise-all-polyfill */
function allSettled<T>(
  promises: Promise<T>[]
): Promise<PromiseSettledResult<T>[]> {
  const results: PromiseSettledResult<T>[] = [];
  let promisesSettled = 0;

  return new Promise((resolve) => {
    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = {
            status: 'fulfilled',
            value,
          };
        })
        .catch((reason) => {
          results[index] = {
            status: 'rejected',
            reason:
              reason instanceof Error ? reason : new Error(String(reason)),
          };
        });

      promisesSettled += 1;

      if (promisesSettled === promises.length) {
        resolve(results);
      }
    });
  });
}

function isFulfilled<T>(
  result: PromiseSettledResult<T>
): result is PromiseFulfilledResult<T> {
  return result.status === 'fulfilled';
}

export function chainPromises<T>(
  array: [Promise<T>, ...Promise<T>[]],
  action: (a: T, b: T) => T
): Promise<T> {
  return allSettled(array).then((results) =>
    results
      .filter(isFulfilled)
      .map(({ value }) => value)
      .reduce(action)
  );
}

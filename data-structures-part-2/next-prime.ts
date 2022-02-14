function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }

  for (let i = 2, squareRootNum = Math.sqrt(num); i <= squareRootNum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

export function nextPrime(num: number): number {
  let nextNum = num;

  do {
    nextNum += 1;
  } while (!isPrime(nextNum));

  return nextNum;
}

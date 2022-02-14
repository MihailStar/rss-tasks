/** @tutorial https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/search/binary-search/binarySearch.js */
function indexEqualsValue(sortedArray: number[]): number {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;
  let result = -1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    const middleValue = sortedArray[middleIndex] as number;

    if (middleValue === middleIndex) {
      result = middleIndex;
    }

    if (middleValue < middleIndex) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return result;
}

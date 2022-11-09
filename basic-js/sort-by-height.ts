export function sortByHeight(arr: number[]): number[] {
  const template: number[] = [];
  const numbers: number[] = [];

  for (let index = 0; index < arr.length; index += 1) {
    const element = arr[index];

    template.push(element);

    if (element !== -1) {
      numbers.push(element);
    }
  }

  numbers.sort((numberA, numberB) => numberA - numberB);

  for (let index = 0, numbersIndex = 0; index < template.length; index += 1) {
    const element = template[index];

    if (element !== -1) {
      template[index] = numbers[numbersIndex];
      numbersIndex += 1;
    }
  }

  return template;
}

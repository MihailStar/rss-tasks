type Operator = 'add' | 'subtract' | 'multiply' | 'divide';

export function arithmetic(a: number, b: number, operator: Operator): number {
  switch (operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    default:
      throw new RangeError();
  }
}

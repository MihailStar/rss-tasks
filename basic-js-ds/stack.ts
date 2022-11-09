export class Stack<T> {
  private stack: T[];

  constructor(initialStack = []) {
    this.stack = [...initialStack];
  }

  push(element: T): void {
    this.stack.push(element);
  }

  pop(): T | undefined {
    return this.stack.pop();
  }

  peek(): T {
    return this.stack[this.stack.length - 1];
  }
}

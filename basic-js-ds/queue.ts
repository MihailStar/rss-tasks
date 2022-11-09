declare class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(v: T);
}

export class Queue<T> {
  private last: ListNode<T>['next'] = null;

  getUnderlyingList(): ListNode<T> | undefined {
    const { last } = this;
    if (last === null) return undefined;
    let prev: ListNode<T>['next'] = null;
    let curr: ListNode<T> = { value: last.value, next: last.next };
    while (curr.next !== null) {
      prev = { value: curr.value, next: prev };
      curr = curr.next;
    }
    return { value: curr.value, next: prev };
  }

  enqueue(value: T): void {
    this.last = { value, next: this.last };
  }

  dequeue(): T | undefined {
    const { last } = this;
    if (last === null) return undefined;
    let second: ListNode<T>['next'] = null;
    let first: ListNode<T> = { value: last.value, next: last.next };
    while (first.next !== null) {
      second = first;
      first = first.next;
    }
    if (second !== null) second.next = null;
    return first.value;
  }
}

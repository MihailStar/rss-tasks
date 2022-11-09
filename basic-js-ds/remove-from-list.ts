declare class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(x: T);
}

export function removeKFromList<T>(l: ListNode<T>, k: T): ListNode<T> | null {
  let prev: ListNode<T>['next'] = null;
  let curr: ListNode<T>['next'] = { value: l.value, next: l.next };

  let lWithoutK: ListNode<T>['next'] = null;

  while (curr !== null) {
    if (curr.value === k) {
      if (prev !== null) {
        prev.next = curr.next;
      }
    } else {
      prev = curr;
    }

    if (lWithoutK === null) {
      lWithoutK = prev;
    }

    curr = curr.next;
  }

  return lWithoutK;
}

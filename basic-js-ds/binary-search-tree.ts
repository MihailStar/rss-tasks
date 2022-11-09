declare class Node<T> {
  left: Node<T> | null;
  data: T;
  right: Node<T> | null;

  constructor(data: T);
}

/**
 * @tutorial https://tproger.ru/translations/binary-search-tree-for-beginners
 */
export class BinarySearchTree<T> {
  private rootNode: Node<T> | null = null;

  root(): Node<T> | null {
    return this.rootNode;
  }

  add(data: T): void {
    if (this.rootNode === null) {
      this.rootNode = { left: null, data, right: null };
      return;
    }

    this.addTo(this.rootNode, data);
  }

  has(data: T): boolean {
    return this.find(data) !== null;
  }

  find(data: T): Node<T> | null {
    let target: Node<T> | null = this.rootNode;

    while (target !== null) {
      if (data < target.data) {
        target = target.left;
      } else if (data > target.data) {
        target = target.right;
      } else {
        break;
      }
    }

    return target;
  }

  remove(data: T): void {
    let targetParent: Node<T> | null = null;
    let target: Node<T> | null = this.rootNode;

    while (target !== null) {
      if (data < target.data) {
        targetParent = target;
        target = target.left;
      } else if (data > target.data) {
        targetParent = target;
        target = target.right;
      } else {
        break;
      }
    }

    if (target === null) {
      return;
    }

    if (target.right === null) {
      if (targetParent === null) {
        this.rootNode = target.left;
        return;
      }

      if (targetParent.data > target.data) {
        targetParent.left = target.left;
      } else if (targetParent.data < target.data) {
        targetParent.right = target.left;
      }
    } else if (target.right.left === null) {
      target.right.left = target.left;

      if (targetParent === null) {
        this.rootNode = target.right;
        return;
      }

      if (targetParent.data > target.data) {
        targetParent.left = target.right;
      } else if (targetParent.data < target.data) {
        targetParent.right = target.right;
      }
    } else {
      let leftMostParent = target.right;
      let leftMost = target.right.left;

      while (leftMost.left !== null) {
        leftMostParent = leftMost;
        leftMost = leftMost.left;
      }

      leftMostParent.left = leftMost.right;

      leftMost.left = target.left;
      leftMost.right = target.right;

      if (targetParent === null) {
        this.rootNode = leftMost;
        return;
      }

      if (targetParent.data > target.data) {
        targetParent.left = leftMost;
      } else if (targetParent.data < target.data) {
        targetParent.right = leftMost;
      }
    }
  }

  min(): T | undefined {
    if (this.rootNode === null) {
      return undefined;
    }

    let target = this.rootNode;

    while (target.left !== null) {
      target = target.left;
    }

    return target.data;
  }

  max(): T | undefined {
    if (this.rootNode === null) {
      return undefined;
    }

    let target = this.rootNode;

    while (target.right !== null) {
      target = target.right;
    }

    return target.data;
  }

  private addTo(node: Node<T>, data: T): void {
    if (data < node.data) {
      if (node.left === null) {
        node.left = { left: null, data, right: null };
      } else {
        this.addTo(node.left, data);
      }
      return;
    }

    if (node.right === null) {
      node.right = { left: null, data, right: null };
    } else {
      this.addTo(node.right, data);
    }
  }
}

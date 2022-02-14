interface TreeNode<T> {
  value: T;
  left: TreeNode<T> | undefined;
  right: TreeNode<T> | undefined;
}

interface TreeNodeConstructor<T> {
  (value: T, left?: TreeNode<T>, right?: TreeNode<T>): TreeNode<T>;
}

/** @tutorial https://medium.com/@dimko1/алгоритмы-обход-дерева-ed54848c2d47 */
export function maxSum(root: TreeNode<number> | undefined): number {
  if (root === undefined || root === null) return 0;

  return root.value + Math.max(maxSum(root.left), maxSum(root.right));
}

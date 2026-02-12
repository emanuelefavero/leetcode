// * Deepest Leaves Sum

// Given the root of a binary tree, return the sum of values of its deepest leaves.

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

function deepestLeavesSum(root) {
  if (!root) return 0

  // Find the depth of the tree
  let maxDepth = 0
  function findMaxDepth(node, depth) {
    if (!node) return

    maxDepth = Math.max(maxDepth, depth)

    findMaxDepth(node.left, depth + 1)
    findMaxDepth(node.right, depth + 1)
  }
  findMaxDepth(root, 0)

  // Sum the values of the deepest leaves
  let sum = 0
  function sumDeepestLeaves(node, depth) {
    if (!node) return

    if (depth === maxDepth) sum += node.val

    sumDeepestLeaves(node.left, depth + 1)
    sumDeepestLeaves(node.right, depth + 1)
  }
  sumDeepestLeaves(root, 0)

  return sum
}

// -----------------------------
// TESTS

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.right = new TreeNode(6)
root.left.left.left = new TreeNode(7)
root.right.right.right = new TreeNode(8)

console.log(deepestLeavesSum(root)) // 15 (7 + 8)

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
// SOLUTION 2

// TIP: In theory this solution should be more efficient, as it uses a breadth-first search (BFS) approach, which allows us to find the deepest leaves in a single pass through the tree.

function deepestLeavesSum2(root) {
  if (!root) return 0

  const queue = [root]
  let sum = 0

  while (queue.length) {
    // Reset sum for each level, so that at the end of the loop, sum will contain the sum of the deepest leaves
    sum = 0

    const length = queue.length // number of nodes at the current level

    // Iterate through the current level
    for (let i = 0; i < length; i++) {
      const current = queue.shift() // remove first element

      sum += current.val

      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
  }

  return sum
}

// ------------------------------
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
console.log(deepestLeavesSum2(root)) // 15 (7 + 8)

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

// TIP: In theory this solution should be more efficient, as it finds the deepest leaves in a single pass through the tree. It uses a breadth-first search (BFS) approach, traversing the tree level by level.

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

// -----------------------------
// SOLUTION 3

// TIP: This solution uses a depth-first search (DFS) approach (like solution 1), but goes through the tree in a single pass, keeping track of the current depth and max depth at the same time. When it finds a leaf node, it checks if it's at the max depth and updates the sum accordingly.

function deepestLeavesSum3(root) {
  if (!root) return 0

  let sum = 0
  let maxDepth = 0

  const dfs = (node, depth) => {
    if (!node) return

    // Check if it's a leaf node
    if (!node.left && !node.right) {
      // If we find a deeper leaf node, update maxDepth and reset sum to the current node's value
      if (depth > maxDepth) {
        maxDepth = depth
        sum = node.val // reset sum to current node's value
        return
      }

      // If we find a leaf node at the same depth as maxDepth, add its value to sum
      if (depth === maxDepth) {
        sum += node.val // add current node's value to sum
        return
      }

      return // if depth < maxDepth, do nothing
    }

    dfs(node.left, depth + 1)
    dfs(node.right, depth + 1)
  }

  dfs(root, 0) // start DFS with root node and initial depth of 0

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
console.log(deepestLeavesSum3(root)) // 15 (7 + 8)

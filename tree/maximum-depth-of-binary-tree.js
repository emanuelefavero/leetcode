class TreeNode {
  /**
   * @param {number} val
   * @param {TreeNode} left
   * @param {TreeNode} right
   */

  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

/**
 * * Maximum Depth of Binary Tree
 *
 * Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *
 * @param {TreeNode} root
 * @returns {number}
 */

// TIP: You can find the same problem in the "recursion" folder
// TIP: This is a "bottom-up" recursion approach

function maxDepth(root) {
  if (!root) return 0

  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)

  return 1 + Math.max(leftDepth, rightDepth)
}

// -----------------------------
// TESTS

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

console.log(maxDepth(root)) // 3

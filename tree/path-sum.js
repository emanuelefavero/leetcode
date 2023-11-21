// * Path Sum

// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

/**
 * @typedef {Object} TreeNode
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @returns {boolean}
 */

// O(n) time | O(n) space - recursive approach
function hasPathSum(root, targetSum) {
  if (!root) return false
  if (!root.left && !root.right) return targetSum === root.val

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  )
}

// ----------------------------
// TESTS

let root = new TreeNode(5)
root.left = new TreeNode(4)
root.right = new TreeNode(8)
root.left.left = new TreeNode(11)
root.left.left.left = new TreeNode(7)
root.left.left.right = new TreeNode(2)
root.right.left = new TreeNode(13)
root.right.right = new TreeNode(4)
root.right.right.right = new TreeNode(1)

console.log(hasPathSum(root, 22)) // true
// Explanation: There exists a root-to-leaf path 5 -> 4 -> 11 -> 2 which sum is 22

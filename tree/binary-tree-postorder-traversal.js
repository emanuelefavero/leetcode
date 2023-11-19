/**
 * @typedef {Object} TreeNode
 * @property {number} val
 * @property {TreeNode} left
 * @property {TreeNode} right
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

/**
 * * Given the root of a binary tree, return the postorder traversal of its nodes' values
 *
 * @param {TreeNode} root
 * @param {number[]} result
 * @returns {number[]}
 */

// O(n) time | O(n) space - recursive approach
function postorderTraversal(root, result = []) {
  if (!root) return result

  postorderTraversal(root.left, result)
  postorderTraversal(root.right, result)
  result.push(root.val)

  return result
}

// -----------------------------
// TESTS

let root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

console.log(postorderTraversal(root)) // [3, 2, 1]

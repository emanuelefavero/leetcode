// * Validate Binary Search Tree

/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

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
 * @param {TreeNode} root
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */

// O(n) time | O(n) space
function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true

  if (root.val <= min || root.val >= max) return false

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  )
}

// -----------------------------
// TESTS

let root = new TreeNode(2)
root.left = new TreeNode(1)
root.right = new TreeNode(3)

console.log(isValidBST(root)) // true

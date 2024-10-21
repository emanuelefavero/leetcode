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
 * * Invert Binary Tree
 * Given the root of a binary tree, invert the tree, and return its root
 *
 * @param {TreeNode} root
 * @returns {TreeNode}
 */

// O(n) time | O(n) space
function invertTree(root) {
  if (!root) return null

  let left = invertTree(root.left)
  let right = invertTree(root.right)

  root.left = right
  root.right = left

  return root
}

// -------------------------
// TESTS

let tree = new TreeNode(2)
tree.left = new TreeNode(1)
tree.right = new TreeNode(3)

console.log(invertTree(tree)) // 2, 3, 1

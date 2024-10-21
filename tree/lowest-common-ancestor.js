// * Lowest Common Ancestor of a Binary Tree

// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

class TreeNode {
  /**
   * @param {number} val
   */

  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @returns {TreeNode}
 */

// O(n) time | O(n) space - recursive approach
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root

  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)

  if (!left) return right // p and q are in the right subtree
  if (!right) return left // p and q are in the left subtree
  return root // p is in one side and q is in the other
}

// -----------------------------
// TESTS

let root = new TreeNode(3)
root.left = new TreeNode(5)
root.left.left = new TreeNode(6)
root.left.right = new TreeNode(2)
root.left.right.left = new TreeNode(7)
root.left.right.right = new TreeNode(4)
root.right = new TreeNode(1)
root.right.left = new TreeNode(0)
root.right.right = new TreeNode(8)

console.log(lowestCommonAncestor(root, 5, 1)) // 3
// Explanation: The LCA of nodes 5 and 1 is 3

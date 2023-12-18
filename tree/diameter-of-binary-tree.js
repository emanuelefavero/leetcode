// * Diameter of a Binary Tree

/*
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.
*/

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
 * @param {TreeNode} root
 * @returns {number}
 */

// O(n) time | O(n) space - recursive approach
function diameterOfBinaryTree(root) {
  let diameter = 0

  function dfs(node) {
    if (!node) return 0

    let left = dfs(node.left)
    let right = dfs(node.right)

    // update diameter at every node
    diameter = Math.max(diameter, left + right)

    // update the largest number of edge so far
    return 1 + Math.max(left, right)
  }

  dfs(root)

  return diameter
}

// -----------------------------
// TESTS

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)

console.log(diameterOfBinaryTree(root)) // 3
// Explanation: 3 is the length of the path [4, 2, 1, 3] or [5, 2, 1, 3]

/*
Tree:

    1
   / \
  2   3
 / \
4   5
*/

// * Count Complete Tree Nodes

/*
Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Design an algorithm that runs in less than O(n) time complexity.
*/

/**
 * @typedef TreeNode
 * @type {object}
 * @property {number} val
 * @property {TreeNode} left
 * @property {TreeNode} right
 */

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

/**
 * @param {TreeNode} root
 * @returns {number}
 */

// TIP: This is a DFS solution that takes O(n)

// O(n) time | O(n) space
function countNodes(root) {
  if (!root) return 0

  return 1 + countNodes(root.left) + countNodes(root.right)
}

// ------------------------
// SOLUTION 2

// TIP: This is a binary search solution that takes O(log n)

function countNodes2(root) {
  if (!root) return 0

  let left = root
  let right = root
  let leftHeight = 0
  let rightHeight = 0

  while (left) {
    left = left.left
    leftHeight++
  }

  while (right) {
    right = right.right
    rightHeight++
  }

  if (leftHeight === rightHeight) {
    return Math.pow(2, leftHeight) - 1 // 2^h - 1
    // TIP: We subtract 1 because the root is already counted
  }

  return 1 + countNodes2(root.left) + countNodes2(root.right)
}

// ------------------------
// TESTS

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)

// 1
console.log(countNodes(root)) // 6

// 2
console.log(countNodes2(root)) // 6

// * Balanced Binary Tree

// Given a binary tree, determine if it is height-balanced

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
 * @returns {boolean}
 */

// O(n log n) time | O(n) space
function isBalanced(root) {
  return getHeight(root) !== -1 // if height is -1, tree is not balanced
}

/**
 * @param {TreeNode} root
 * @returns {number}
 */

// O(n) time | O(n) space
function getHeight(root) {
  if (!root) return 0 // base case

  let left = getHeight(root.left)
  let right = getHeight(root.right)

  // if left or right subtree is not balanced, return -1
  if (left === -1 || right === -1) return -1

  // if difference between left and right subtree is greater than 1, return -1
  if (Math.abs(left - right) > 1) return -1

  // otherwise, return height of the subtree
  return Math.max(left, right) + 1 // ? + 1 because we're counting the root node
}

// -----------------------------
// TESTS

let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

/*
      3
    /   \
   9     20
        /  \
       15   7
*/

console.log(isBalanced(root)) // true

let root2 = new TreeNode(1)
root2.left = new TreeNode(2)
root2.right = new TreeNode(2)
root2.left.left = new TreeNode(3)
root2.left.right = new TreeNode(3)
root2.left.left.left = new TreeNode(4)
root2.left.left.right = new TreeNode(4)

/*
        1
      /   \
     2     2
    / \
   3   3
  / \
 4   4
*/

console.log(isBalanced(root2)) // false

// * INPUT
class TreeNode {
  /**
   * @param {number} val
   * @param {TreeNode} left
   * @param {TreeNode} right
   */

  constructor(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
  }
}

let root = new TreeNode(10, new TreeNode(4), new TreeNode(6))
let root2 = new TreeNode(10, new TreeNode(3), new TreeNode(2))

/**
 * You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.
 * Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.
 *
 * @param {TreeNode} root
 * @returns {boolean}
 */

// * SOLUTION O(1)
function checkTree(root) {
  return root.val === root.left.val + root.right.val
}

console.log(checkTree(root)) // true
console.log(checkTree(root2)) // false

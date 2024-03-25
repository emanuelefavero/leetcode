// * Sum of Root To Leaf Binary Numbers

/*
You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.

For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.

The test cases are generated so that the answer fits in a 32-bits integer.
*/

/**
 * @typedef TreeNode
 * @type {object}
 * @property {number} val
 * @property {TreeNode | null} left
 * @property {TreeNode | null} right
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

// O(n) time | O(n) space
function sumRootToLeaf(root) {
  let sum = 0
  let binaryNumber = ''

  function dfs(node) {
    if (!node) return

    binaryNumber += node.val

    if (!node.left && !node.right) {
      let number = parseInt(binaryNumber, 2) // convert binary to decimal
      sum += number
    }

    dfs(node.left)
    dfs(node.right)

    // delete last char in binaryNumber to backtrack
    binaryNumber = binaryNumber.slice(0, -1)
  }

  dfs(root)

  return sum
}

// -------------------------
// TESTS

let root = new TreeNode(1)
root.left = new TreeNode(0)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(1)
root.right = new TreeNode(1)
root.right.left = new TreeNode(0)
root.right.right = new TreeNode(1)

console.log(sumRootToLeaf(root))

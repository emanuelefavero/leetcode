// * Range Sum  BST

// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high]

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
 *
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @param {number} sum
 * @returns {number}
 */

// O(n) time | O(n) space
function rangeSumBST(root, low, high, sum = 0) {
  if (!root) return sum

  if (root.val >= low && root.val <= high) {
    sum += root.val
  }

  if (root.val > low) {
    sum = rangeSumBST(root.left, low, high, sum)
  }

  if (root.val < high) {
    sum = rangeSumBST(root.right, low, high, sum)
  }

  return sum
}

// -------------------------
// SOLUTION 2

function rangeSumBST2(root, low, high) {
  let set = new Set()

  const helper = (node) => {
    if (!node) return false
    helper(node.left)
    helper(node.right)

    if (node.val >= low && node.val <= high) {
      set.add(node.val)
    }
  }

  helper(root)

  return [...set].reduce((acc, curr) => acc + curr, 0)
}

// -------------------------
// SOLUTION 3

function rangeSumBST3(root, low, high) {
  let sum = 0
  let stack = [root]

  while (stack.length) {
    let node = stack.pop()

    if (node.val >= low && node.val <= high) {
      sum += node.val
    }

    if (node.left && node.val > low) {
      stack.push(node.left)
    }

    if (node.right && node.val < high) {
      stack.push(node.right)
    }
  }

  return sum
}

// -------------------------
// TESTS

let root = new TreeNode(10)
root.left = new TreeNode(5)
root.right = new TreeNode(15)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(7)
root.right.right = new TreeNode(18)

console.log(rangeSumBST(root, 7, 15)) // 32
console.log(rangeSumBST2(root, 7, 15)) // 32
console.log(rangeSumBST3(root, 7, 15)) // 32

// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

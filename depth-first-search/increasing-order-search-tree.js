// * Increasing Order Search Tree

// Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child

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
 * @returns {TreeNode}
 */

// O(n) time | O(n) space
function increasingBST(root) {
  let newRoot = new TreeNode()
  let current = newRoot

  function inOrder(node) {
    if (!node) return

    inOrder(node.left)

    current.right = new TreeNode(node.val)
    current = current.right

    inOrder(node.right)
  }

  inOrder(root)

  return newRoot.right
}

// -------------------------
// SOLUTION 2

function increasingBST2(root) {
  let values = []

  function inOrder(node) {
    if (!node) return

    inOrder(node.left)
    values.push(node.val)
    inOrder(node.right)
  }

  inOrder(root)

  let newRoot = new TreeNode(values[0])
  let current = newRoot

  for (let i = 1; i < values.length; i++) {
    current.right = new TreeNode(values[i])
    current = current.right
  }

  return newRoot
}

// -------------------------
// TESTS

const root = new TreeNode(5)
root.left = new TreeNode(3)
root.right = new TreeNode(6)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.right.right = new TreeNode(8)
root.left.left.left = new TreeNode(1)
root.right.right.left = new TreeNode(7)
root.right.right.right = new TreeNode(9)

console.log(increasingBST(root))
console.log(increasingBST2(root))

// * Univalued Binary Tree

/*
A binary tree is uni-valued if every node in the tree has the same value.

Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.
*/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

// TIP: This is a depth first search solution

function isUnivalTree(root, prev = root.val) {
  if (!root) return true

  if (prev !== root.val) return false

  return isUnivalTree(root.left, prev) && isUnivalTree(root.right, prev)
}

// -------------------------
// TESTS

let root = new TreeNode(1)
root.left = new TreeNode(1)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(1)
root.right.right = new TreeNode(1)

console.log(isUnivalTree(root)) // true

root = new TreeNode(2)
root.left = new TreeNode(2)
root.right = new TreeNode(5)

console.log(isUnivalTree(root))

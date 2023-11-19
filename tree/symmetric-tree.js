// * Symmetric Tree

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

/*
Example:
      1
    /   \
   2     2
 /  \   /  \
3    4 4    3
*/

class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// TODO add jsDoc
// TODO add link to README

function isSymmetric(root) {
  if (!root) return true

  return isMirror(root.left, root.right)
}

function isMirror(left, right) {
  if (!left && !right) return true
  if (!left || !right) return false

  return (
    left.val === right.val &&
    isMirror(left.left, right.right) &&
    isMirror(left.right, right.left)
  )
}

// -----------------------------
// TESTS

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
root.right = new TreeNode(2)
root.right.left = new TreeNode(4)
root.right.right = new TreeNode(3)

console.log(isSymmetric(root)) // true

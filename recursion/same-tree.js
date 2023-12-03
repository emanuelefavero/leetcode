// * Same Tree

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

// TIP: Recursive solution

function isSameTree(p, q) {
  if (!p && !q) return true
  if (!p || !q) return false
  if (p.val !== q.val) return false

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

// -----------------------------
// TESTS

let tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
let tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))

console.log(isSameTree(tree1, tree2)) // true

tree1 = new TreeNode(1, new TreeNode(2))

console.log(isSameTree(tree1, tree2)) // false

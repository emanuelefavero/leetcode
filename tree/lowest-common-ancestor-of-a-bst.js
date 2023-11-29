// * Lowest Common Ancestor of a Binary Search Tree

// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

function lowestCommonAncestor(root, p, q) {
  if (!root) return null

  if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q)
  else if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q)
  else return root
}

// -----------------------------
// TESTS

let root = new TreeNode(6)
root.left = new TreeNode(2)
root.right = new TreeNode(8)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(4)
root.right.left = new TreeNode(7)
root.right.right = new TreeNode(9)
root.left.right.left = new TreeNode(3)
root.left.right.right = new TreeNode(5)

/*
      6
    /   \
   2       8
  / \     / \
0   4   7   9
   / \
  3   5
*/

console.log(lowestCommonAncestor(root, root.left, root.right)) // 6, because 6 is the lowest common ancestor of 2 and 8
console.log(lowestCommonAncestor(root, root.left.left, root.left.right.left)) // 2, because 2 is the lowest common ancestor of 0 and 3

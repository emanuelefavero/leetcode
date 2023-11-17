class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

function maxDepth(root) {
  if (!root) return 0

  // The depth of the tree is calculated as 1 plus the maximum
  // depth among its left and right subtrees. This accounts for the
  // current level, adding 1 to the maximum depth of its deeper subtree.
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

// -----------------------
// TESTS

let tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)

/*
    3
   / \
  9  20
    /  \
   15   7
*/

console.log(maxDepth(tree)) // 3

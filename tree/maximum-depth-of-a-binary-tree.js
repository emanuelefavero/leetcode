class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

function maxDepth(root) {
  if (!root) return 0

  let leftDepth = maxDepth(root.left)
  let rightDepth = maxDepth(root.right)

  return 1 + Math.max(leftDepth, rightDepth)
}

// -----------------------------
// TESTS

let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

console.log(maxDepth(root)) // 3

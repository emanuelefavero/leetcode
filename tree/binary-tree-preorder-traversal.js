class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

function preorderTraversal(root, result = []) {
  if (!root) return result

  result.push(root.val)
  preorderTraversal(root.left, result)
  preorderTraversal(root.right, result)

  return result
}

// -----------------------------
// TESTS

let tree = new TreeNode(1)
tree.right = new TreeNode(2)
tree.right.left = new TreeNode(3)

console.log(preorderTraversal(tree)) // [1, 2, 3]

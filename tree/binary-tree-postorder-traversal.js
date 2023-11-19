class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

function postorderTraversal(root, result = []) {
  if (!root) return result

  postorderTraversal(root.left, result)
  postorderTraversal(root.right, result)
  result.push(root.val)

  return result
}

// -----------------------------
// TESTS

let root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

console.log(postorderTraversal(root)) // [3, 2, 1]

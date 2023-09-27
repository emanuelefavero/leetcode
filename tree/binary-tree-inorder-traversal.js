class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

function inorderTraversal(root, result = []) {
  if (!root) return result

  inorderTraversal(root.left, result)
  result.push(root.val)
  inorderTraversal(root.right, result)

  return result
}

let root = new TreeNode(1)
root.left = new TreeNode(null)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

console.log(inorderTraversal(root))

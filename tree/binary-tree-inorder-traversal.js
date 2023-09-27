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

// ----------------- SOLUTION 2 ----------------
function inorderTraversal2(root) {
  let result = []
  let stack = []
  let current = root

  while (current || stack.length) {
    if (current) {
      stack.push(current)
      current = current.left
    } else {
      current = stack.pop()
      result.push(current.val)
      current = current.right
    }
  }

  return result
}

// ----------------- test case -----------------

let root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

console.log(inorderTraversal(root)) // [1, 3, 2]
console.log(inorderTraversal2(root)) // [1, 3, 2]

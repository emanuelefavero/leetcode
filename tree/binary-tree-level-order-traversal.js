class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

function levelOrder(root) {
  if (!root) return []

  let result = []
  let queue = [root]

  while (queue.length) {
    let currentLevel = []
    let length = queue.length

    for (let i = 0; i < length; i++) {
      let current = queue.shift() // remove first element

      currentLevel.push(current.val)

      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }

    result.push(currentLevel)
  }

  return result
}

// -----------------------------
// TESTS

let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

console.log(levelOrder(root)) // [[3],[9,20],[15,7]]

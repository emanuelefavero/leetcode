class TreeNode {
  /**
   * @param {number} val
   * @param {TreeNode} left
   * @param {TreeNode} right
   */

  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

/**
 * * Given the root of a binary tree, return the level order traversal of its nodes' values (Breath First Search)
 *
 * @param {TreeNode} root
 * @returns {number[]}
 */

// O(n) time | O(n) space - iterative approach (using queue)
function levelOrder(root) {
  if (!root) return []

  const result = []
  const queue = [root]

  while (queue.length) {
    const currentLevel = []
    const length = queue.length

    for (let i = 0; i < length; i++) {
      const current = queue.shift() // remove first element

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

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

console.log(levelOrder(root)) // [[3],[9,20],[15,7]]

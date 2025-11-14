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
 * * Given the root of a binary tree, return the postorder traversal of its nodes' values
 *
 * @param {TreeNode} root
 * @param {number[]} result
 * @returns {number[]}
 */

// O(n) time | O(n) space - recursive approach
function postorderTraversal(root, result = []) {
  if (!root) return result

  postorderTraversal(root.left, result)
  postorderTraversal(root.right, result)
  result.push(root.val)

  return result
}

// -----------------------------
// SOLUTION 2

// O(n) time | O(n) space - iterative approach (using stack)
function postorderTraversal2(root) {
  const result = []
  const stack = [root]

  while (stack.length) {
    const current = stack.pop()

    if (current) {
      result.unshift(current.val) // unshift instead of push (add at beginning)
      stack.push(current.left)
      stack.push(current.right)
    }
  }

  return result
}

// -----------------------------
// TESTS

const root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

console.log(postorderTraversal(root)) // [3, 2, 1]
console.log(postorderTraversal2(root)) // [3, 2, 1]

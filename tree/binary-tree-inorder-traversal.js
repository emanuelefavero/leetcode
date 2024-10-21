class TreeNode {
  /**
   * @param {number} val
   */

  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

/**
 * * Given the root of a binary tree, return the inorder traversal of its nodes' values
 * @param {TreeNode} root
 * @param {number[]} result
 * @returns {number[]}
 */

// O(n) time | O(n) space - recursive approach
function inorderTraversal(root, result = []) {
  if (!root) return result

  inorderTraversal(root.left, result)
  result.push(root.val)
  inorderTraversal(root.right, result)

  return result
}

// -----------------------------
// SOLUTION 2

// O(n) time | O(n) space - iterative approach (using stack)
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

// -----------------------------
// TESTS

let root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

console.log(inorderTraversal(root)) // [1, 3, 2]
console.log(inorderTraversal2(root)) // [1, 3, 2]

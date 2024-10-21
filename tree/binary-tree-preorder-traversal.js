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
 * * Given the root of a binary tree, return the preorder traversal of its nodes' values
 *
 * @param {TreeNode} root
 * @param {number[]} result
 * @returns {number[]}
 */

// O(n) time | O(n) space - recursive approach
function preorderTraversal(root, result = []) {
  if (!root) return result

  result.push(root.val)
  preorderTraversal(root.left, result)
  preorderTraversal(root.right, result)

  return result
}

// -----------------------------
// SOLUTION 2

// O(n) time | O(n) space - iterative approach (using stack)
function preorderTraversal2(root) {
  let result = []
  let stack = [root]

  while (stack.length) {
    let current = stack.pop()

    if (current) {
      result.push(current.val)
      stack.push(current.right)
      stack.push(current.left)
    }
  }

  return result
}

// -----------------------------
// TESTS

let root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

console.log(preorderTraversal(root)) // [1, 2, 3]
console.log(preorderTraversal2(root)) // [1, 2, 3]

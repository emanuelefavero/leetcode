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
 * * Search in a Binary Search Tree
 *
 * You are given the root of a binary search tree (BST) and an integer val
 *
 * Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null
 *
 * @param {TreeNode} root
 * @param {number} val
 * @returns {TreeNode | null}
 */

// TIP: Recursive solution

// O(n) time | O(n) space
function searchBST(root, val) {
  if (!root) return null

  if (root.val === val) return root
  else if (root.val < val) return searchBST(root.right, val)
  else return searchBST(root.left, val)
}

// -----------------------------
// SOLUTION 2

// TIP: Iterative solution

// O(n) time | O(1) space
function searchBST2(root, val) {
  let current = root

  while (current) {
    if (current.val === val) return current
    else if (current.val < val) current = current.right
    else current = current.left
  }

  return null
}

// -----------------------------
// TESTS

const root = new TreeNode(4)
root.left = new TreeNode(2)
root.right = new TreeNode(7)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)

// 1
console.log(searchBST(root, 2)) // [2,1,3]
console.log(searchBST(root, 5)) // []

// 2
console.log(searchBST2(root, 2)) // [2,1,3]
console.log(searchBST2(root, 5)) // []

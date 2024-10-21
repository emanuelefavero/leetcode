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
 * * Search in a Binary Search Tree
 *
 * You are given the root of a binary search tree (BST) and an integer val
 *
 * Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null
 *
 * @param {TreeNode} root
 * @param {number} val
 * @returns {TreeNode}
 */

// TIP: This solution uses recursion

// O(n) time | O(n) space
function searchBST(root, val) {
  if (!root) return null

  if (root.val === val) return root

  if (val < root.val) return searchBST(root.left, val)
  else return searchBST(root.right, val)
}

// -----------------------------
// SOLUTION 2

// O(n) time | O(1) space
function searchBST2(root, val) {
  let current = root

  while (current) {
    if (current.val === val) return current

    if (val < current.val) current = current.left
    else current = current.right
  }

  return null
}

// -----------------------------
// TESTS

let root = new TreeNode(4)
root.left = new TreeNode(2)
root.right = new TreeNode(7)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)

// 1
console.log(searchBST(root, 2)) // 2 -> 1 -> 3
console.log(searchBST(root, 5)) // null

// 2
console.log(searchBST2(root, 2)) // 2 -> 1 -> 3
console.log(searchBST2(root, 5)) // null

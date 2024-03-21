// * Merge Two Binary Trees

/*
You are given two binary trees root1 and root2.

Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

Return the merged tree.

Note: The merging process must start from the root nodes of both trees.
*/

/**
 * @typedef TreeNode
 * @type {object}
 * @property {number} val
 * @property {TreeNode | null} left
 * @property {TreeNode | null} right
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @returns {TreeNode}
 */

// O(n) time | O(n) space
function mergeTrees(root1, root2) {
  if (!root1) return root2
  if (!root2) return root1

  root1.val = root1.val + root2.val
  root1.left = mergeTrees(root1.left, root2.left)
  root1.right = mergeTrees(root1.right, root2.right)

  return root1
}

// -------------------------
// TESTS

let root1 = new TreeNode(1)
root1.left = new TreeNode(3)
root1.right = new TreeNode(2)
root1.left.left = new TreeNode(5)

let root2 = new TreeNode(2)
root2.left = new TreeNode(1)
root2.right = new TreeNode(3)
root2.left.right = new TreeNode(4)
root2.right.right = new TreeNode(7)

console.log(mergeTrees(root1, root2))

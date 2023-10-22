// Given the root of a binary tree, return all duplicate subtrees.

// For each kind of duplicate subtrees, you only need to return the root node of any one of them.

// Two trees are duplicate if they have the same structure with the same node values.

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

function findDuplicateSubtrees(root) {}

// -----------------------------
// TESTS

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.right = new TreeNode(3)
root.right.left = new TreeNode(2)
root.right.left.left = new TreeNode(4)
root.right.right = new TreeNode(4)

/*
    1
   / \
  2   3
 /   / \
4   2   4
   /
  4
*/

// input: root = [1,2,3,null,2,null,4,null,4]
console.log(findDuplicateSubtrees(root))
// [[2, 4], [4]]

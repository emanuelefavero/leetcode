// * Range Sum of BST

// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high]

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

function rangeSumBST(root, low, high, sum = 0) {
  if (!root) return sum

  if (root.val >= low && root.val <= high) {
    sum += root.val
  }

  if (root.val > low) {
    sum = rangeSumBST(root.left, low, high, sum)
  }

  if (root.val < high) {
    sum = rangeSumBST(root.right, low, high, sum)
  }

  return sum
}

// -------------------------
// TESTS

let root = new TreeNode(10)
root.left = new TreeNode(5)
root.right = new TreeNode(15)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(7)
root.right.right = new TreeNode(18)

console.log(rangeSumBST(root, 7, 15))

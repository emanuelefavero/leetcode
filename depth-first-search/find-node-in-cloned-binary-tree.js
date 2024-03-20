// * Find a Corresponding Node of a Binary Tree in a Clone of That Tree

/*
Given two binary trees original and cloned and given a reference to a node target in the original tree.

The cloned tree is a copy of the original tree.

Return a reference to the same node in the cloned tree.

Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

function getTargetCopy(original, cloned, target) {
  if (!cloned) return null

  if (cloned.val === target.val) return cloned

  return (
    getTargetCopy(original, cloned.left, target) ||
    getTargetCopy(original, cloned.right, target)
  )
}

// -------------------------
// TESTS

let original = new TreeNode(7)
original.left = new TreeNode(4)
original.right = new TreeNode(3)
original.right.left = new TreeNode(6)
original.right.right = new TreeNode(19)

let cloned = original

let target = original.right

console.log(getTargetCopy(original, cloned, target))

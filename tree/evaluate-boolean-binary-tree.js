// * Evaluate Boolean Binary Tree

/*
You are given the root of a full binary tree with the following properties:

Leaf nodes have either the value 0 or 1, where 0 represents False and 1 represents True.
Non-leaf nodes have either the value 2 or 3, where 2 represents the boolean OR and 3 represents the boolean AND.
The evaluation of a node is as follows:

If the node is a leaf node, the evaluation is the value of the node, i.e. True or False.
Otherwise, evaluateTree the node's two children and apply the boolean operation of its value with the children's evaluations.
Return the boolean result of evaluating the root node.

A full binary tree is a binary tree where each node has either 0 or 2 children.

A leaf node is a node that has zero children.
*/

class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

function evaluateTree(root) {
  // if root is null, return false
  if (!root) return false

  // if root is a leaf node, return boolean value depending on the value of the node
  if (!root.left && !root.right) return root.val === 1

  // evaluateTree left and right subtrees
  let left = evaluateTree(root.left)
  let right = evaluateTree(root.right)

  // apply boolean operation based on the value of the root node if it's not a leaf node
  if (root.val === 2) return left || right
  if (root.val === 3) return left && right

  // if root node is not a leaf node and its value is not 2 or 3, return false
  return false
}

// ----------------------
// TESTS

let root = new TreeNode(2)
root.left = new TreeNode(1)
root.right = new TreeNode(3)
root.right.left = new TreeNode(0)
root.right.right = new TreeNode(1)

/*
    OR
    / \
True   AND
        / \
  False   True
*/

console.log(evaluateTree(root)) // true

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
 * @param {TreeNode} root
 * @returns {boolean}
 */

// O(n) time | O(n) space
function evaluateTree(root) {
  // Base case: if it's a leaf node, return its boolean value
  if (!root.left && !root.right) return root.val === 1

  // EvaluateTree left and right subtrees
  const left = evaluateTree(root.left)
  const right = evaluateTree(root.right)

  // Apply boolean operation based on the node's value
  if (root.val === 2) return left || right
  if (root.val === 3) return left && right
}

// ----------------------
// TESTS

const root = new TreeNode(2)
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

// * Count Nodes Equal to Average of Subtree

/*
Given the root of a binary tree, return the number of nodes where the value of the node is equal to the average of the values in its subtree.

Note:

- The average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.
- A subtree of root is a tree consisting of root and all of its descendants.
*/

/**
 * @param {TreeNode} root
 * @returns {number}
 */

// O(n) time | O(h) space where n is the number of nodes and h is the height of the tree
function averageOfSubtree(root) {
  let result = 0

  const dfs = (node) => {
    if (!node) return [0, 0] // [sum, count]

    const currentVal = node.val
    const left = dfs(node.left) // get sum and count from left subtree
    const right = dfs(node.right) // get sum and count from right subtree

    // sum and count of the subtree rooted at the current node
    const sum = left[0] + right[0] + currentVal
    const count = left[1] + right[1] + 1 // +1 for the current node

    // check if the average equals the node's value
    const average = Math.floor(sum / count)
    if (average === currentVal) result++

    return [sum, count]
  }

  dfs(root)

  return result
}

// -----------------------------
// TESTS

class TreeNode {
  /**
   * @param {number} val
   * @param {TreeNode|null} left
   * @param {TreeNode|null} right
   */

  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

let root = new TreeNode(4)
root.left = new TreeNode(8)
root.right = new TreeNode(5)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(1)
root.right.right = new TreeNode(6)

console.log(averageOfSubtree(root)) // 5
/* Explanation: 
For the node with value 4: The average of its subtree is (4 + 8 + 5 + 0 + 1 + 6) / 6 = 24 / 6 = 4.
For the node with value 5: The average of its subtree is (5 + 6) / 2 = 11 / 2 = 5.
For the node with value 0: The average of its subtree is 0 / 1 = 0.
For the node with value 1: The average of its subtree is 1 / 1 = 1.
For the node with value 6: The average of its subtree is 6 / 1 = 6.
*/

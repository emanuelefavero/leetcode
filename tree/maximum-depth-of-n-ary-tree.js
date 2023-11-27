// * Maximum Depth of N-ary Tree

/*
Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

Example 1:
Input: root = [1,null,3,2,4,null,5,6]
Output: 3
*/

/**
 * @typedef {Object} Node
 * @property {number} val
 * @property {Node[]} children
 */

class Node {
  constructor(val, children) {
    this.val = val
    this.children = children || []
  }
}

/**
 * @param {Node} root
 * @returns {number}
 */

function maxDepth(root) {
  if (!root) return 0

  let max = 0

  for (let child of root.children) {
    max = Math.max(max, maxDepth(child))
  }

  return max + 1
}

// -----------------------------
// TESTS

let root = new Node(1)
root.children = [new Node(3), new Node(2), new Node(4)]
root.children[0].children = [new Node(5), new Node(6)]

console.log(maxDepth(root)) // 3

// * N-ary Tree Preorder Traversal

// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

// Example 1:
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,3,5,6,2,4]

// TIP: Inorder traversal does not work for N-ary trees because we don't know which child to visit first

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
 * @param {number[]} result
 * @returns {number[]}
 */

// O(n) time | O(n) space
function preorder(root, result = []) {
  if (!root) return result

  result.push(root.val)

  for (let child of root.children) {
    preorder(child, result)
  }

  return result
}

// -----------------------------
// TESTS

let root = new Node(1)
root.children = [new Node(3), new Node(2), new Node(4)]
root.children[0].children = [new Node(5), new Node(6)]

console.log(preorder(root)) // [1, 3, 5, 6, 2, 4]

// * N-ary Tree Postorder Traversal

// Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

// Example 1:
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [5,6,3,2,4,1]

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

// NOTE: Recursive solution

// O(n) time | O(n) space
function postorder(root, result = []) {
  if (!root) return result

  for (let child of root.children) {
    postorder(child, result)
  }

  result.push(root.val)

  return result
}

// -----------------------------
// SOLUTION 2

// NOTE: Iterative solution

// O(n) time | O(n) space
function postorder2(root) {
  let result = []
  let stack = [root]

  while (stack.length) {
    let current = stack.pop()
    if (!current) continue // we need this to avoid pushing null values into the result array
    result.push(current.val)
    stack.push(...current.children) // we use the spread operator (...) to push all the children of the current node into the stack
  }

  return result.reverse() // we need to reverse the result because we are pushing the children in reverse order (cause we use pop() which is more efficient than shift())
}

// -----------------------------
// TESTS

let root = new Node(1)
root.children = [new Node(3), new Node(2), new Node(4)]
root.children[0].children = [new Node(5), new Node(6)]
root.children[1].children = [new Node(7)]

console.log(postorder(root)) // [5, 6, 3, 7, 2, 4, 1]
console.log(postorder2(root)) // [5, 6, 3, 7, 2, 4, 1]

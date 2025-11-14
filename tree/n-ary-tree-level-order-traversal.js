// * N-ary Tree Level Order Traversal

// Given an n-ary tree, return the level order traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

// Example 1:
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [[1],[3,2,4],[5,6]]

class Node {
  /**
   * @param {number} val
   * @param {Node[]} children
   */

  constructor(val, children) {
    this.val = val
    this.children = children || []
  }
}

/**
 * @param {Node} root
 * @returns {number[][]}
 */

// NOTE: Iterative solution

// O(n) time | O(n) space
function levelOrder(root) {
  if (!root) return []

  const result = []
  const queue = [root]

  while (queue.length) {
    const currentLevel = []
    const size = queue.length

    for (let i = 0; i < size; i++) {
      const current = queue.shift()
      currentLevel.push(current.val)

      if (current.children) queue.push(...current.children)
    }

    result.push(currentLevel)
  }

  return result
}

// -----------------------------
// SOLUTION 2

// NOTE: Recursive solution

// O(n) time | O(n) space
function levelOrder2(root) {
  const result = []
  BFS(root, 0)
  return result

  function BFS(node, depth) {
    if (!node) return

    // we need to check if the depth is equal to the length of the result array
    if (depth === result.length) result.push([])

    // we push the current node value into the result array at the current depth
    result[depth].push(node.val)

    // we recursively call BFS on all the children of the current node
    for (const child of node.children) {
      BFS(child, depth + 1)
    }
  }
}

// -----------------------------
// TESTS

const root = new Node(1)
root.children.push(new Node(3))
root.children.push(new Node(2))
root.children.push(new Node(4))
root.children[0].children.push(new Node(5))
root.children[0].children.push(new Node(6))

console.log(levelOrder(root)) // [[1],[3,2,4],[5,6]]
console.log(levelOrder2(root)) // [[1],[3,2,4],[5,6]]

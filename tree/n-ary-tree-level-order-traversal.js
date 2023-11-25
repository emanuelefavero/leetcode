// * N-ary Tree Level Order Traversal

// Given an n-ary tree, return the level order traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

// Example 1:
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [[1],[3,2,4],[5,6]]

class Node {
  constructor(val, children) {
    this.val = val
    this.children = children || []
  }
}

function levelOrder(root) {
  if (!root) return []

  let result = []
  let queue = [root]

  while (queue.length) {
    let currentLevel = []
    let size = queue.length

    for (let i = 0; i < size; i++) {
      let current = queue.shift()
      currentLevel.push(current.val)

      if (current.children) queue.push(...current.children)
    }

    result.push(currentLevel)
  }

  return result
}

// -----------------------------
// TESTS

let root = new Node(1)
root.children.push(new Node(3))
root.children.push(new Node(2))
root.children.push(new Node(4))
root.children[0].children.push(new Node(5))
root.children[0].children.push(new Node(6))

console.log(levelOrder(root)) // [[1],[3,2,4],[5,6]]

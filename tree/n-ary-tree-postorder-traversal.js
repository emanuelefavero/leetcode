// * N-ary Tree Postorder Traversal

// Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

// Example 1:
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [5,6,3,2,4,1]

class Node {
  constructor(val, children) {
    this.val = val
    this.children = children || []
  }
}

function postorder(root, result = []) {
  if (!root) return result

  for (let child of root.children) {
    postorder(child, result)
  }

  result.push(root.val)

  return result
}

// -----------------------------
// TESTS

let root = new Node(1)
root.children = [new Node(3), new Node(2), new Node(4)]
root.children[0].children = [new Node(5), new Node(6)]
root.children[1].children = [new Node(7)]

console.log(postorder(root)) // [5, 6, 3, 7, 2, 4, 1]

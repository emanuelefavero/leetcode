// return true if there is a path from cur to target

class Node {
  constructor(val, neighbors) {
    this.val = val || null
    this.neighbors = neighbors || []
  }
}

function DFS(root, target) {
  let stack = [root]
  let visited = new Set()

  while (stack.length) {
    let current = stack.pop()

    if (current === target) return true

    visited.add(current)

    for (let neighbor of current.neighbors) {
      if (!visited.has(neighbor)) stack.push(neighbor)
    }
  }

  return false
}

// ------------------------
// TESTS

let node1 = new Node(1, [])
let node2 = new Node(2, [])
let node3 = new Node(3, [])
let node4 = new Node(4, [])

node1.neighbors = [node2, node4]
node2.neighbors = [node1, node3]
node3.neighbors = [node2, node4]
node4.neighbors = [node1, node3]

console.log(DFS(node1, node4)) // true
console.log(DFS(node1, new Node(5))) // false

// * Clone Graph

// Given a reference of a node in a connected undirected graph
// Return a deep copy (clone) of the graph
// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors

/**
 * @typedef {Object} Node
 */

class Node {
  constructor(val, neighbors) {
    this.val = val
    this.neighbors = neighbors
  }
}

/**
 * @param {Node} node
 * @returns {Node}
 */

// TIP: This solution uses recursion (depth-first search) to solve the problem and a map to keep track of the nodes that have been visited

function cloneGraph(node) {
  if (!node) return null

  let map = new Map()

  function DFS(node) {
    if (!map.has(node.val)) {
      map.set(node.val, new Node(node.val))
      map.get(node.val).neighbors = node.neighbors.map(
        (neighbor) => DFS(neighbor) // recursively call DFS on each neighbor
      )
    }

    return map.get(node.val) // return the node from the map
  }

  return DFS(node)
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

console.log(cloneGraph(node1)) // Node { val: 1, neighbors: [ [Node], [Node] ] }

// * Find Center of Star Graph

// There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

// You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.

// TIP: The center node appears in each edge, so we can simply compare the nodes of the first and second edges to identify the common node, which serves as the center.

/**
 * @param {number[][]} edges
 * @returns {number}
 */

// O(1) time | O(1) space
function findCenter(edges) {
  if (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) {
    return edges[0][0]
  }

  return edges[0][1]
}

// -------------------
// SOLUTION 2

function findCenter2(edges) {
  const [[a, b], [c, d]] = edges
  return a === c || a === d ? a : b
}

// -------------------
// TESTS

const edges = [
  [1, 2],
  [2, 3],
  [4, 2],
]

// 1
console.log(findCenter(edges)) // 2
// Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.

// 2
console.log(findCenter2(edges)) // 2

// * Number of Provinces

/*
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.
*/

// TIP: This solution uses depth-first search (DFS) to traverse the matrix array. If a city is connected to another city, we add it to the visited set and increment the result by 1. We then recursively call DFS on the connected city and its neighbors. If a city is not connected to another city, we do nothing.
// NOTE: This solution does not use disjoint sets (union-find) but it is easier to understand

function findCircleNum(isConnected) {
  let visited = new Set()
  let result = 0

  for (let i = 0; i < isConnected.length; i++) {
    if (!visited.has(i)) {
      result++
      DFS(isConnected, i, visited)
    }
  }

  return result
}

function DFS(isConnected, i, visited) {
  visited.add(i)

  for (let j = 1; j < isConnected.length; j++) {
    if (isConnected[i][j] && !visited.has(j)) {
      DFS(isConnected, j, visited)
    }
  }
}

// -----------------------------
// SOLUTION 2

// TIP: This solution uses disjoint sets (union-find) to solve the problem. We create a new DisjointSet object and add each city to the set. We then loop through the isConnected array and union each city with its connected neighbors. We then loop through the parent object and increment the result by 1 for each city that is its own parent (i.e. each city that is not connected to another city)

// TODO jsDoc
// TODO link to README

function findCircleNum2(isConnected) {
  class DisjointSet {
    constructor(n) {
      this.graph = [...Array(n)].map((_, i) => i) // initialize the graph with each city as its own parent
      this.size = n
    }

    find(id) {
      if (this.graph[id] === id) return id

      this.graph[id] = this.find(this.graph[id])

      return this.graph[id]
    }

    union(x, y) {
      let rootX = this.find(x)
      let rootY = this.find(y)

      if (rootX !== rootY) {
        this.graph[rootY] = rootX
        this.size--
      }
    }
  }

  let disjointSet = new DisjointSet(isConnected.length)

  for (let r = 0; r < isConnected.length; r++) {
    for (let c = 0; c < isConnected.length; c++) {
      if (isConnected[r][c]) disjointSet.union(r, c)
    }
  }

  return disjointSet.size // the size will be the number of provinces
}

// -----------------------------
// TESTS

// solution 1
console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
) // 2

console.log(
  findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
) // 3

// solution 2
console.log(
  findCircleNum2([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
) // 2

console.log(
  findCircleNum2([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
) // 3

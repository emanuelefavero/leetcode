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

// ---------------------------
// TESTS

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

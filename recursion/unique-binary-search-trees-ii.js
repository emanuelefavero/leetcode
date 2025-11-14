// * Unique Binary Search Trees II

// Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

/*
Example 1:
1      1          2           3       3
  \      \      /   \       /       / 
    3     2    1     3     2      1
  /        \             /         \
2           3           1            2

input: n = 3
output: [
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
*/

class TreeNode {
  /**
   * @param {number} val
   * @param {TreeNode} left
   * @param {TreeNode} right
   */

  constructor(val, left, right) {
    this.val = val
    this.left = left || null
    this.right = right || null
  }
}

/**
 * @param {number} n
 * @returns {TreeNode[]}
 */

function generateTrees(n) {
  if (n === 0) return [] // edge case

  function generateBacktrack(start, end) {
    if (start > end) return [null] // base case

    const result = []

    for (let i = start; i <= end; i++) {
      const leftTrees = generateBacktrack(start, i - 1)
      const rightTrees = generateBacktrack(i + 1, end)

      for (const l of leftTrees) {
        for (const r of rightTrees) {
          const current = new TreeNode(i)

          current.left = l
          current.right = r

          result.push(current)
        }
      }
    }

    return result
  }

  return generateBacktrack(1, n) // start = 1, end = n
}

// -----------------------------
// TESTS

console.log(generateTrees(3))
// [[1,null,3,2],[3,2,null,1],[3,1,null,null,2],[2,1,3],[1,null,2,null,3]]
console.log(generateTrees(1))
// [[1]]

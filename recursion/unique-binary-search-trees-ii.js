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
  constructor(val, left, right) {
    this.val = val
    this.left = left || null
    this.right = right || null
  }
}

// TODO commit this file
// TODO add jsDoc

function generateTrees(n) {}

// -----------------------------
// TESTS

console.log(generateTrees(3))
// [[1,null,3,2],[3,2,null,1],[3,1,null,null,2],[2,1,3],[1,null,2,null,3]]
console.log(generateTrees(1))
// [[1]]

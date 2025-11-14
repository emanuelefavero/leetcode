// Given the root of a binary tree, return all duplicate subtrees.

// For each kind of duplicate subtrees, you only need to return the root node of any one of them.

// Two trees are duplicate if they have the same structure with the same node values.

class TreeNode {
  /**
   *
   * @param {number} val
   * @param {TreeNode | null} left
   * @param {TreeNode | null} right
   */

  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

/**
 *
 * @param {TreeNode} root
 * @returns {TreeNode[]}
 */

function findDuplicateSubtrees(root) {
  const map = new Map()
  const result = []

  dfs(root, map, result)

  return result
}

function dfs(root, map, result) {
  if (!root) return '#'

  // TIP: This is the formula to get the subtree
  const subtree = `${root.val}.${dfs(root.left, map, result)}.${dfs(
    root.right,
    map,
    result
  )}`

  // keep track of the number of times the subtree appears
  if (map.has(subtree)) {
    map.set(subtree, map.get(subtree) + 1)
  } else map.set(subtree, 1)

  // if the subtree appears twice, push the root into the result array
  if (map.get(subtree) === 2) result.push(root)

  return subtree
}

// -----------------------------
// TESTS

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.right = new TreeNode(3)
root.right.left = new TreeNode(2)
root.right.left.left = new TreeNode(4)
root.right.right = new TreeNode(4)

/*
    1
   / \
  2   3
 /   / \
4   2   4
   /
  4
*/

// input: root = [1,2,3,null,2,null,4,null,4]
console.log(findDuplicateSubtrees(root))
// [[2, 4], [4]]

// * Minimum Depth of Binary Tree

/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val
    this.left = left || null
    this.right = right || null
  }
}

function minDepth(root) {
  if (!root) return 0

  let left = minDepth(root.left)
  let right = minDepth(root.right)

  if (left === 0 || right === 0) {
    return left + right + 1
  }

  return Math.min(left, right) + 1
}

// ---------------------
// SOLUTION 2

// TIP: THis solution uses BFS

function minDepth2(root) {
  if (!root) return 0

  let queue = [[root, 1]]

  while (queue.length) {
    let [node, depth] = queue.shift()

    if (!node.left && !node.right) return depth

    if (node.left) {
      queue.push([node.left, depth + 1])
    }

    if (node.right) {
      queue.push([node.right, depth + 1])
    }
  }
}

// ---------------------
// TESTS

let tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)

console.log(minDepth(tree)) // 2
console.log(minDepth2(tree)) // 2

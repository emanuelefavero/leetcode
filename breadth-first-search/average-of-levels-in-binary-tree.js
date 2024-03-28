// * Average of Levels in Binary Tree

// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

// TODO jsDoc

function averageOfLevels(root) {
  let result = []
  let queue = [root]

  while (queue.length) {
    let size = queue.length // ?
    let sum = 0

    for (let i = 0; i < size; i++) {
      let current = queue.shift()
      sum += current.val

      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }

    result.push(sum / size) // push average of current level
  }

  return result
}

// ? we need to assign the size of the queue (the current level size) to a variable because the queue length will change in the loop

// -------------------------
// TESTS

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

console.log(averageOfLevels(root)) // [3.00000,14.50000,11.00000]

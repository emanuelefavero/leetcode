// * Serialize and Deserialize Binary Tree

// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

class TreeNode {
  /**
   * @param {number} val
   */

  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

/**
 * @param {TreeNode} root
 * @returns {number[]}
 */

// O(n) time | O(n) space - recursive approach
function serialize(root) {
  const data = []

  function recurse(node) {
    if (!node) data.push(null)
    else {
      data.push(node.val)
      recurse(node.left)
      recurse(node.right)
    }
  }

  recurse(root)
  return data
}

/**
 * @param {number[]} data
 * @returns {TreeNode}
 */

// O(n) time | O(n) space - recursive approach
function deserialize(data) {
  function recurse() {
    if (!data.length) return

    const val = data.shift() // remove/get first element
    if (val === null) return null

    const node = new TreeNode(val)
    node.left = recurse()
    node.right = recurse()
    return node
  }

  return recurse()
}

// -----------------------------
// SOLUTION 2

// TIP: This solution uses built in methods (JSON.stringify, JSON.parse) and it is more efficient than the first solution

function serialize2(root) {
  return JSON.stringify(root)
}

function deserialize2(data) {
  return JSON.parse(data)
}

// -----------------------------
// TESTS

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.right.left = new TreeNode(4)
root.right.right = new TreeNode(5)

// 1
// console.log(deserialize(serialize(root))) // [1,2,3,null,null,4,5]

// 2
console.log(deserialize2(serialize2(root))) // [1,2,3,null,null,4,5]

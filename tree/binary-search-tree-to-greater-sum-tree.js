// * Binary Search Tree to Greater Sum Tree

/*
Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

As a reminder, a binary search tree is a tree that satisfies these constraints:

- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.
*/

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
 * @returns {TreeNode}
 */

// O(n) time | O(h) space - where h is the height of the tree
function bstToGst(root) {
  let sum = 0

  const traverse = (node) => {
    if (!node) return

    traverse(node.right) // traverse the right subtree first
    sum += node.val // update the sum with the current node's value
    node.val = sum // update the current node's value to the sum
    traverse(node.left) // traverse the left subtree
  }

  traverse(root)
  return root
}

// -----------------------------
// SOLUTION 2

// TIP: We can also use a stack instead of recursion to traverse the tree

function bstToGst2(root) {
  let current = root
  const stack = []
  let sum = 0

  while (current || stack.length) {
    while (current) {
      stack.push(current)
      current = current.right // go to the rightmost node
    }

    current = stack.pop()
    sum += current.val
    current.val = sum
    current = current.left // go to the left subtree
  }

  return root
}

// -----------------------------
// TESTS

// 1
let root = new TreeNode(4)
root.left = new TreeNode(1)
root.right = new TreeNode(6)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(2)
root.left.right.right = new TreeNode(3)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(7)
root.right.right.right = new TreeNode(8)

// input: [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]

//       4
//     /   \
//    1     6
//   / \   / \
//  0   2 5   7
//       \     \
//        3     8

console.log(bstToGst(root))
// Expected output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
//       30
//     /   \
//    36    21
//   / \   / \
//  36 35 26 15
//       \     \
//        33    8

// 2
root = new TreeNode(4)
root.left = new TreeNode(1)
root.right = new TreeNode(6)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(2)
root.left.right.right = new TreeNode(3)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(7)
root.right.right.right = new TreeNode(8)

console.log(bstToGst2(root))

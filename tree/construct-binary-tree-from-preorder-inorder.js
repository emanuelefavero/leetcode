/**
 * @typedef {Object} TreeNode
 * @property {number} val
 * @property {TreeNode} left
 * @property {TreeNode} right
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

/**
 * * Construct Binary Tree from Preorder and Inorder Traversal
 *
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
 *
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @returns {TreeNode}
 */

// TIP: The first element of preorder will always be the root of a subtree. We can determine its left and right subtrees by finding its position in the inorder array. The left subtree will be the elements to the left of the root in the inorder array, and the right subtree will be the elements to the right of the root in the inorder array.

// O(n) time | O(n) space
function buildTree(preorder, inorder) {
  let hash = {}
  for (let i = 0; i < inorder.length; i++) hash[inorder[i]] = i

  function recurse(start, end) {
    if (start > end) return null

    let value = preorder.shift()
    let root = new TreeNode(value)
    root.left = recurse(start, hash[value] - 1)
    root.right = recurse(hash[value] + 1, end)

    return root
  }

  return recurse(0, inorder.length - 1)
}

// -----------------------------
// SOLUTION 2

// O(n) time | O(n) space
function buildTree2(preorder, inorder) {
  let p = 0
  let i = 0

  function recurse(stop) {
    if (inorder[i] !== stop) {
      let root = new TreeNode(preorder[p++])
      root.left = recurse(root.val)
      i++
      root.right = recurse(stop)
      return root
    }

    return null // base case
  }

  return recurse()
}

// -----------------------------
// SOLUTION 3

// O(n) time | O(n) space
function buildTree3(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null

  let root = new TreeNode(preorder[0]) // first element of preorder is root
  let middle = inorder.indexOf(preorder[0]) // find root in inorder
  root.left = buildTree3(
    preorder.slice(1, middle + 1), // ? 1 starts at 1 index to skip root
    inorder.slice(0, middle)
  )
  root.right = buildTree3(preorder.slice(middle + 1), inorder.slice(middle + 1))
  return root
}

// -----------------------------
// TESTS

let preorder = [3, 9, 20, 15, 7]
let inorder = [9, 3, 15, 20, 7]

// NOTE: Only one log statement can be used at a time

// console.log(buildTree(preorder, inorder)) // [3,9,20,null,null,15,7]
// console.log(buildTree2(preorder, inorder)) // [3,9,20,null,null,15,7]
console.log(buildTree3(preorder, inorder)) // [3,9,20,null,null,15,7]

// * Construct Binary Tree from Preorder and Inorder Traversal

// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

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
// TESTS

let preorder = [3, 9, 20, 15, 7]
let inorder = [9, 3, 15, 20, 7]

console.log(buildTree(preorder, inorder)) // [3,9,20,null,null,15,7]

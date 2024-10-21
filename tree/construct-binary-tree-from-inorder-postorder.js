class TreeNode {
  /**
   * @param {number} val
   * @param {TreeNode} left
   * @param {TreeNode} right
   */
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

/**
 * * Construct Binary Tree from Inorder and Postorder Traversal
 *
 * Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree
 *
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @returns {TreeNode}
 */

// TIP: The last element of postorder will always be the root of a subtree. We can determine its left and right subtrees by finding its position in the inorder array. The left subtree will be the elements to the left of the root in the inorder array, and the right subtree will be the elements to the right of the root in the inorder array.

// O(n) time | O(n) space
function buildTree(inorder, postorder) {
  // Store inorder values in hash table
  let hash = {}
  for (let i = 0; i < inorder.length; i++) hash[inorder[i]] = i

  function recurse(start, end) {
    if (start > end) return null // base case

    let value = postorder.pop() // remove/get last element of postorder
    let root = new TreeNode(value)
    root.right = recurse(hash[value] + 1, end)
    root.left = recurse(start, hash[value] - 1)

    return root // return root of subtree

    // TIP: hash[value] + 1 is the element to the right of the root in the inorder array
  }

  return recurse(0, inorder.length - 1)
}

// -----------------------------
// TESTS

let inorder = [9, 3, 15, 20, 7]
let postorder = [9, 15, 7, 20, 3]

console.log(buildTree(inorder, postorder)) // [3,9,20,null,null,15,7]

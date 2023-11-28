// * Delete Node in a BST

/*
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.

Example:
Input: root = [5,3,6,2,4,null,7], key = 3

       5
      / \
     3   6
    / \   \
   2   4   7
Output: [5,4,6,2,null,null,7]

      5
      / \
    4   6
    /     \
  2       7
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

// TODO jsDoc

function deleteNode(root, key) {
  if (!root) return null

  // search for node to remove
  if (key < root.val) root.left = deleteNode(root.left, key)
  else if (key > root.val) root.right = deleteNode(root.right, key)
  // if node is found, delete it
  else {
    // Check if node has 0, 1, or 2 children
    if (!root.left) return root.right
    else if (!root.right) return root.left

    // if node has 2 children, replace node with the minimum node in the right subtree
    let minNode = findMin(root.right)
    root.val = minNode.val // replace node with minNode
    root.right = deleteNode(root.right, root.val) // delete minNode since it's now the current root node
  }

  return root
}

// find the minimum node in a BST (left-most node)
function findMin(root) {
  while (root.left) root = root.left
  return root
}

// -----------------------------
// TESTS

let root = new TreeNode(5)
root.left = new TreeNode(3)
root.right = new TreeNode(6)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.right.right = new TreeNode(7)

console.log(deleteNode(root, 3)) // [5,4,6,2,null,null,7]

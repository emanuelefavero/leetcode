// * Insert into a Binary Search Tree

// You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

// Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

function insertIntoBST(root, val) {
  if (!root) return new TreeNode(val)

  if (val < root.val) root.left = insertIntoBST(root.left, val)
  else root.right = insertIntoBST(root.right, val)

  return root
}

// -----------------------------
// SOLUTION 2

function insertIntoBST2(root, val) {
  if (!root) return new TreeNode(val)

  let current = root

  while (current) {
    if (val < current.val) {
      if (!current.left) {
        current.left = new TreeNode(val)
        break
      } else current = current.left
    } else {
      if (!current.right) {
        current.right = new TreeNode(val)
        break
      } else current = current.right
    }
  }

  return root
}

// -----------------------------
// TESTS

let root = new TreeNode(4)
root.left = new TreeNode(2)
root.right = new TreeNode(7)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)

// NOTE: Uncomment only one of the following lines at a time

// 1
// console.log(insertIntoBST(root, 5)) // [4,2,7,1,3,5]

// 2
console.log(insertIntoBST2(root, 5)) // [4,2,7,1,3,5]

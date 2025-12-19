// * Reverse Odd Levels of Binary Tree

/*
Given the root of a perfect binary tree, reverse the node values at each odd level of the tree.

- For example, suppose the node values at level 3 are [2,1,3,4,7,11,29,18], then it should become [18,29,11,7,4,3,1,2].
Return the root of the reversed tree.

A binary tree is perfect if all parent nodes have two children and all leaves are on the same level.

The level of a node is the number of edges along the path between it and the root node.
*/

function reverseOddLevels(root) {
  const DFS = (leftNode, rightNode, level) => {
    if (!leftNode || !rightNode) return

    if (level % 2 !== 0) {
      let temp = leftNode.val
      leftNode.val = rightNode.val
      rightNode.val = temp
    }

    DFS(leftNode.left, rightNode.right, level + 1)
    DFS(leftNode.right, rightNode.left, level + 1)
  }

  DFS(root.left, root.right, 1) // ? Start from level 1, not 0 (root level)

  return root
}

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

// -----------------------------
// TESTS

const root = new TreeNode(2)
root.left = new TreeNode(3)
root.right = new TreeNode(5)
root.left.left = new TreeNode(8)
root.left.right = new TreeNode(13)
root.right.left = new TreeNode(21)
root.right.right = new TreeNode(34)

console.log(reverseOddLevels(root)) // [2,5,3,8,13,21,34]
/*
        2
      /   \
     3     5
    / \   / \
   8  13 21 34

becomes

        2
      /   \
     5     3
    / \   / \
   8  13 21 34

Explanation: 
The tree has only one odd level.
The nodes at level 1 are 3, 5 respectively, which are reversed and become 5, 3.
*/

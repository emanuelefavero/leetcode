// * Populating Next Right Pointers in Each Node

/*
You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
*/

class Node {
  /**
   * @param {number} val
   * @param {Node} left
   * @param {Node} right
   * @param {Node} next
   */

  constructor(val, left, right, next) {
    this.val = val || null
    this.left = left || null
    this.right = right || null
    this.next = next || null
  }
}

/**
 * For example, given the following perfect binary tree:
 * @see https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/994/
 *
 * @param {Node} root
 * @returns {Node}
 */

// TIP: DFS approach (preorder traversal)

// O(n) time | O(n) space
function connect(root) {
  if (!root || !root.left) return root

  root.left.next = root.right
  root.right.next = root.next ? root.next.left : null

  connect(root.left)
  connect(root.right)

  return root
}

// -----------------------------
// TESTS

const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

console.log(connect(root)) // [1,#,2,3,#,4,5,6,7,#]

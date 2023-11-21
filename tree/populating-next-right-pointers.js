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
  constructor(val, left, right, next) {
    this.val = val || null
    this.left = left || null
    this.right = right || null
    this.next = next || null
  }
}

// TIP: DFS approach (preorder traversal)

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

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

console.log(connect(root))

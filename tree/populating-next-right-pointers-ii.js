// * Populating Next Right Pointers in Each Node II

/*
Given a binary tree

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

function connect(root) {
  if (!root) return root

  function getNext(next) {
    if (!next) return null

    let nextLeft = next?.left
    let nextRight = next?.right

    return nextLeft ?? nextRight ?? getNext(next.next)
  }

  if (root.left) root.left.next = root.right ?? getNext(root?.next)
  if (root.right) root.right.next = getNext(root?.next)

  connect(root.right)
  connect(root.left)
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

console.log(connect(root.left)) // [1,#,2,3,#,4,5,6,7,#]

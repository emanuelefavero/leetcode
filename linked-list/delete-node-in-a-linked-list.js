// * Delete Node in a Linked List

/*
There is a singly-linked list head and we want to delete a node node in it.

You are given the node to be deleted node. You will not be given access to the first node of head.

All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

The value of the given node should not exist in the linked list.
The number of nodes in the linked list should decrease by one.
All the values before node should be in the same order.
All the values after node should be in the same order.
Custom testing:

For the input, you should provide the entire linked list head and the node to be given node. node should not be the last node of the list and should be an actual node in the list.
We will build the linked list and pass the node to your function.
The output will be the entire list after calling your function.
*/

/**
 * @typedef {Object} ListNode
 * @property {*} val
 */

class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

/**
 * @param {ListNode} node
 * @returns {void} Do not return anything, modify node in-place instead
 */

// O(1) time | O(1) space
function deleteNode(node) {
  node.val = node.next.val // copy the next node's value to the current node
  node.next = node.next.next // skip the next node
}

// -------------------
// SOLUTION 2

// function deleteNode2(node) {
//   let current = node
//   let previous = current

//   while (current && current.next) {
//     current.val = current.next.val

//     previous = current
//     current = current.next
//   }

//   previous.next = null
// }

// -------------------
// TESTS

let head = new ListNode(4)
head.next = new ListNode(5)
head.next.next = new ListNode(1)
head.next.next.next = new ListNode(9)

let node = head.next
deleteNode(node)
console.log(head) // 4 -> 1 -> 9
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

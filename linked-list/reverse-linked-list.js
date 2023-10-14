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

// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Use the method where you go through the list and insert each node at the beginning of the list
function reverseList(head) {
  let prev = null
  let current = head

  while (current) {
    let next = current.next // save next node
    current.next = prev // reverse the link
    prev = current // move prev forward
    current = next // move current forward
  }

  return prev // prev is the new head
}

// -----------------------------
// TEST

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)

console.log(reverseList(head)) // 4 -> 3 -> 2 -> 1

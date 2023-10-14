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

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head

function removeElements(head, val) {
  let dummy = new ListNode(0)
  dummy.next = head
  let current = dummy

  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return dummy.next
}

// -----------------------------
// TEST

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(6)
head.next.next.next = new ListNode(3)

console.log(removeElements(head, 6)) // 1 -> 2 -> 3

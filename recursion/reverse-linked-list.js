// * Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

function reverseList(head) {
  let prev = null
  let current = head

  while (current) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}

// -----------------------
// TESTS

// 1
let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
console.log(reverseList(head)) // 4 -> 3 -> 2 -> 1

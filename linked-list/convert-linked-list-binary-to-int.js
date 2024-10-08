// * Convert Binary Number in a Linked List to Integer

/*
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.
*/

class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

function getDecimalValue(head) {
  let current = head
  let result = ''

  while (current) {
    result += current.val
    current = current.next
  }

  return parseInt(result, 2)
}

// -----------------------------
// TESTS

let head = new ListNode(1)
head.next = new ListNode(0)
head.next.next = new ListNode(1)

console.log(getDecimalValue(head)) // 5

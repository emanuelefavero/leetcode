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
// SOLUTION 2

// TIP: By multiplying result by 2 and adding current value we can convert binary to decimal as we traverse the linked list

function getDecimalValue2(head) {
  let current = head
  let result = 0

  while (current) {
    result = result * 2 + current.val

    current = current.next
  }

  return result
}

// -----------------------------
// TESTS

let head = new ListNode(1)
head.next = new ListNode(0)
head.next.next = new ListNode(1)

// 1
console.log(getDecimalValue(head)) // 5

// 2
console.log(getDecimalValue2(head)) // 5

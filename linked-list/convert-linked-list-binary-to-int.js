// * Convert Binary Number in a Linked List to Integer

/*
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.
*/

class ListNode {
  /**
   * @param {number} val
   * @param {ListNode | null} next
   */

  constructor(val) {
    this.val = val
    this.next = null
  }
}

/**
 * @param {ListNode} head
 * @returns {number}
 */

// O(n) time | O(n) space
function getDecimalValue(head) {
  let result = ''

  while (head) {
    result += head.val
    head = head.next
  }

  return parseInt(result, 2)
}

// -----------------------------
// SOLUTION 2

// TIP: By multiplying result by 2 and adding current value we can convert binary to decimal as we traverse the linked list

// O(n) time | O(1) space
function getDecimalValue2(head) {
  let result = 0

  while (head) {
    result = result * 2 + head.val
    head = head.next
  }

  return result
}

// -----------------------------
// SOLUTION 3

// TIP: We can use bitwise operators to convert binary to decimal as we traverse the linked list

function getDecimalValue3(head) {
  let result = 0

  while (head) {
    result = (result << 1) | head.val
    head = head.next
  }

  return result
}

// -----------------------------
// TESTS

const head = new ListNode(1)
head.next = new ListNode(0)
head.next.next = new ListNode(1)

// 1
console.log(getDecimalValue(head)) // 5

// 2
console.log(getDecimalValue2(head)) // 5

// 3
console.log(getDecimalValue3(head)) // 5

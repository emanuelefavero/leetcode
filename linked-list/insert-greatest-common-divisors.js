// * Insert Greatest Common Divisors in Linked List

/*
Given the head of a linked list head, in which each node contains an integer value.

Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

Return the linked list after insertion.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.
*/

class ListNode {
  constructor(val, next) {
    this.val = val || 0
    this.next = next || null
  }
}

/**
 * @param {ListNode} head
 * @returns {ListNode}
 */

// O(n^2) time | O(1) space
function insertGreatestCommonDivisors(head) {
  let current = head

  while (current && current.next) {
    let currentVal = current.val
    let nextVal = current.next.val

    // Find the lower number between the two to have a smaller range to find the greatest common divisor
    let lower = Math.min(currentVal, nextVal)

    // Find the greatest common divisor
    let gcd = lower
    for (let i = lower; i > 0; i--) {
      if (currentVal % i === 0 && nextVal % i === 0) {
        gcd = i
        break
      }
    }

    // Insert the new node with the greatest common divisor
    const newNode = new ListNode(gcd)
    newNode.next = current.next
    current.next = newNode

    // Move to the next node by skipping the newly inserted node
    current = newNode.next
  }

  return head
}

// -----------------------------
// TESTS

let head = new ListNode(18)
head.next = new ListNode(6)
head.next.next = new ListNode(10)
head.next.next.next = new ListNode(3)

// Print the result
let resultHead = insertGreatestCommonDivisors(head)
let current = resultHead
while (current) {
  console.log(current.val)
  current = current.next
}
// 18 -> 6 -> 6 -> 2 -> 10 -> 1 -> 3

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
    const currentVal = current.val
    const nextVal = current.next.val

    // Find the lower number between the two to have a smaller range to find the greatest common divisor
    const lower = Math.min(currentVal, nextVal)

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
// SOLUTION 2

// TIP: To solve this problem we can also use the Euclidean Algorithm (@see https://en.wikipedia.org/wiki/Euclidean_algorithm) to find the greatest common divisor. We keep dividing the dividend by the remainder until the remainder is 0. This way we can find the greatest common divisor in O(log n) time

// O(log n) time | O(1) space
function gcd(a, b) {
  if (a % b === 0) return b
  return gcd(b, a % b)
}

// O(n) time | O(1) space
function insertGreatestCommonDivisors2(head) {
  let current = head

  while (current && current.next) {
    const currentVal = current.val
    const nextVal = current.next.val

    const gcdVal = gcd(currentVal, nextVal)

    const newNode = new ListNode(gcdVal)
    newNode.next = current.next
    current.next = newNode

    current = newNode.next
  }

  return head
}

// -----------------------------
// TESTS

// 1
let head = new ListNode(18)
head.next = new ListNode(6)
head.next.next = new ListNode(10)
head.next.next.next = new ListNode(3)

console.log(insertGreatestCommonDivisors(head))
// 18 -> 6 -> 6 -> 2 -> 10 -> 1 -> 3

// 2
head = new ListNode(18)
head.next = new ListNode(6)
head.next.next = new ListNode(10)
head.next.next.next = new ListNode(3)

console.log(insertGreatestCommonDivisors2(head))
// 18 -> 6 -> 6 -> 2 -> 10 -> 1 -> 3

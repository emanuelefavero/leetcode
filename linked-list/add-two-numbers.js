class ListNode {
  /**
   * @param {number} val
   */

  constructor(val) {
    this.val = val
    this.next = null
  }
}

/**
 * * Add Two Numbers
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return the sum as a linked list
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */

/*
EXAMPLE:

2 -> 4 -> 3
5 -> 6 -> 4
-----------
7 -> 0 -> 8

Explanation: 342 + 465 = 807
*/

function addTwoNumbers(l1, l2) {
  const num1 = []
  const num2 = []

  while (l1) {
    num1.push(l1.val)
    l1 = l1.next
  }

  while (l2) {
    num2.push(l2.val)
    l2 = l2.next
  }

  const reversedNum1 = Number(num1.reverse().join(''))
  const reversedNum2 = Number(num2.reverse().join(''))

  const sum = (reversedNum1 + reversedNum2).toString()

  // Create linked list from sum (add new nodes to head so that sum is reversed)
  let result = null
  for (let i = 0; i < sum.length; i++) {
    const newNode = new ListNode(sum[i])
    newNode.next = result
    result = newNode
  }

  return result
}

// -----------------------------
// SOLUTION 2

// TIP: This solution uses recursion and carry but is less easy and readable

function addTwoNumbers2(l1, l2, carry) {
  // BASE CASE
  if (!l1 && !l2 && !carry) return null

  let total = carry || 0 // 0 if no carry

  // Add remaining values if any
  if (l1) total += l1.val
  if (l2) total += l2.val

  // Create new node with total % 10 - % 10 converts to single digit base 10
  const newNode = new ListNode(total % 10)

  // Recursively call function with next nodes
  newNode.next = addTwoNumbers2(
    l1 ? l1.next : null,
    l2 ? l2.next : null,
    total > 9 ? 1 : 0 // 1 if total > 9
  )

  return newNode // return linked list with total
}

// -----------------------------
// TESTS

const l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

console.log(addTwoNumbers(l1, l2)) // 708 (as linked list)

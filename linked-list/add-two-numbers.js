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

function addTwoNumbers(l1, l2) {
  let num1 = []
  let num2 = []

  while (l1) {
    num1.push(l1.val)
    l1 = l1.next
  }

  while (l2) {
    num2.push(l2.val)
    l2 = l2.next
  }

  let reversedNum1 = Number(num1.reverse().join(''))
  let reversedNum2 = Number(num2.reverse().join(''))

  let sum = (reversedNum1 + reversedNum2).toString()

  let result = null

  for (let i = 0; i < sum.length; i++) {
    let newNode = new ListNode(sum[i])
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
  let newNode = new ListNode(total % 10)

  // Recursively call function with next nodes
  newNode.next = addTwoNumbers2(
    l1 ? l1.next : null,
    l2 ? l2.next : null,
    total > 9 ? 1 : 0 // 1 if total > 9
  )

  return newNode // return linked list with total
}

let l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

let l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

console.log(addTwoNumbers2(l1, l2)) // 708

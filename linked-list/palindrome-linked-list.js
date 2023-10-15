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

function isPalindrome(head) {
  let reversed = reverseList(head)

  return reversed
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

  return prev // prev is the new head
}

// -----------------------------
// TEST

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(1)

console.log(isPalindrome(head)) // true

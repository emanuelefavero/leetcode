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
  let slow = head
  let fast = head

  // find middle node
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // reverse second half of list
  let prev = null
  while (slow) {
    let next = slow.next
    slow.next = prev
    prev = slow
    slow = next
  }

  // compare the first half and the reversed second half
  // TIP: prev is now the head of the reversed second half
  while (prev) {
    if (head.val !== prev.val) return false

    head = head.next
    prev = prev.next
  }

  return true
}

// -----------------------------
// TEST

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(1)

console.log(isPalindrome(head)) // true

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
 * * Palindrome Linked List
 *
 * Given the head of a singly linked list, return true if it is a palindrome
 *
 * @param {ListNode} head
 * @returns {boolean}
 */

// O(n) time | O(1) space
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
    const next = slow.next
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
// SOLUTION 2

// TIP: This solution uses a stack to store the first half of the list and then compares the second half of the list to the stack

function isPalindrome2(head) {
  const stack = []
  let slow = head
  let fast = head

  // push first half of list into stack
  while (fast && fast.next) {
    stack.push(slow.val)
    slow = slow.next
    fast = fast.next.next
  }

  // if list has odd number of nodes, skip the middle node
  if (fast) slow = slow.next

  // compare second half of list to stack
  while (slow) {
    const top = stack.pop()

    if (top !== slow.val) return false

    slow = slow.next
  }

  return true
}

// -----------------------------
// TEST

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(1)

console.log(isPalindrome(head)) // true

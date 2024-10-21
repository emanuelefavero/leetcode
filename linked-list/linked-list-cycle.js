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
 *
 * @param {ListNode} head
 * @returns {boolean}
 */

function hasCycle(head) {
  if (!head || !head.next) return false

  let slow = head
  let fast = head.next

  while (fast && fast.next) {
    if (slow === fast) return true

    fast = fast.next.next
    slow = slow.next
  }

  return false
}

// -----------------------------
// TESTS

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = head.next // cycle to node with val 2

console.log(hasCycle(head)) // true

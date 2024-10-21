class ListNode {
  /**
   * @param {number} val
   */

  constructor(val) {
    this.val = val
    this.next = null
  }
}

// * Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head

/**
 * * Remove Nth Node From End of List
 *
 * Given the head of a linked list, remove the nth node from the end of the list and return its head
 *
 * @param {ListNode} head
 * @param {number} n
 * @returns {ListNode}
 */

function removeNthFromEnd(head, n) {
  let slow = head
  let fast = head

  for (let i = 0; i < n; i++) {
    fast = fast.next
  }

  // if the node to remove is the head, return the next node
  if (!fast) return head.next

  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }

  slow.next = slow.next.next

  return head
}

// -----------------------------
// TESTS

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)

console.log(removeNthFromEnd(head, 2)) // 1 -> 2 -> 4

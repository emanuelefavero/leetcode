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
 * * Swap Nodes in Pairs
 *
 * Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */

// TIP: This solution uses recursion

// O(n) time | O(n) space
function swapPairs(head) {
  if (!head || !head.next) return head

  let first = head
  let second = head.next

  // swap
  let temp = first.val
  first.val = second.val
  second.val = temp

  swapPairs(first.next.next) // recurse

  return head
}

// -----------------------
// TESTS

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
console.log(swapPairs(head)) // 2 -> 1 -> 4 -> 3

let head2 = new ListNode(1)
console.log(swapPairs(head2)) // 1

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

/**
 *
 * @param {ListNode} head
 * @returns {ListNode | null}
 */

function detectCycle(head) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    // if cycle is detected, loop from head to slow to find the node where the cycle begins
    if (slow === fast) {
      let pos = head

      while (pos !== slow) {
        pos = pos.next
        slow = slow.next
      }

      return pos
    }
  }

  return null
}

// -----------------------------
// SOLUTION 2

// TIP: This solution uses a set to keep track of nodes that have been visited.

function detectCycle2(head) {
  let hash = new Set()

  while (head) {
    if (hash.has(head)) return head

    hash.add(head)
    head = head.next
  }

  return null
}

// -----------------------------
// TESTS

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = head.next // cycle to node with val 2

console.log(detectCycle(head)) // ListNode { val: 2, next: ListNode { val: 3, next: ListNode { val: 4, next: [Circular] } } }
console.log(detectCycle2(head)) // ListNode { val: 2, next: ListNode { val: 3, next: ListNode { val: 4, next: [Circular] } } }

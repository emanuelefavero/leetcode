class ListNode {
  /**
   *
   * @param {*} val
   */

  constructor(val) {
    this.val = val
    this.next = null
  }
}

function detectCycle(head) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    // if cycle is detected, loop from head to slow to find the index of the node where the cycle begins
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
// TESTS

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = head.next // cycle to node with val 2

console.log(detectCycle(head)) // tail connects to node index 1

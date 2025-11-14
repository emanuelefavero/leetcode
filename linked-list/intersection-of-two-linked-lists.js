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
 * * Intersection of Two Linked Lists
 *
 * Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null
 *
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @returns {ListNode | null}
 */

function getIntersectionNode(headA, headB) {
  const hash = new Set()

  while (headA) {
    hash.add(headA)
    headA = headA.next
  }

  while (headB) {
    if (hash.has(headB)) return headB

    headB = headB.next
  }

  return null
}

// -----------------------------
// SOLUTION 2

function getIntersectionNode2(headA, headB) {
  let a = headA
  let b = headB

  // Traverse the list. If one of the pointers reaches the end of the list, set it to the head of the other list
  while (a !== b) {
    if (a) a = a.next
    else a = headB

    if (b) b = b.next
    else b = headA

    // TIP: By setting a and b to the head of the other list, we are essentially making the lists the same length so they will reach the intersection at the same time (on the second iteration, try it on a whiteboard!)
  }

  return a // return either a or b (they are the same node)
}

// -----------------------------
// TESTS

const headA = new ListNode(4)
headA.next = new ListNode(1)
headA.next.next = new ListNode(8)
headA.next.next.next = new ListNode(4)
headA.next.next.next = new ListNode(5)

const headB = new ListNode(5)
headB.next = new ListNode(6)
headB.next.next = new ListNode(1)
headB.next.next.next = headA.next.next // intersection at node with val 8

console.log(getIntersectionNode(headA, headB)) // ListNode { val: 8, next: ListNode { val: 4, next: ListNode { val: 5, next: null } } }

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
 * * Intersection of Two Linked Lists
 *
 * Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null
 *
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @returns {ListNode | null}
 */

function getIntersectionNode(headA, headB) {
  let hash = new Set()

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
// TESTS

let headA = new ListNode(4)
headA.next = new ListNode(1)
headA.next.next = new ListNode(8)
headA.next.next.next = new ListNode(4)
headA.next.next.next = new ListNode(5)

let headB = new ListNode(5)
headB.next = new ListNode(6)
headB.next.next = new ListNode(1)
headB.next.next.next = headA.next.next // intersection at node with val 8

console.log(getIntersectionNode(headA, headB)) // ListNode { val: 8, next: ListNode { val: 4, next: ListNode { val: 5, next: null } } }

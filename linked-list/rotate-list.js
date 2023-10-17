/**
 * @typedef {Object} ListNode
 * @param {ListNode} head
 */
class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

/**
 * * Rotate List
 *
 * Given the head of a linked list, rotate the list to the right by k places.
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

/*
EXAMPLE:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
*/

// O(n) time | O(1) space
function rotateRight(head, k) {
  if (!head) return null

  // keep track of the length of the list to later find the proper tail to connect to the head
  let length = 1

  let current = head

  // go to the tail
  while (current.next) {
    current = current.next
    length++
  }

  // set the tail to connect to the head so we can loop through the list
  current.next = head

  // find the new k to loop to - this is the new tail
  k = length - (k % length)

  // TIP: k % length is to avoid looping more than the length of the list

  // loop to the new tail
  for (let i = 0; i < k; i++) {
    current = current.next
  }

  // set the new head - IMPORTANT STEP
  head = current.next

  // set the new tail to null
  current.next = null

  return head
}

// -----------------------------
// TESTS

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)

k = 2

console.log(rotateRight(head, k)) // [4,5,1,2,3]

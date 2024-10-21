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
 * * Reverse Linked List
 *
 * Given the head of a singly linked list, reverse the list, and return the reversed list
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */

// TIP: This method goes through the list and inserts each node at the beginning of the list

function reverseList(head) {
  let prev = null
  let current = head

  while (current) {
    let next = current.next // save next node
    current.next = prev // reverse the link
    prev = current // move prev forward
    current = next // move current forward
  }

  return prev // prev is the new head
}

// -----------------------------
// SOLUTION 2

// TIP: This solution is slightly more space efficient because it doesn't create a new variable for the current node

function reverseList2(head) {
  let prev = null

  while (head) {
    let next = head.next
    head.next = prev // reverse the link
    prev = head
    head = next
  }

  return prev
}

// -----------------------------
// TEST

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)

console.log(reverseList(head)) // 4 -> 3 -> 2 -> 1
// console.log(reverseList2(head)) // 4 -> 3 -> 2 -> 1

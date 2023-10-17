/**
 * @typedef {Object} ListNode
 * @param {number} val
 */

class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.random = null
  }
}

/**
 * * Copy List with Random Pointer
 *
 * Given a linked list where each node has a next pointer and a random pointer, make a deep copy of the list
 *
 * @see https://leetcode.com/problems/copy-list-with-random-pointer/description/
 * @param {ListNode} head
 * @returns {ListNode}
 */

// O(n) time | O(n) space
function copyRandomList(head) {
  let map = new Map()

  let current = head
  while (current) {
    map.set(current, new Node(current.val)) // map.set(key, value)

    current = current.next
  }

  current = head
  while (current) {
    map.get(current).next = map.get(current.next) || null
    map.get(current).random = map.get(current.random) || null
    current = current.next
  }

  return map.get(head)
}

// -----------------------------
// TESTS

let head = new Node(7)
head.next = new Node(13)
head.next.next = new Node(11)
head.next.next.next = new Node(10)
head.next.next.next.next = new Node(1)

head.random = null
head.next.random = head
head.next.next.random = head.next.next.next.next
head.next.next.next.random = head.next.next
head.next.next.next.next.random = head

// console.log(head.next) // [[7,null],[13,0],[11,4],[10,2],[1,0]]

console.log(copyRandomList(head)) // [[7,null],[13,0],[11,4],[10,2],[1,0]] - same as above

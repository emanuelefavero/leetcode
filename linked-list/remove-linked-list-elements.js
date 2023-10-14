// TODO: jsDoc

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

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head

function removeElements(head, val) {
  let dummy = new ListNode(0)
  dummy.next = head
  let current = dummy

  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return dummy.next
}

// -----------------------------
// SOLUTION 2

// TIP: This solution uses recursion. It is extremely fast time wise but uses a ton of memory

function removeElements2(head, val) {
  if (!head) return null

  head.next = removeElements2(head.next, val)

  if (head.val === val) return head.next
  else return head
}

// -----------------------------
// SOLUTION 3

function removeElements3(head, val) {
  // remove all nodes with val at the beginning of the list
  while (head && head.val === val) {
    head = head.next
  }

  // remove all nodes with val in the middle of the list
  let current = head
  while (current && current.next) {
    if (current.next.val === val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return head
}

// -----------------------------
// TEST

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(6)
head.next.next.next = new ListNode(3)

console.log(removeElements(head, 6)) // 1 -> 2 -> 3
// console.log(removeElements2(head, 6)) // 1 -> 2 -> 3
// console.log(removeElements3(head, 6)) // 1 -> 2 -> 3

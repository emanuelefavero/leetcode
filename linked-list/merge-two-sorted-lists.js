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

function mergeTwoLists(list1, list2) {
  let head = new ListNode()
  let current = head

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }

    current = current.next
  }

  // add possible remaining nodes
  current.next = list1 || list2 || null

  return head.next
}

let list1 = new ListNode(1)
list1.next = new ListNode(2)
list1.next.next = new ListNode(4)

let list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)

console.log(mergeTwoLists(list1, list2)) // 1 -> 1 -> 2 -> 3 -> 4 -> 4

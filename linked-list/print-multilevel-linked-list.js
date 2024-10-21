class Node {
  /**
   * @param {number} val
   */

  constructor(val) {
    this.val = val
    this.next = null
  }
}

/**
 * * Print Multilevel Linked List
 *
 * Given a linked list where some of the nodes contain a sub-list, print the linked list in order
 *
 * @param {ListNode} list
 * @returns {void}
 */

function printListWithSubList(list) {
  let current = list
  while (current) {
    if (current.val instanceof Node) {
      let subCurrent = current.val
      while (subCurrent) {
        console.log(subCurrent.val)
        subCurrent = subCurrent.next
      }
    } else {
      console.log(current.val)
    }
    current = current.next
  }
}

// -----------------------------
// TESTS

let subList = new Node(1)
subList.next = new Node(2)
subList.next.next = new Node(3)

let list = new Node(10)
list.next = new Node(subList)

printListWithSubList(list) // 10 1 2 3

// * Doubly Linked List
class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class MyLinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }
}

// -----------------------------
// TESTS

let obj = new MyLinkedList()

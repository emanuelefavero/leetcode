// * Doubly Linked List

/**
 * @typedef {Object} Node
 */

class Node {
  /**
   *
   * @param {*} val
   */

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

  /**
   *
   * @param {number} index
   * @returns {*}
   */

  get(index) {
    if (index < 0 || index >= this.length || !this.head) return -1
    if (index === 0) return this.head.val

    let current = this.head

    for (let i = 0; i < index; i++) {
      current = current.next
    }

    return current.val
  }
}

// -----------------------------
// TESTS

let obj = new MyLinkedList()
obj.head = new Node(1)

console.log(obj.get()) // 1

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
    if (index >= this.length || !this.head) return -1
    if (index === 0) return this.head.val

    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }

    return current.val
  }

  addAtHead(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }

    this.length++
  }

  addAtTail(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }

      current.next = newNode
      newNode.prev = current
    }

    this.length++
  }
}

// -----------------------------
// TESTS

let obj = new MyLinkedList()
obj.addAtHead(2)
obj.addAtHead(1)

console.log(obj.head)

// * Doubly Linked List

class Node {
  /**
   * @param {number} val
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

  /**
   *
   * @param {*} val
   * @returns {void}
   */

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

  /**
   *
   * @param {*} val
   * @returns {void}
   */

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

  /**
   *
   * @param {number} index
   * @param {*} val
   * @returns {void}
   */

  addAtIndex(index, val) {
    if (index > this.length) return
    if (index === 0) return this.addAtHead(val)
    if (index === this.length) return this.addAtTail(val)

    let newNode = new Node(val)
    let current = this.head
    for (let i = 0; i < index - 1; i++) {
      current = current.next
    }

    newNode.next = current.next
    newNode.prev = current
    current.next.prev = newNode
    current.next = newNode

    this.length++
  }

  /**
   *
   * @param {number} index
   * @returns {void}
   */

  deleteAtIndex(index) {
    if (index >= this.length || !this.head) return

    if (index === 0) {
      // delete first node
      this.head = this.head.next
      this.length--
      return
    }

    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }

    current.prev.next = current.next
    if (current.next) current.next.prev = current.prev

    this.length--
  }
}

// -----------------------------
// TESTS

let obj = new MyLinkedList()
obj.addAtTail(2)
obj.addAtTail(3)
obj.addAtHead(1)

obj.addAtIndex(2, 10)
obj.deleteAtIndex(2)

console.log(obj.head) // 1 -> 2 -> -> 3
console.log(obj.length) // 3

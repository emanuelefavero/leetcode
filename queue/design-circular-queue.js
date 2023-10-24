// * Design Circular Queue

// TIP: This solution is not really circular, it's just a queue with a fixed size but it works and in JavScript it's not needed to create a circular queue since the array is dynamic and can grow as needed

class MyCircularQueue {
  constructor(k) {
    this.queue = []
    this.size = k
  }

  enQueue(value) {
    if (this.queue.length < this.size) {
      this.queue.push(value)
      return true
    } else return false
  }

  deQueue() {
    if (this.queue.length > 0) {
      this.queue.shift() // remove first element
      return true
    } else return false
  }

  Front() {
    if (this.queue.length > 0) {
      return this.queue[0]
    } else return -1
  }

  Rear() {
    if (this.queue.length > 0) {
      return this.queue[this.queue.length - 1]
    } else return -1
  }

  isEmpty() {
    return this.queue.length === 0
  }

  isFull() {
    return this.queue.length === this.size
  }
}

// --------------------------
// SOLUTION 2

// TIP: This solution is circular

class ListNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class MyCircularQueue2 {
  constructor(k) {
    this.first = null
    this.last = null
    this.size = 0
    this.k = k
  }

  enQueue(value) {
    if (this.size >= this.k) return false

    let node = new ListNode(value)

    if (!this.first) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }

    this.size++
    return true
  }

  deQueue() {
    if (this.size === 0) return false

    this.first = this.first.next
    this.size--

    if (!this.first) this.last = null
    return true
  }

  Front() {
    if (this.size === 0) return -1
    return this.first.value
  }

  Rear() {
    if (this.size === 0) return -1
    return this.last.value
  }

  isEmpty() {
    return this.size === 0
  }

  isFull() {
    return this.size === this.k
  }
}

// --------------------------
// TESTS

// Solution 1
console.log('Solution 1')
let myCircularQueue = new MyCircularQueue(3)
console.log(myCircularQueue.enQueue(1)) // return true
console.log(myCircularQueue.enQueue(2)) // return true
console.log(myCircularQueue.enQueue(3)) // return true
console.log(myCircularQueue.enQueue(4)) // return false, the queue is full
console.log(myCircularQueue.Rear()) // return 3
console.log(myCircularQueue.isFull()) // return true
console.log(myCircularQueue.deQueue()) // return true
console.log(myCircularQueue.enQueue(4)) // return true
console.log(myCircularQueue.Rear()) // return 4

// Solution 2
console.log('Solution 2')
let myCircularQueue2 = new MyCircularQueue(3)
console.log(myCircularQueue2.enQueue(1)) // return true
console.log(myCircularQueue2.enQueue(2)) // return true
console.log(myCircularQueue2.enQueue(3)) // return true
console.log(myCircularQueue2.enQueue(4)) // return false, the queue is full
console.log(myCircularQueue2.Rear()) // return 3
console.log(myCircularQueue2.isFull()) // return true
console.log(myCircularQueue2.deQueue()) // return true
console.log(myCircularQueue2.enQueue(4)) // return true
console.log(myCircularQueue2.Rear()) // return 4

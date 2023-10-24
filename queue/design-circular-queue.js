// * Design Circular Queue

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
// TESTS

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

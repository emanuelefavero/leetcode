/**
 * * Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty)
 *
 * @typedef {Object} MyStack
 */

class MyStack {
  constructor() {
    this.queue1 = []
    this.queue2 = []
  }

  /**
   * @param {number} x
   */

  push(x) {
    this.queue1.push(x)
  }

  /**
   * @returns {number}
   */

  pop() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift())
    }

    let popped = this.queue1.shift()

    // swap queues - we need to do this because we need to keep the queue in the same state as it was before calling pop
    ;[this.queue1, this.queue2] = [this.queue2, this.queue1]

    return popped
  }

  /**
   * @returns {number}
   */

  top() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift())
    }

    // get the top element and push it to the other queue
    let top = this.queue1[0]
    this.queue2.push(this.queue1.shift())

    // swap queues - we need to do this because we need to keep the queue in the same state as it was before calling top
    ;[this.queue1, this.queue2] = [this.queue2, this.queue1]

    return top
  }

  /**
   * @returns {boolean}
   */

  empty() {
    return !this.queue1.length
  }
}

// ------------------------
// TESTS

let stack = new MyStack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log(stack.pop()) // 4
console.log(stack.top()) // 3
console.log(stack.empty()) // false

console.log(stack)
// MyStack { queue1: [ 1, 2, 3 ], queue2: [] }

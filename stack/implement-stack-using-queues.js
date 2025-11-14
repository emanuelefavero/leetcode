// * Implement Stack using Queues

// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty)

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

    const popped = this.queue1.shift()

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
    const top = this.queue1[0]
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
// SOLUTION 2

// TIP: This solution uses only one queue

class MyStack2 {
  constructor() {
    this.queue = []
  }

  push(x) {
    this.queue.push(x)

    // move the first n - 1 elements to the end of the queue
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift())
    }
  }

  pop() {
    return this.queue.shift()
  }

  top() {
    return this.queue[0]
  }

  empty() {
    return this.queue.length === 0
  }
}

// ------------------------
// TESTS

const stack = new MyStack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log(stack.pop()) // 4
console.log(stack.top()) // 3
console.log(stack.empty()) // false

console.log(stack)
// MyStack { queue1: [ 1, 2, 3 ], queue2: [] }

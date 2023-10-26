// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time

/**
 * @typedef {Object} MinStack
 */

class MinStack {
  constructor() {
    this.stack = []
  }

  /**
   * Pushes an element val onto the stack
   * @param {number} val
   * @returns {void}
   */

  push(val) {
    this.stack.push(val)
  }

  /**
   * Removes the element on the top of the stack
   * @returns {void}
   */

  pop() {
    this.stack.pop()
  }

  /**
   * Gets the top element of the stack
   * @returns {number}
   */

  top() {
    return this.stack[this.stack.length - 1]
  }

  /**
   * * Retrieves the minimum element in the stack
   * @returns {number}
   */

  getMin() {
    return Math.min(...this.stack)
  }
}

// ------------------------
// TESTS

let stack = new MinStack()
stack.push(1)
stack.push(2)
stack.push(3)

stack.pop()

console.log(stack.top()) // 2
console.log(stack.stack) // [1, 2]

// get min
console.log(stack.getMin()) // 1

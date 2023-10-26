// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time

// TIP: To achieve constant time we will use two stacks, one to store the elements and another to store the minimums

/**
 * @typedef {Object} MinStack
 */

class MinStack {
  constructor() {
    this.stack = []
    this.minStack = []
  }

  /**
   * Pushes an element val onto the stack
   * @param {number} val
   * @returns {void}
   */

  push(val) {
    this.stack.push(val)

    let minStackTop = this.minStack[this.minStack.length - 1]

    if (this.minStack.length === 0) {
      this.minStack.push(val)
    } else {
      if (val < minStackTop) {
        this.minStack.push(val)
      } else {
        this.minStack.push(minStackTop) // push the same value so that the minStack is the same length as the stack when popping
      }
    }
  }

  /**
   * Removes the element on the top of the stack
   * @returns {void}
   */

  pop() {
    this.stack.pop()
    this.minStack.pop()
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
    return this.minStack[this.minStack.length - 1]
  }
}

// ------------------------
// TESTS

let stack = new MinStack()
stack.push(10)
stack.push(5)
stack.push(20)
stack.push(15)

stack.pop()

console.log(stack.top()) // 20
console.log(stack.stack) // [10, 5, 20]

// get min
console.log(stack.getMin()) // 5

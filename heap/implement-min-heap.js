// * Implement a min heap data structure

// TIP: In a min heap, the parent nodes are always smaller than the child nodes and the root node is the smallest value in the heap

// NOTE: We can implement a heap with an array or a linked list. In this example, we'll use an array

/**
 * @typedef {Object} MinHeap
 * @property {number[]} heap
 */

class MinHeap {
  constructor() {
    this.heap = []
  }

  /**
   * @param {number} value
   * @return {void}
   */

  insert(value) {
    this.heap.push(value)
    this._bubbleUp()
  }

  /**
   * @returns {number}
   */

  delete() {
    let min = this.heap[0]
    this.heap[0] = this.heap.pop() // replace root with last element
    this._bubbleDown()

    return min
  }

  _bubbleUp() {
    let index = this.heap.length - 1

    while (index > 0) {
      let element = this.heap[index]
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.heap[parentIndex]

      if (parent <= element) break // Change comparison operator to <=

      // Swap
      this.heap[index] = parent
      this.heap[parentIndex] = element
      index = parentIndex
    }
  }

  _bubbleDown() {
    let index = 0
    let length = this.heap.length
    let element = this.heap[0] // root node

    while (true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex]
        if (leftChild < element) {
          // Change comparison operator to <
          swap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex]
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex
        }
      }

      if (swap === null) break

      // Swap
      this.heap[index] = this.heap[swap]
      this.heap[swap] = element
      index = swap
    }
  }

  /**
   * @returns {number}
   */

  peek() {
    return this.heap[0]
  }
}

// --------------------------
// TESTS

let heap = new MinHeap()

heap.insert(10)
heap.insert(40)
heap.insert(30)
heap.insert(25)

heap.delete()

console.log(heap.heap) // [ 25, 40, 30 ]
console.log(heap.peek()) // 25

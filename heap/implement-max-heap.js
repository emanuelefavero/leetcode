// * Implement a max heap data structure

// TIP: In a max heap, the parent nodes are always larger than the child nodes and the root node is the largest value in the heap

// NOTE: We can implement a heap with an array or a linked list. In this example, we'll use an array

class MaxHeap {
  constructor() {
    this.heap = []
  }

  insert(value) {
    this.heap.push(value)
    this._bubbleUp()
  }

  delete() {
    let min = this.heap[0]
    this.heap[0] = this.heap.pop() // replace root with last element
    this._bubbleDown()
  }

  _bubbleUp() {
    let index = this.heap.length - 1

    while (index > 0) {
      let element = this.heap[index]
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.heap[parentIndex]

      // TIP: Change comparison operator to <= to convert to min heap
      if (parent >= element) break

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

        // TIP: Change comparison operator to >= to convert to min heap
        if (leftChild > element) {
          swap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex]
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex
        }
      }

      if (swap === null) break

      this.heap[index] = this.heap[swap]
      this.heap[swap] = element
      index = swap
    }
  }

  peek() {
    return this.heap[0]
  }
}

let heap = new MaxHeap()

heap.insert(10)
heap.insert(40)
heap.insert(30)
heap.insert(25)

heap.delete() // 40

console.log(heap.heap) // [ 25, 40, 30 ]
console.log(heap.peek()) // 30, the 40 was deleted

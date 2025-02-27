// * Take Gifts From the Richest Pile

/*
You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following:

- Choose the pile with the maximum number of gifts.
- If there is more than one pile with the maximum number of gifts, choose any.
- Reduce the number of gifts in the pile to the floor of the square root of the original number of gifts in the pile.

Return the number of gifts remaining after k seconds.
*/

function pickGifts(gifts, k) {
  for (let i = 0; i < k; i++) {
    gifts = gifts.sort((a, b) => b - a)

    gifts[0] = Math.floor(Math.sqrt(gifts[0]))
  }

  return gifts.reduce((num, acc) => num + acc, 0)
}

// -------------------------
// SOLUTION 2

// TIP: This solution is more efficient than the previous one but it is still a brute force solution

function pickGifts2(gifts, k) {
  for (let i = 0; i < k; i++) {
    let maxIndex = 0

    for (let j = 1; j < gifts.length; j++) {
      if (gifts[j] > gifts[maxIndex]) maxIndex = j
    }

    gifts[maxIndex] = Math.floor(Math.sqrt(gifts[maxIndex]))
  }

  return gifts.reduce((num, acc) => num + acc, 0)
}

// -------------------------
// SOLUTION 3

// TIP: This solution uses a max heap to solve the problem. It is also the most efficient solution

class MaxHeap {
  constructor() {
    this.heap = []
  }

  peek() {
    return this.heap[0]
  }

  push(val) {
    this.heap.push(val)
    this._bubbleUp()
  }

  pop() {
    let max = this.heap[0]
    let end = this.heap.pop()

    if (this.heap.length > 0) {
      this.heap[0] = end
      this._bubbleDown()
    }

    return max
  }

  _bubbleUp() {
    let idx = this.heap.length - 1
    const ele = this.heap[idx]

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.heap[parentIdx]

      if (ele <= parent) break

      this.heap[parentIdx] = ele
      this.heap[idx] = parent
      idx = parentIdx
    }
  }

  _bubbleDown() {
    let idx = 0
    const ele = this.heap[0]
    const length = this.heap.length

    while (true) {
      let leftChildIdx = idx * 2 + 1
      let rightChildIdx = idx * 2 + 2
      let left
      let right
      let swap = null

      if (leftChildIdx < length) {
        left = this.heap[leftChildIdx]

        if (left > ele) {
          swap = leftChildIdx
        }
      }

      if (rightChildIdx < length) {
        right = this.heap[rightChildIdx]

        if ((swap === null && right > ele) || (swap !== null && right > left)) {
          swap = rightChildIdx
        }
      }

      if (swap === null) break

      this.heap[idx] = this.heap[swap]
      this.heap[swap] = ele
      idx = swap
    }
  }
}

function pickGifts3(gifts, k) {
  let heap = new MaxHeap()

  for (let gift of gifts) {
    heap.push(gift)
  }

  while (k > 0) {
    let max = heap.pop()
    heap.push(Math.floor(Math.sqrt(max)))
    k--
  }

  return heap.heap.reduce((num, acc) => num + acc, 0)
}

// -------------------------
// TESTS

// 1
console.log(pickGifts([25, 64, 9, 4, 100], 4)) // 29
/*
Explanation: 
The gifts are taken in the following way:
- In the first second, the last pile is chosen and 10 gifts are left behind.
- Then the second pile is chosen and 8 gifts are left behind.
- After that the first pile is chosen and 5 gifts are left behind.
- Finally, the last pile is chosen again and 3 gifts are left behind.
The final remaining gifts are [5,8,9,4,3], so the total number of gifts remaining is 29.
*/

// 2
console.log(pickGifts2([25, 64, 9, 4, 100], 4)) // 29

// 3
console.log(pickGifts3([25, 64, 9, 4, 100], 4)) // 29

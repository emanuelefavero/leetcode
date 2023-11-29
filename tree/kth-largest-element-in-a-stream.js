// * Kth Largest Element in a Stream

/*
Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Implement KthLargest class:

KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.
*/

class KthLargest {
  constructor(k, nums) {
    this.k = k
    this.nums = nums
  }

  add(val) {
    this.nums.push(val)
    return this.nums.sort((a, b) => b - a)[this.k - 1]
  }
}

// -----------------------------
// TESTS

let kthLargest = new KthLargest(3, [4, 5, 8, 2])
console.log(kthLargest.add(3)) // 4
console.log(kthLargest.add(5)) // 5, since [2,4,5,5,8] is the stream at this point

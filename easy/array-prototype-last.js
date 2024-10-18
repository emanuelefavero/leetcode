// * Array Prototype Last

// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

Array.prototype.last = function () {
  if (!this.length) return -1
  return this[this.length - 1]
}

// -------------------------
// TESTS

let nums = [null, {}, 3]
console.log(nums.last()) // 3
// Explanation: Calling nums.last() should return the last element: 3.

nums = []
console.log(nums.last()) // -1

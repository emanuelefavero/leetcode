// * N-Repeated Element in Size 2N Array

/*
You are given an integer array nums with the following properties:

- nums.length == 2 * n.
- nums contains n + 1 unique elements.
- Exactly one element of nums is repeated n times.

Return the element that is repeated n times.
*/

function repeatedNTimes(nums) {
  let n = Math.floor(nums.length / 2)
  let map = new Map()

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  for (let [key, value] of map) {
    if (value === n) return key
  }
}

// -----------------------------
// TESTS

console.log(repeatedNTimes([1, 2, 3, 3])) // 3
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2])) // 2

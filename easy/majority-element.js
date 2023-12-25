// * Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// TODO commit this solution
// TODO link to README
// TODO add jsDoc

function majorityElement(nums) {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]

    if (!map.has(current)) {
      map.set(current, 1)
    } else {
      map.set(current, map.get(current) + 1)
    }
  }

  for (let [key, value] of map) {
    if (value > nums.length / 2) return key
  }
}

// -----------------------------
// TESTS

console.log(majorityElement([3, 2, 3])) // 3
// Explanation: 3 appears twice in nums and the length of nums / 2 is 1

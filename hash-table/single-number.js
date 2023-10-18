/**
 * * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one
 *
 * @param {number[]} nums
 * @returns {number}
 */

// O(n) time | O(n) space
function singleNumber(nums) {
  let hashTable = {}

  for (let num of nums) {
    if (hashTable[num]) {
      hashTable[num]++
    } else {
      hashTable[num] = 1
    }
  }

  for (let key in hashTable) {
    if (hashTable[key] < 2) {
      return key
    }
  }
}

// -----------------------------
// SOLUTION 2

// O(n) time | O(n) space
function singleNumber2(nums) {
  let result = 0 // initialize result with 0 so that XORing with the first number in the array will return that number

  for (let i = 0; i < nums.length; i++) {
    // XOR all the numbers in the array
    result = result ^ nums[i] // ^ is the XOR operator

    // TIP: This operation is commonly used in algorithms to find non-repeating or unique elements in an array. By XORing all the elements together, duplicates cancel out, and you're left with the unique element.(The XOR operator returns a 1, or true, if both the bits are different, and a 0, or false, if both the bits are the same)
  }

  return result
}

// -----------------------------
// TESTS

console.log(singleNumber([2, 2, 1, 3, 3])) // 1
console.log(singleNumber2([2, 2, 1, 3, 3])) // 1

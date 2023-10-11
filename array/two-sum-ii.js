// O(n) time - O(1) space
function twoSum(numbers, target) {
  let hashTable = {}

  for (let i = 0; i < numbers.length; i++) {
    if (hashTable[target - numbers[i]] !== undefined) {
      return [hashTable[target - numbers[i]] + 1, i + 1]
    }

    hashTable[numbers[i]] = i
  }
}

// -------------------------
// SOLUTION 2

// O(n) time - O(1) space
function twoSum2(numbers, target) {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    let sum = numbers[left] + numbers[right]

    // if the sum is equal to the target, return the indices
    if (sum === target) return [left + 1, right + 1]
    // if the sum is less than the target, move the left pointer to the right
    else if (sum < target) left++
    // if the sum is greater than the target, move the right pointer to the left
    else right--
  }
}

// -------------------------
// TESTS

console.log(twoSum([2, 7, 11, 15], 9)) // [1, 2]
console.log(twoSum2([2, 7, 11, 15], 9)) // [1, 2]

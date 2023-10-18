// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one

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
// TESTS

console.log(singleNumber([2, 2, 1, 3, 3])) // 1

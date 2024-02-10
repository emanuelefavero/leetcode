// * Number of Arithmetic Triplets

/*
You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

i < j < k,
nums[j] - nums[i] == diff, and
nums[k] - nums[j] == diff.
Return the number of unique arithmetic triplets
*/

// TIP: WE just need to check if the current number - diff and the current number - 2 * diff are in the map. If they are, we have an arithmetic triplet

function arithmeticTriplets(nums, diff) {
  let map = new Map()
  let count = 0

  for (let num of nums) {
    let temp = num - diff

    if (map.has(temp) && map.has(temp - diff)) {
      count++
    }

    map.set(num, true)
  }

  return count
}

// -------------------------------
// TESTS

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)) // 2
// Explanation:
// (1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
// (2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3.

console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2)) // 2
// Explanation:
// (0, 2, 4) is an arithmetic triplet because both 8 - 6 == 2 and 6 - 4 == 2.
// (1, 3, 5) is an arithmetic triplet because both 9 - 7 == 2 and 7 - 5 == 2.

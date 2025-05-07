// * Sum of Variable Length Subarrays

/*
You are given an integer array nums of size n. For each index i where 0 <= i < n, define a subarray nums[start ... i] where start = max(0, i - nums[i]).

Return the total sum of all elements from the subarray defined for each index in the array.
*/

function subarraySum(nums) {
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    let start = Math.max(0, i - nums[i])
    let subarraySum = 0
    for (let j = start; j <= i; j++) {
      subarraySum += nums[j]
    }
    sum += subarraySum
  }

  return sum
}

// -------------------------
// TESTS

console.log(subarraySum([2, 3, 1])) // 11
/*
Explanation:

i	Subarray	Sum
0	nums[0] = [2]	2
1	nums[0 ... 1] = [2, 3]	5
2	nums[1 ... 2] = [3, 1]	4
Total Sum	 	11
The total sum is 11. Hence, 11 is the output.
*/

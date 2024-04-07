// * Maximum Count of Positive Integer and Negative Integer

/*
Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
Note that 0 is neither positive nor negative.\
*/

function maximumCount(nums) {
  let pos = 0
  let neg = 0

  for (let num of nums) {
    if (num > 0) pos++
    else if (num < 0) neg++
  }

  return Math.max(pos, neg)
}

// ---------------------
// TESTS

console.log(maximumCount([-2, -1, -1, 1, 2, 3])) // 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3

console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])) // 3
console.log(maximumCount([5, 20, 66, 1314])) // 4

// * Sum of All Odd Length Subarrays

// Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

// A subarray is a contiguous subsequence of the array.

// TIP: This is a brute force solution

function sumOddLengthSubarrays(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j]

      if ((j - i) % 2 === 0) sum += currentSum
    }
  }

  return sum
}

// -------------------------
// TESTS

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])) // 58
/*
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
*/

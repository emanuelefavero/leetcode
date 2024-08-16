// * Minimum Average of Smallest and Largest Elements

/*
You have an array of floating point numbers averages which is initially empty. You are given an array nums of n integers where n is even.

You repeat the following procedure n / 2 times:

Remove the smallest element, minElement, and the largest element maxElement, from nums.
Add (minElement + maxElement) / 2 to averages.
Return the minimum element in averages.
*/

function minimumAverage(nums) {
  let averages = []

  nums.sort((a, b) => a - b)

  while (nums.length) {
    averages.push((nums.shift() + nums.pop()) / 2)
  }

  averages.sort((a, b) => a - b)

  return averages[0]
}

// -----------------------
// SOLUTION 2

// TIP: We can avoid sorting the averages array by keeping track of the minimum value while iterating over the nums array

function minimumAverage2(nums) {
  nums.sort((a, b) => a - b)
  let min = Infinity

  while (nums.length) {
    min = Math.min(min, (nums.shift() + nums.pop()) / 2)
  }

  return min
}

// -----------------------
// TESTS

// 1
console.log(minimumAverage([7, 8, 3, 4, 15, 13, 4, 1])) // 5.5
/*
Explanation:

step	nums	              averages
0	    [7,8,3,4,15,13,4,1]	[]
1	    [7,8,3,4,13,4]	    [8]
2	    [7,8,4,4]	          [8,8]
3   	[7,4]	              [8,8,6]
4	    []	                [8,8,6,5.5]

The smallest element of averages, 5.5, is returned.
*/

// 2
console.log(minimumAverage2([7, 8, 3, 4, 15, 13, 4, 1])) // 5.5

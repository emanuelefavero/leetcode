// * Flatten Deeply Nested Array

// TIP: This is a JavaScript specific problem

/*
Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.
*/

// TIP: We can use recursion to solve this problem. Recursively flatten each sub-array until we reach the specified depth n

function flat(arr, n) {
  if (n === 0) return arr
  let result = []

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flat(item, n - 1))
    } else result.push(item)
  }

  return result
}

// --------------------------
// TESTS

console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0)
) // [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
/* Explanation:
Passing a depth of n=0 will always result in the original array. This is because the smallest possible depth of a subarray (0) is not less than n=0. Thus, no subarray should be flattened. 
*/

console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
) // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
/* Explanation:
The subarrays starting with 4, 7, and 13 are all flattened. This is because their depth of 0 is less than 1. However [9, 10, 11] remains unflattened because its depth is 1.
*/

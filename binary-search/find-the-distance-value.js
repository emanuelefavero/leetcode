//  * Find the Distance Value Between Two Arrays

/*
Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.

The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| < d.
*/

// TIP: This problem can also be solved with binary search but is not common to do so

function findTheDistanceValue(arr1, arr2, d) {
  let count = 0

  for (let i = 0; i < arr1.length; i++) {
    let valid = true

    for (let j = 0; j < arr2.length; j++) {
      // TIP: We use Math.abs to get the absolute value of the difference to account for negative numbers
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        valid = false
        break
      }
    }

    if (valid) count++
  }

  return count
}

// ------------------------
// TESTS

console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2)) // 2

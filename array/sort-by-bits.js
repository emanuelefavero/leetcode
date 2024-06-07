// * Sort Integers by The Number of 1 Bits

/*
You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

Return the array after sorting it.
*/

function sortByBits(arr) {
  return arr.sort((a, b) => {
    let countA = a
      .toString(2)
      .split('')
      .filter((bit) => bit === '1').length
    let countB = b
      .toString(2)
      .split('')
      .filter((bit) => bit === '1').length
    return countA - countB || a - b
  })
}

// -------------------------
// TESTS

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8])) // [0,1,2,4,8,3,5,6,7]

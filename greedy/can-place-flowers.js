// * Can Place Flowers

/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/

function canPlaceFlowers(flowerbed, n) {
  let count = 0

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      // Check if the previous and next are 0
      let prev = i === 0 ? 0 : flowerbed[i - 1]
      let next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1]

      // If both are 0, plant a flower
      if (prev === 0 && next === 0) {
        flowerbed[i] = 1
        count++
      }
    }
  }

  // We can plant flowers if the count is greater or equal to n
  return count >= n
}

// -------------------------
// TESTS

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)) // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)) // false
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2)) // true
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 0, 0, 1], 3)) // true

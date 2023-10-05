/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/

function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++
      return digits // return early if we don't need to carry over
    } else {
      digits[i] = 0
    }
  }

  // if we get here, it means that all digits are 9s, so add 1 to start of array
  digits.unshift(1)
  return digits
}

console.log(plusOne([1, 2, 3])) // [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])) // [4, 3, 2, 2]
console.log(plusOne([9])) // [1, 0]

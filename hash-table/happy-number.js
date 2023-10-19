/**
 * * Write an algorithm to determine if a number n is happy
 *
 * @param {number} n
 * @returns {boolean}
 */

/*
TIP: A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not
*/

// O(log n) time | O(log n) space
function isHappy(n) {
  let set = new Set()

  while (n !== 1) {
    let sum = 0
    let num = n.toString() // convert n to a string so we can iterate over it

    for (let i = 0; i < num.length; i++) {
      sum += num[i] * num[i]
    }

    // if the same sum is found twice, it means there is a cycle, so return false
    if (set.has(sum)) return false
    else set.add(sum)

    n = sum // update n to the sum for the while loop to continue
  }

  return true
}

// -----------------------------
// TESTS

console.log(isHappy(19)) // true
console.log(isHappy(2)) // false

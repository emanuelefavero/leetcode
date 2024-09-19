// * Count Asterisks

/*
You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.

Return the number of '*' in s, excluding the '*' between each pair of '|'.

Note that each '|' will belong to exactly one pair.
*/

/**
 * @param {string} s
 * @returns {number}
 */

// O(n) time | O(n) space
function countAsterisks(s) {
  let count = 0
  let array = s.split('|')

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      let string = array[i]

      for (let char of string) {
        if (char === '*') count++
      }
    }
  }

  return count
}

// -------------------------
// SOLUTION 2

// TIP: This solution does not use split method. Instead, it uses a boolean variable to keep track of whether the current character is inside a pair of '|'. the `!insidePair` inside the if statement also ensures that the '*' is counted only alternate pairs of '|' (as required by the problem).

function countAsterisks2(s) {
  let count = 0
  let insidePair = false

  for (let char of s) {
    if (char === '|') {
      insidePair = !insidePair
    } else if (char === '*' && !insidePair) {
      count++
    }
  }

  return count
}

// -------------------------
// TESTS

// 1
console.log(countAsterisks('l|*e*et|c**o|*de|')) // 2
/*
Explanation: The considered characters are underlined: "l|*e*et|c**o|*de|".
The characters between the first and second '|' are excluded from the answer.
Also, the characters between the third and fourth '|' are excluded from the answer.
There are 2 asterisks considered. Therefore, we return 2.
*/
console.log(countAsterisks('iamprogrammer')) // 0
console.log(countAsterisks('yo|uar|e**|b|e***au|tifu|l')) // 5

// 2
console.log(countAsterisks2('l|*e*et|c**o|*de|')) // 2

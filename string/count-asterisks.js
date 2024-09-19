// * Count Asterisks

/*
You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.

Return the number of '*' in s, excluding the '*' between each pair of '|'.

Note that each '|' will belong to exactly one pair.
*/

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
// TESTS

console.log(countAsterisks('l|*e*et|c**o|*de|')) // 2
/*
Explanation: The considered characters are underlined: "l|*e*et|c**o|*de|".
The characters between the first and second '|' are excluded from the answer.
Also, the characters between the third and fourth '|' are excluded from the answer.
There are 2 asterisks considered. Therefore, we return 2.
*/

console.log(countAsterisks('iamprogrammer')) // 0
console.log(countAsterisks('yo|uar|e**|b|e***au|tifu|l')) // 5

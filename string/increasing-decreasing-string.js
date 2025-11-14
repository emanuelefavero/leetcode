// * Increasing Decreasing String

/*
You are given a string s. Reorder the string using the following algorithm:

1. Remove the smallest character from s and append it to the result.
2. Remove the smallest character from s that is greater than the last appended character, and append it to the result.
3. Repeat step 2 until no more characters can be removed.
4. Remove the largest character from s and append it to the result.
5. Remove the largest character from s that is smaller than the last appended character, and append it to the result.
6. Repeat step 5 until no more characters can be removed.
7. Repeat steps 1 through 6 until all characters from s have been removed.

If the smallest or largest character appears more than once, you may choose any occurrence to append to the result.

Return the resulting string after reordering s using this algorithm.
*/

/**
 * @param {string} s
 * @returns {string}
 */

// O(n) time | O(1) space
function sortString(s) {
  const count = new Array(26).fill(0)

  // Count the frequency of each character
  for (const char of s) {
    count[char.charCodeAt() - 'a'.charCodeAt()]++
  }

  let result = ''

  // Construct the result string
  while (result.length < s.length) {
    // Append the smallest character
    for (let i = 0; i < 26; i++) {
      if (count[i] > 0) {
        result += String.fromCharCode(i + 97)
        count[i]--
      }
    }

    // Append the largest character
    for (let i = 26; i >= 0; i--) {
      if (count[i] > 0) {
        result += String.fromCharCode(i + 97)
        count[i]--
      }
    }
  }

  return result
}

// -----------------------------
// TESTS

console.log(sortString('aaaabbbbcccc')) // 'abccbaabccba'
/*
Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
After steps 4, 5 and 6 of the first iteration, result = "abccba"
First iteration is done. Now s = "aabbcc" and we go back to step 1
After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"
*/

console.log(sortString('rat')) // 'art'

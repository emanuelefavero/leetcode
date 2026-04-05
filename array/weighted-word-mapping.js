// * Weighted Word Mapping
/*
You are given an array of strings words, where each string represents a word containing lowercase English letters.

You are also given an integer array weights of length 26, where weights[i] represents the weight of the ith lowercase English letter.

The weight of a word is defined as the sum of the weights of its characters.

For each word, take its weight modulo 26 and map the result to a lowercase English letter using reverse alphabetical order (0 -> 'z', 1 -> 'y', ..., 25 -> 'a').

Return a string formed by concatenating the mapped characters for all words in order.
*/

/**
 * @param {string[]} words
 * @param {number[]} weights
 * @returns {string}
 */

// O(n) time | O(n) space
function mapWordWeights(words, weights) {
  let result = ''

  for (let word of words) {
    let sum = 0

    for (let char of word) {
      // Calculate the index of the character in the weights array (0 for 'a', 1 for 'b', ..., 25 for 'z')
      let index = char.charCodeAt(0) - 97 // 'a' = 97 in ASCII

      // Add the weight of the character to the sum
      sum += weights[index]
    }

    // Calculate the mapped character based on the sum modulo 26
    const value = sum % 26
    const mappedChar = String.fromCharCode(122 - value) // 'z' = 122 in ASCII
    result += mappedChar
  }

  return result
}

// -------------------------
// TESTS

console.log(
  mapWordWeights(
    ['abcd', 'def', 'xyz'],
    [
      5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9, 8, 3,
      7, 7, 2,
    ],
  ),
) // "rij"
/*
Explanation:

The weight of "abcd" is 5 + 3 + 12 + 14 = 34. The result modulo 26 is 34 % 26 = 8, which maps to 'r'.
The weight of "def" is 14 + 1 + 2 = 17. The result modulo 26 is 17 % 26 = 17, which maps to 'i'.
The weight of "xyz" is 7 + 7 + 2 = 16. The result modulo 26 is 16 % 26 = 16, which maps to 'j'.
Thus, the string formed by concatenating the mapped characters is "rij".
*/

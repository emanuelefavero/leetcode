// * Truncate Sentence

/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.
*/

/**
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */

// O(n) time | O(n) space
function truncateSentence(s, k) {
  let array = s.split(' ')
  array.length = k
  return array.join(' ')
}

// -------------------------
// SOLUTION 2

// TIP: The following solution does not use built in methods and is just for research purposes

// O(n) time | O(n) space
function truncateSentence2(s, k) {
  let array = []
  let counter = 0
  let word = ''

  for (let i = 0; i < s.length; i++) {
    if (counter === k) break
    if (s[i] === ' ') {
      array.push(word)
      word = ''
    } else {
      word += s[i]
    }
  }

  let result = ''

  for (let i = 0; i < array.length; i++) {
    result += array[i] + ' '
  }

  return result.trim() // trim() is the only built in method used
}

// -------------------------
// TESTS

// 1
console.log(truncateSentence('Hello how are you Contestant', 4))
// "Hello how are you"
/* Explanation:
The words in s are ["Hello", "how" "are", "you", "Contestant"].
The first 4 words are ["Hello", "how", "are", "you"].
Hence, you should return "Hello how are you".
*/

// 2
console.log(truncateSentence2('Hello how are you Contestant', 4))

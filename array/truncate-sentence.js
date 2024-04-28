// * Truncate Sentence

/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.
*/

function truncateSentence(s, k) {
  let array = s.split(' ')
  array.length = k
  return array.join(' ')
}

// -------------------------
// TESTS

console.log(truncateSentence('Hello how are you Contestant', 4))
// "Hello how are you"
/* Explanation:
The words in s are ["Hello", "how" "are", "you", "Contestant"].
The first 4 words are ["Hello", "how", "are", "you"].
Hence, you should return "Hello how are you".
*/

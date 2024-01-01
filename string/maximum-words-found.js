// * Maximum Number of Words Found in Sentences

/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.
*/

/**
 * @param {string[]} sentences
 * @returns {number}
 */

// O(n^2) time | O(1) space
function mostWordsFound(sentences) {
  let max = 0

  for (let i = 0; i < sentences.length; i++) {
    let numberOfWords = 1

    for (let j = 0; j < sentences[i].length; j++) {
      if (sentences[i][j] === ' ') numberOfWords++
    }

    max = Math.max(max, numberOfWords)
  }

  return max
}

// -----------------------------
// SOLUTION 2

function mostWordsFound2(sentences) {
  let max = 0

  for (let i = 0; i < sentences.length; i++) {
    let numberOfWords = sentences[i].split(' ').length

    if (numberOfWords > max) max = numberOfWords
  }

  return max
}

// ------------------------------
// TESTS

// 1
console.log(
  mostWordsFound([
    'alice and bob love leetcode',
    'i think so too',
    'this is great thanks very much',
  ])
) // 6
/*
Explanation: 
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.
*/

// 2
console.log(
  mostWordsFound2([
    'alice and bob love leetcode',
    'i think so too',
    'this is great thanks very much',
  ])
) // 6

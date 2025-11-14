// * Replace Words

/*
In English, we have a concept called root, which can be followed by some other word to form another longer word - let's call this word successor. For example, when the root "an" is followed by the successor word "other", we can form a new word "another".

Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the successors in the sentence with the root forming it. If a successor can be replaced by more than one root, replace it with the root that has the shortest length.

Return the sentence after the replacement.
*/

// TIP: This problem can also be solved with a Trie but this solution is much simpler

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @returns {string}
 */

// O(n^2) time | O(n) space - where n is the number of words in the sentence
function replaceWords(dictionary, sentence) {
  const dict = new Set(dictionary) // create a set of dictionary words
  const words = sentence.split(' ') // split sentence into array of words

  for (let i = 0; i < words.length; i++) {
    for (let j = 1; j < words[i].length; j++) {
      if (dict.has(words[i].substring(0, j))) {
        words[i] = words[i].substring(0, j) // replace word with root
      }
    }
  }

  return words.join(' ') // join words back into sentence
}

// -----------------------------
// TESTS

console.log(
  replaceWords(['cat', 'bat', 'rat'], 'the cattle was rattled by the battery')
) // 'the cat was rat by the bat'

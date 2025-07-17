// * Find the K-th Character in String Game I

/*
Alice and Bob are playing a game. Initially, Alice has a string word = "a".

You are given a positive integer k.

Now Bob will ask Alice to perform the following operation forever:

- Generate a new string by changing each character in word to its next character in the English alphabet, and append it to the original word.

For example, performing the operation on "c" generates "cd" and performing the operation on "zb" generates "zbac".

Return the value of the kth character in word, after enough operations have been done for word to have at least k characters.
*/

/**
 * @param {number} k
 * @returns {string}
 */

// O(k) time | O(k) space, where k is the input number
function kthCharacter(k) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let word = 'a'

  while (word.length < k) {
    let newWord = ''
    for (let i = 0; i < word.length; i++) {
      let charIndex = alphabet.indexOf(word[i])

      newWord += alphabet[(charIndex + 1) % alphabet.length]
    }

    word += newWord
  }

  return word[k - 1]
}

// -------------------------
// SOLUTION 2

// TIP: This solution uses fromCharCode and charCodeAt to manipulate characters

function kthCharacter2(k) {
  let word = 'a'

  while (word.length < k) {
    let newWord = ''
    for (let i = 0; i < word.length; i++) {
      let charCode = word.charCodeAt(i)
      newWord += String.fromCharCode(charCode + 1 > 122 ? 97 : charCode + 1)
    }

    word += newWord
  }

  return word[k - 1]
}

// -------------------------
// TESTS

console.log(kthCharacter(5)) // "b"
/* Explanation:
Initially, word = "a". We need to do the operation three times:

Generated string is "b", word becomes "ab".
Generated string is "bc", word becomes "abbc".
Generated string is "bccd", word becomes "abbcbccd".
*/
console.log(kthCharacter(10)) // "c"

console.log(kthCharacter2(5)) // "b"
console.log(kthCharacter2(10)) // "c"

// * Find Maximum Number of String Pairs

/*
You are given a 0-indexed array words consisting of distinct strings.

The string words[i] can be paired with the string words[j] if:

The string words[i] is equal to the reversed string of words[j].
0 <= i < j < words.length.
Return the maximum number of count that can be formed from the array words.

Note that each string can belong in at most one pair.
*/

// TIP: We will use two loops to compare two strings at a time and a helper function to reverse the string.

/**
 *
 * @param {string[]} words
 * @returns {number}
 */

// O(n^2) time | O(1) space
function maximumNumberOfStringPairs(words) {
  let count = 0

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i] === reverse(words[j])) count++
    }
  }

  return count
}

function reverse(string) {
  let reversed = ''

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i]
  }

  return reversed
}

// -------------------------
// SOLUTION 2

// TIP: This solution uses just one loop as well as built in methods to reverse the string. We will check if the current index is less than the index of the reversed string so we don't count the same pair twice. We then increment the count if we find the current string in reverse in the array.

function maximumNumberOfStringPairs2(words) {
  let count = 0

  for (let i = 0; i < words.length; i++) {
    if (i < words.indexOf(words[i].split('').reverse().join(''))) {
      count++
    }
  }

  return count
}

// -------------------------
// TESTS

// 1
console.log(maximumNumberOfStringPairs(['cd', 'ac', 'dc', 'ca', 'zz'])) // 2

// 2
console.log(maximumNumberOfStringPairs2(['cd', 'ac', 'dc', 'ca', 'zz'])) // 2

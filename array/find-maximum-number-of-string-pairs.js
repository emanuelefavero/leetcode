// * Find Maximum Number of String Pairs

/*
You are given a 0-indexed array words consisting of distinct strings.

The string words[i] can be paired with the string words[j] if:

The string words[i] is equal to the reversed string of words[j].
0 <= i < j < words.length.
Return the maximum number of pairs that can be formed from the array words.

Note that each string can belong in at most one pair.
*/

function maximumNumberOfStringPairs(words) {
  let pairs = 0

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i] === reverse(words[j])) pairs++
    }
  }

  return pairs
}

function reverse(string) {
  let reversed = ''

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i]
  }

  return reversed
}

// -------------------------
// TESTS

console.log(maximumNumberOfStringPairs(['cd', 'ac', 'dc', 'ca', 'zz'])) // 2

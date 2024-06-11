// * Counting Words With a Given Prefix

/*
You are given an array of strings words and a string pref.

Return the number of strings in words that contain pref as a prefix.

A prefix of a string s is any leading contiguous substring of s.
*/

function prefixCount(words, pref) {
  let count = 0

  for (let word of words) {
    if (word.startsWith(pref)) count++
  }

  return count
}

// -----------------------------
// TESTS

console.log(prefixCount(['pay', 'attention', 'practice', 'attend'], 'at')) // 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".

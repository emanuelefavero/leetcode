// * Split Strings by Separator

/*
Given an array of strings words and a character separator, split each string in words by separator.

Return an array of strings containing the new strings formed after the splits, excluding empty strings.

Notes

- `separator` is used to determine where the split should occur, but it is not included as part of the resulting strings.
- A split may result in more than two strings.
- The resulting strings must maintain the same order as they were initially given.
*/

/**
 * @param {string[]} words
 * @param {character} separator
 * @returns {string[]}
 */

// O(n) time | O(n) space
function splitWordsBySeparator(words, separator) {
  let result = []

  for (let word of words) {
    let splitted = word.split(separator)

    for (let s of splitted) {
      if (s.length) result.push(s)
    }
  }

  return result
}

// -------------------------
// SOLUTION 2

// TIP: One liner solution using join and split

function splitWordsBySeparator2(words, separator) {
  return words
    .join(separator) // join all words into a single string (place the separator between them)
    .split(separator) // split the string by the separator
    .filter((s) => s.length) // remove empty strings
}

// -------------------------
// TESTS

// 1
console.log(splitWordsBySeparator(['one.two.three', 'four.five', 'six'], '.'))
// ["one","two","three","four","five","six"]
/*
Explanation: In this example we split as follows:

"one.two.three" splits into "one", "two", "three"
"four.five" splits into "four", "five"
"six" splits into "six" 

Hence, the resulting array is ["one","two","three","four","five","six"].
*/
console.log(splitWordsBySeparator(['$easy$', '$problem$'], '$'))

// 2
console.log(splitWordsBySeparator2(['one.two.three', 'four.five', 'six'], '.'))
console.log(splitWordsBySeparator2(['$easy$', '$problem$'], '$'))

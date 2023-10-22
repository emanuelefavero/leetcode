/**
 * * Given an array of strings strs, group the anagrams together. You can return the answer in any order
 *
 * TIP: An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once
 *
 * @param {string[]} strs
 * @returns {string[][]}
 */

function groupAnagrams(strs) {
  let map = new Map()

  for (string of strs) {
    let sortedString = string.split('').sort().join('')

    if (map.has(sortedString)) {
      map.get(sortedString).push(string)
    } else {
      map.set(sortedString, [string])
    }
  }

  return [...map.values()]
}

// -----------------------------
// TESTS

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
// [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupAnagrams([''])) // [[""]]

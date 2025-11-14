/**
 * * Given an array of strings strs, group the anagrams together. You can return the answer in any order
 *
 * TIP: An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once
 *
 * @param {string[]} strs
 * @returns {string[][]}
 */

function groupAnagrams(strs) {
  const map = new Map()

  for (const string of strs) {
    const sortedString = string.split('').sort().join('')

    // if the map already has the sorted string, push the string into the array
    if (map.has(sortedString)) {
      map.get(sortedString).push(string)

      // otherwise, add the sorted string as a key and the string as the value in an array
    } else {
      map.set(sortedString, [string])
    }
  }

  // return an array of the map's values
  return [...map.values()]
}

// -----------------------------
// TESTS

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
// [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupAnagrams([''])) // [[""]]

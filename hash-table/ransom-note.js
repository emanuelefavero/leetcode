/**
 * * Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @returns {boolean}
 */

// O(n) time | O(n) space
function canConstruct(ransomNote, magazine) {
  let hashTable = {}

  for (let char of magazine) {
    if (!hashTable[char]) hashTable[char] = 1
    else hashTable[char]++
  }

  for (let char of ransomNote) {
    if (!hashTable[char] || hashTable[char] === 0) return false
    else hashTable[char]--
  }

  return true
}

// -------------------------------
// SOLUTION 2

// O(n) time | O(n) space
function canConstruct2(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false

  let hashTable = new Map()

  for (let char of magazine) {
    if (!hashTable.has(char)) hashTable.set(char, 1)
    else hashTable.set(char, hashTable.get(char) + 1)
  }

  for (let char of ransomNote) {
    if (!hashTable.has(char) || hashTable.get(char) === 0) return false
    else hashTable.set(char, hashTable.get(char) - 1)
  }

  return true
}

// -------------------------------
// TESTS

console.log(canConstruct('a', 'b')) // false
console.log(canConstruct('aa', 'ab')) // false
console.log(canConstruct('aa', 'aab')) // true

console.log(canConstruct2('a', 'b')) // false
console.log(canConstruct2('aa', 'ab')) // false
console.log(canConstruct2('aa', 'aab')) // true

// TODO: Add jsDoc
// TODO: Add comments
// TODO: Add solution2

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

console.log(canConstruct('a', 'b')) // false
console.log(canConstruct('aa', 'ab')) // false
console.log(canConstruct('aa', 'aab')) // true

// -------------------------------
// SOLUTION 2

/*
function canConstruct(ransomNote, magazine) {
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
*/

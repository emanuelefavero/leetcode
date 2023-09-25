function canConstruct(ransomNote, magazine) {
  let hashTable = {}

  for (let i = 0; i < magazine.length; i++) {
    let char = magazine[i]

    if (!hashTable[char]) hashTable[char] = 1
    else hashTable[char]++
  }

  for (let i = 0; i < ransomNote.length; i++) {
    let char = ransomNote[i]

    if (!hashTable[char] || hashTable[char] === 0) return false
    else hashTable[char]--
  }

  return true
}

console.log(canConstruct('a', 'b')) // false
console.log(canConstruct('aa', 'ab')) // false
console.log(canConstruct('aa', 'aab')) // true

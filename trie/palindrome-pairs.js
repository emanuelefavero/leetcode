// * Palindrome Pairs

/*
You are given a 0-indexed array of unique strings words.

A palindrome pair is a pair of integers (i, j) such that:

0 <= i, j < words.length,
i != j, and
words[i] + words[j] (the concatenation of the two strings) is a palindrome.
Return an array of all the palindrome pairs of words.

You must write an algorithm with O(sum of words[i].length) runtime complexity.
*/

function palindromePairs(words) {
  let map = new Map()
  let result = []

  for (let i = 0; i < words.length; i++) map.set(words[i], i)

  for (let i = 0; i < words.length; i++) {
    if (words[i] === '') {
      for (let j = 0; j < words.length; j++)
        if (isPalindrome(words[j]) && j !== i) result.push([i, j], [j, i])
      continue
    }

    let bw = words[i].split('').reverse().join('')
    let res = map.get(bw)

    if (res !== undefined && res !== i) result.push([i, res])

    for (let j = 1; j < bw.length; j++) {
      if (isPalindrome(bw, 0, j - 1)) {
        let res = map.get(bw.slice(j))
        if (res !== undefined) result.push([i, res])
      }
      if (isPalindrome(bw, j)) {
        let res = map.get(bw.slice(0, j))
        if (res !== undefined) result.push([res, i])
      }
    }
  }

  return result
}

function isPalindrome(word, i = 0, j = word.length - 1) {
  while (i < j) {
    if (word[i] !== word[j]) return false
    i++
    j--
  }
  return true
}

// -------------------------
// TESTS

console.log(palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll'])) // [[0,1],[1,0],[3,2],[2,4]]
console.log(palindromePairs(['bat', 'tab', 'cat'])) // [[0,1],[1,0]]

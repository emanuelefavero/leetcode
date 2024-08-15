// * Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

function reverseVowels(s) {
  let vowels = new Map([
    ['a', true],
    ['e', true],
    ['i', true],
    ['o', true],
    ['u', true],
    ['A', true],
    ['E', true],
    ['I', true],
    ['O', true],
    ['U', true],
  ])
  let foundVowels = []
  let sArray = s.split('')

  for (let i = 0; i < sArray.length; i++) {
    let char = sArray[i]
    if (vowels.has(char)) foundVowels.push(char)
  }

  foundVowels.reverse()

  for (let i = 0; i < sArray.length; i++) {
    let char = sArray[i]
    if (vowels.has(char)) {
      sArray[i] = foundVowels.shift()
    }
  }

  return sArray.join('')
}

// -------------------------
// SOLUTION 2

function reverseVowels2(s) {
  let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

  let sArray = s.split('')
  let left = 0
  let right = sArray.length - 1

  while (left < right) {
    while (left < right && !vowels.has(sArray[left])) {
      left++
    }
    while (left < right && !vowels.has(sArray[right])) {
      right--
    }

    if (left < right) {
      ;[sArray[left], sArray[right]] = [sArray[right], sArray[left]]
      left++
      right--
    }
  }

  return sArray.join('')
}

// -------------------------
// TESTS

// 1
console.log(reverseVowels('hello')) // 'holle'
console.log(reverseVowels('leetcode')) // 'leotcede'

// 2
console.log(reverseVowels2('hello')) // 'holle'
console.log(reverseVowels2('leetcode')) // 'leotcede'

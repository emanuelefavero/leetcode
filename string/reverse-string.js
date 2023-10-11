// TODO: solution 2: s.reverse()
// TODO: link to README
// TODO: jsDoc and comments

// Write a function that reverses a string. The input string is given as an array of characters s

// You must do this by modifying the input array in-place with O(1) extra memory

function reverseString(s) {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    ;[s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
}

// -------------------------
// SOLUTION 2

function reverseString2(s) {
  s.reverse()
}

// -------------------------
// TESTS

let s = ['h', 'e', 'l', 'l', 'o']
reverseString(s)
console.log(s) // ['o', 'l', 'l', 'e', 'h']

s = ['h', 'e', 'l', 'l', 'o']
reverseString2(s)
console.log(s) // ['o', 'l', 'l', 'e', 'h']

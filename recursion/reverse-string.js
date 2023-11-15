// * Reverse String

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// TIP: This solution uses recursion

function reverseString(s) {
  if (s.length <= 1) return s

  let first = s.shift()
  let last = s.pop()

  return [last, ...reverseString(s), first]
}

// ---------------------
// TESTS

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])) // ['o', 'l', 'l', 'e', 'H']

/*
if (s.length === 0) return s

  let last = s.pop()

  reverseString(s)

  s.unshift(last)

  return s
*/

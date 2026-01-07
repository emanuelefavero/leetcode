// * Reverse String Prefix

// You are given a string s and an integer k.

// Reverse the first k characters of s and return the resulting string.

function reversePrefix(s, k) {
  let reversed = ''

  for (let i = k - 1; i >= 0; i--) {
    reversed += s[i]
  }

  return reversed + s.slice(k)
}

// -------------------------
// TESTS

console.log(reversePrefix('abcd', 2)) // bacd
console.log(reversePrefix('xyz', 3)) // zyx
console.log(reversePrefix('hey', 1)) // hey

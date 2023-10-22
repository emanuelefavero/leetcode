// * Longest Substring Without Repeating Characters

/**
 * Given a string s, find the length of the longest substring without repeating characters
 *
 * @param {string} s
 * @returns {number}
 */

// O(n) time | O(n) space
function lengthOfLongestSubstring(s) {
  let set = new Set()
  let left = 0
  let right = 0
  let max = 0

  while (right < s.length) {
    // If the character is not in the set, add it to the set and increment the right pointer
    if (!set.has(s[right])) {
      set.add(s[right])
      max = Math.max(max, set.size)

      right++

      // If the character is in the set, delete the character at the left pointer and increment the left pointer
    } else {
      set.delete(s[left])

      left++
    }
  }

  return max
}

// -----------------------------
// SOLUTION 2

// O(n) time | O(n) space
function lengthOfLongestSubstring2(s) {
  let longest = 0
  let current = []

  for (let i = 0; i < s.length; i++) {
    let char = s[i]

    if (!current.includes(char)) {
      current.push(char)

      if (current.length > longest) longest = current.length
    } else {
      // If the character is in the current array, remove all the characters before the character and add the character to the end of the array
      current = current.slice(current.indexOf(char) + 1)
      current.push(char)
    }
  }

  return longest
}

// -----------------------------
// TESTS

console.log(lengthOfLongestSubstring('abcabcbb')) // 3
// Explanation: The answer is 'abc', with the length of 3

console.log(lengthOfLongestSubstring('bbbbb')) // 1
// Explanation: The answer is 'b', with the length of 1

console.log(lengthOfLongestSubstring('pwwkew')) // 3
// Explanation: The answer is 'wke', with the length of 3

console.log(lengthOfLongestSubstring('aab')) // 2
// Explanation: The answer is 'ab', with the length of 2

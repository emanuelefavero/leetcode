// * Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters

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
// TESTS

console.log(lengthOfLongestSubstring('abcabcbb')) // 3
// Explanation: The answer is 'abc', with the length of 3

console.log(lengthOfLongestSubstring('bbbbb')) // 1
// Explanation: The answer is 'b', with the length of 1

console.log(lengthOfLongestSubstring('pwwkew')) // 3
// Explanation: The answer is 'wke', with the length of 3

console.log(lengthOfLongestSubstring('aab')) // 2
// Explanation: The answer is 'ab', with the length of 2

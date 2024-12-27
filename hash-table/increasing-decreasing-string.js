// * Increasing Decreasing String

/*
You are given a string s. Reorder the string using the following algorithm:

1. Remove the smallest character from s and append it to the result.
2. Remove the smallest character from s that is greater than the last appended character, and append it to the result.
3. Repeat step 2 until no more characters can be removed.
4. Remove the largest character from s and append it to the result.
5. Remove the largest character from s that is smaller than the last appended character, and append it to the result.
6. Repeat step 5 until no more characters can be removed.
7. Repeat steps 1 through 6 until all characters from s have been removed.

If the smallest or largest character appears more than once, you may choose any occurrence to append to the result.

Return the resulting string after reordering s using this algorithm.
*/

function sortString(s) {
  const map = new Array(26).fill(0)

  for (const char of s) {
    const charCode = char.charCodeAt(0) - 97
    map[charCode]++
  }

  function appendCharToRes(i) {
    const char = String.fromCharCode(i + 97)
    result += char
    map[i]--
  }

  let result = ''

  while (result.length !== s.length) {
    for (let i = 0; i < map.length; i++) {
      if (!map[i]) continue
      appendCharToRes(i)
    }

    for (let i = map.length - 1; i >= 0; i--) {
      if (!map[i]) continue
      appendCharToRes(i)
    }
  }

  return result
}

// -----------------------------
// TESTS

console.log(sortString('aaaabbbbcccc')) // 'abccbaabccba'
/*
Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
After steps 4, 5 and 6 of the first iteration, result = "abccba"
First iteration is done. Now s = "aabbcc" and we go back to step 1
After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"
*/

console.log(sortString('rat')) // 'art'

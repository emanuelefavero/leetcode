// * Faulty Keyboard

/*
Your laptop keyboard is faulty, and whenever you type a character 'i' on it, it reverses the string that you have written. Typing other characters works as expected.

You are given a 0-indexed string s, and you type each character of s using your faulty keyboard.

Return the final string that will be present on your laptop screen.
*/

/**
 * @param {string} s
 * @returns {string}
 */

// O(n) time | O(n) space
function finalString(s) {
  let result = []

  for (let char of s) {
    if (char === 'i') result.reverse()
    else result.push(char)
  }

  return result.join('')
}

// -------------------------
// SOLUTION 2

// TIP: This solution does not use the built-in reverse method

function finalString2(s) {
  let result = ''
  s = s.split('')

  for (let char of s) {
    if (char === 'i') {
      result = reverse(result)
    } else result += char
  }

  return result
}

// O(n) time | O(1) space
function reverse(s) {
  let left = 0
  let right = s.length - 1
  s = s.split('')

  while (left < right) {
    ;[s[left], s[right]] = [s[right], s[left]]

    left++
    right--
  }

  return s.join('')
}

// -------------------------
// TESTS

// 1
console.log(finalString('string')) // 'rtsng'
/*
Explanation: 
After typing first character, the text on the screen is "s".
After the second character, the text is "st". 
After the third character, the text is "str".
Since the fourth character is an 'i', the text gets reversed and becomes "rts".
After the fifth character, the text is "rtsn". 
After the sixth character, the text is "rtsng". 
Therefore, we return "rtsng".
*/
console.log(finalString('poiinter')) // 'ponter'

// 2
console.log(finalString2('string')) // 'rtsng'
console.log(finalString2('poiinter')) // 'ponter'

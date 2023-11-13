// * Find Smallest Letter Greater Than Target

/*
You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.
*/

// TODO: add jsDoc

function nextGreatestLetter(letters, target) {
  for (let letter of letters) {
    if (letter.charCodeAt(0) > target.charCodeAt(0)) return letter
  }

  return letters[0]
}

// ---------------------
// SOLUTION 2

// TIP: This solution uses binary search

function nextGreatestLetter2(letters, target) {
  let left = 0
  let right = letters.length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)

    if (letters[middle].charCodeAt(0) <= target.charCodeAt(0)) left = middle + 1
    else right = middle - 1
  }

  return letters[left % letters.length] // TIP: This is to handle the case where the target is greater than the last letter in the array
}

// ---------------------
// TESTS

// 1
console.log(nextGreatestLetter(['c', 'f', 'j'], 'a')) // 'c'
console.log(nextGreatestLetter(['c', 'f', 'j'], 'c')) // 'f'
console.log(nextGreatestLetter(['x', 'x', 'y', 'y'], 'z')) // 'x'

// 2
console.log(nextGreatestLetter2(['c', 'f', 'j'], 'a')) // 'c'
console.log(nextGreatestLetter2(['c', 'f', 'j'], 'c')) // 'f'
console.log(nextGreatestLetter2(['x', 'x', 'y', 'y'], 'z')) // 'x'

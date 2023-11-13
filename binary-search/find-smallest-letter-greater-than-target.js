// * Find Smallest Letter Greater Than Target

function nextGreatestLetter(letters, target) {
  let left = 0
  let right = letters.length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)

    if (letters[middle].charCodeAt(0) <= target.charCodeAt(0)) left = middle + 1
    else right = middle - 1
  }

  return letters[left % letters.length] // TIP: This is to handle the case where the target is greater than the last letter in the array
}

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a')) // 'c'
console.log(nextGreatestLetter(['c', 'f', 'j'], 'c')) // 'f'
console.log(nextGreatestLetter(['x', 'x', 'y', 'y'], 'z')) // 'x'

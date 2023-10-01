function validMountainArray(arr) {
  if (arr.length < 3) return false

  // start at the beginning of the array
  let i = 0

  // while the numbers are increasing, keep going
  while (i + 1 < arr.length && arr[i] < arr[i + 1]) {
    i++
  }

  // if the first or last number is the peak, return false
  if (i === 0 || i === arr.length - 1) return false

  // while the numbers are decreasing, keep going
  while (i + 1 < arr.length && arr[i] > arr[i + 1]) {
    i++
  }

  // if we've reached the end of the array, return true
  return i === arr.length - 1
}

// ----------------------
// TESTS

console.log(validMountainArray([2, 1])) // false
console.log(validMountainArray([3, 5, 5])) // false
console.log(validMountainArray([0, 3, 2, 1])) // true

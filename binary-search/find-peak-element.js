function findPeakElement(nums) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    let middle = Math.floor((left + right) / 2)

    if (nums[middle] < nums[middle + 1]) left = middle + 1
    else if (nums[middle] > nums[middle + 1]) right = middle
  }

  return left // at this point left is the peak element
}

// ------------------------
// SOLUTION 2 - linear search

function findPeakElement2(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) return i
  }

  return nums.length - 1 // if we get here, the last element is the peak
}

// ------------------------
// TESTS

console.log(findPeakElement([1, 2, 3, 1])) // 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])) // 5

console.log(findPeakElement2([1, 2, 3, 1])) // 2
console.log(findPeakElement2([1, 2, 1, 3, 5, 6, 4])) // 5

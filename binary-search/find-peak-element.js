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
// TESTS

console.log(findPeakElement([1, 2, 3, 1])) // 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])) // 5

function search(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)

    if (nums[middle] === target) return middle

    // TIP: When dividing the rotated array into two halves, one must be sorted

    // Check if the left side is sorted
    if (nums[left] <= nums[middle]) {
      // If the target is in the left side, search there
      if (target >= nums[left] && target <= nums[middle]) right = middle - 1
      else left = middle + 1 // Otherwise, search the right side
    }

    // Otherwise, the right side is sorted
    else {
      // If the target is in the right side, search there
      if (target >= nums[middle] && target <= nums[right]) left = middle + 1
      else right = middle - 1 // Otherwise, search the left side
    }
  }

  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 6)) // 2 (six is at index 2)

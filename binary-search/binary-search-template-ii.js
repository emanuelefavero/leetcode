// * Binary Search Template II

// TODO: add jsDoc

function binarySearch(nums, target) {
  if (!nums.length) return -1

  let left = 0
  let right = nums.length - 1

  while (left < right) {
    let middle = Math.floor((left + right) / 2)

    if (nums[middle] === target) return middle
    else if (nums[middle] < target) left = middle + 1
    else right = middle
  }

  // End Condition: left === right since we narrowed the search to one element
  if (nums[left] === target) return left

  return -1
}

// ------------------------
// TESTS

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)) // 4, the index of 9 is 4
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2)) // -1, 2 does not exist in nums

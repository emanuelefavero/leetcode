/**
 * Given a sorted array of distinct integers and a target value,
 * return the index if the target is found. If not, return the
 * index where it would be if it were inserted in order
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function searchInsert(nums, target) {
  let left = 0
  let right = nums.length - 1
  let middle = 0

  while (left <= right) {
    middle = Math.floor((left + right) / 2)

    if (nums[middle] === target) return middle
    else if (nums[middle] < target) left = middle + 1
    else right = middle - 1
  }

  if (nums[middle] < target) return middle + 1
  else return middle
}

console.log(searchInsert([1, 3, 5, 6], 5)) // 2
console.log(searchInsert([1, 3, 5, 6], 2)) // 1
console.log(searchInsert([1, 3, 5, 6], 7)) // 4
console.log(searchInsert([1, 3, 5, 6], 0)) // 0

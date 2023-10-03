// The following array problem illustrates the useful two-pointer technique.

// The two pointer technique is used a lot in in-place array algorithms

// Remove duplicates from sorted array

function removeDuplicates(nums) {
  let writePointer = 1

  for (let readPointer = 1; readPointer < nums.length - 1; readPointer++) {
    if (nums[readPointer] !== nums[readPointer + 1]) {
      nums[writePointer] = nums[readPointer + 1]
      writePointer++ // move the write pointer to the next unique number
    }
  }

  // set the length of the array to the number of unique elements (effectively removing the duplicates at the end of the array)
  nums.length = writePointer
}

// -------------------------
// TESTS

let nums = [1, 1, 2, 3, 3, 3, 4]
removeDuplicates(nums)
console.log(nums) // [1, 2, 3, 4]

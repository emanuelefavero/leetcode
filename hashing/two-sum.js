// Loop through each element in array and find if there is another value that equals to target - array[i].

// O(n) - linear
function twoSum(nums, target) {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]

    // if the map has the complement, return the key of the complement and the current index
    if (map.has(complement)) return [map.get(complement), i]

    // if the map does not have the complement, add the current number and its index to the map
    map.set(nums[i], i)
  }

  return []
}

console.log(twoSum([2, 3, 4, 5], 6))
// OUTPUT: [0, 2] - returns the key of 2, 4

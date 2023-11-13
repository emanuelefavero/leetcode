function findClosestElements(arr, k, x) {
  let left = 0
  let right = arr.length - 1

  while (right - left >= k) {
    if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) right--
    else left++
  }

  return arr.slice(left, right + 1)
}

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3)) // [1, 2, 3, 4]
console.log(findClosestElements([1, 1, 1, 10, 10, 10], 1, 9)) // [10]

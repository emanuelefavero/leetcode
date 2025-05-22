// * Merge Two 2D Arrays by Summing Values

/*
You are given two 2D integer arrays nums1 and nums2.

- nums1[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
- nums2[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.

Each array contains unique ids and is sorted in ascending order by id.

Merge the two arrays into one array that is sorted in ascending order by id, respecting the following conditions:

- Only ids that appear in at least one of the two arrays should be included in the resulting array.
- Each id should be included only once and its value should be the sum of the values of this id in the two arrays. If the id does not exist in one of the two arrays, then assume its value in that array to be 0.

Return the resulting array. The returned array must be sorted in ascending order by id.
*/

/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @returns {number[][]}
 */

// O(n) time | O(n) space
function mergeArrays(nums1, nums2) {
  let map = new Map()

  for (let num of nums1) {
    let id = num[0]
    let value = num[1]
    map.set(id, (map.get(id) || 0) + value)
  }

  for (let num of nums2) {
    let id = num[0]
    let value = num[1]
    map.set(id, (map.get(id) || 0) + value)
  }

  let result = []
  for (let [key, value] of map) {
    result.push([key, value])
  }

  result.sort((a, b) => a[0] - b[0])

  return result
}

// -------------------------
// TESTS

console.log(
  mergeArrays(
    [
      [1, 2],
      [2, 3],
      [4, 5],
    ],
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ]
  )
) // [[1,6],[2,3],[3,2],[4,6]]
/*
Explanation: The resulting array contains the following:
- id = 1, the value of this id is 2 + 4 = 6.
- id = 2, the value of this id is 3.
- id = 3, the value of this id is 2.
- id = 4, the value of this id is 5 + 1 = 6.
*/

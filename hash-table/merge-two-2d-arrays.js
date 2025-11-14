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
  const map = new Map()

  for (const num of nums1) {
    const id = num[0]
    const value = num[1]
    map.set(id, (map.get(id) || 0) + value)
  }

  for (const num of nums2) {
    const id = num[0]
    const value = num[1]
    map.set(id, (map.get(id) || 0) + value)
  }

  const result = []
  for (const [key, value] of map) {
    result.push([key, value])
  }

  result.sort((a, b) => a[0] - b[0])

  return result
}

// -------------------------
// SOLUTION 2

// TIP: This is a two pointer approach

function mergeArrays2(nums1, nums2) {
  const result = []
  let i = 0
  let j = 0

  while (i < nums1.length && j < nums2.length) {
    // if the id of nums1 is less than the id of nums2, add nums1 to the result
    if (nums1[i][0] < nums2[j][0]) {
      result.push(nums1[i])
      i++
      // if the id of nums2 is less than the id of nums1, add nums2 to the result
    } else if (nums1[i][0] > nums2[j][0]) {
      result.push(nums2[j])
      j++
      // if the ids are equal, sum the values
    } else {
      result.push([nums1[i][0], nums1[i][1] + nums2[j][1]])
      i++
      j++
    }
  }

  // add the remaining elements of nums1 to the result
  while (i < nums1.length) result.push(nums1[i++])
  while (j < nums2.length) result.push(nums2[j++])
  // ? increment i and j after pushing the element to the result

  return result
}

// -------------------------
// TESTS

// 1
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

// 2
console.log(
  mergeArrays2(
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
